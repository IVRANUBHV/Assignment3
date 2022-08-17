import { useQuery } from "react-query";
import axios from "axios";
import { Text, View, FlatList, Alert, SafeAreaView } from "react-native";
import Item from "./Components/Item";
import LoadingScreen from "./Screens/LoadingScreen";
import ErrorScreen from "./Screens/ErrorScreen";
import Header from "./Components/Header";
let ScreenName:string;
const HOME = "HomeScreen";
const CART = "SecondScreen";
ScreenName = HOME;
interface ITEM {
  name : string;
  img_url : string;
  price : number;
}
const DEFAULT_IMG_URL = "https://powermaccenter.com/images/products_attr_img/matrix/default.png";
let addItemInCartZu:any;
const renderItemFn = (itemData:any) =>{
  let {name,img_url,id} = itemData.item;
  return (
      <Item iname = {name} iimg_url = {img_url} iid = {id} /> 
  );
}

// ------ MAKING THE API CALL

const fetchApiData = async () => {
   const {data} = await axios.get("https://api.opensea.io/api/v1/collections?offset=0&limit=50");
   return data;
}

// ------ FORMATTING THE DATA
let hash = 1;
let formatData = (data:any) =>{
  let dataArray = [];
  for (let entry of data){
    let {name,image_url,stats} = entry;
    let {average_price} = stats;
    if(!image_url){
      image_url = DEFAULT_IMG_URL;
    }
    if(average_price === 0.0){
      average_price = 50;
    }
    let item = {
      "name" : name,
      "img_url" : image_url,
      "price" : average_price,
      "id" : hash
    }
    hash++;
    dataArray.push(item);
  }
  return dataArray;
}
//
 const HomeScreen  = ({navigation}: {navigation: any}) => {
   const cartScreenPress = () => {

    navigation.navigate("SecondScreen");
   }
   const result = useQuery("app-data", fetchApiData);
   const {data,isLoading,isError,error} = result;
    if(isLoading){
      return <LoadingScreen/>
    }
    if(axios.isAxiosError(error) && isError){
        
        return (
                <ErrorScreen error_msg = {error.message} />
            );
    }

  let formattedData:any= formatData(data?.collections);
  //console.log(formattedData);
  
  
  return (
    <SafeAreaView style={{flex:1}}>
    <Header onclick = {cartScreenPress} />
    <FlatList data={ formattedData}
    renderItem = {renderItemFn}
    keyExtractor = {item => item.id}  
    numColumns = {2} 
    
    />
    </SafeAreaView>
  );
}
export default HomeScreen;