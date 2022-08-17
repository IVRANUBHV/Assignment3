import { SafeAreaView, Text,FlatList } from "react-native";
import useBearStore from "../Zustand";
import Header from "../Components/Header";
import CartItem from "../Components/CartItem";
const renderItemFn = (itemData:any) =>{
    let {name,img,id} = itemData.item;
    return (
        <CartItem iname = {name} iimg_url = {img} iid = {id} /> 
    );
  }
const CartScreen = ({navigation}: {navigation: any}) => {
    const cartScreenPress = () => {
    
        navigation.navigate("HomeScreen");
       }
    const formattedData = useBearStore(state => state.cart);
    return (
        <SafeAreaView style = {{flex:1}}>
            <Header onclick = {cartScreenPress}/>
             <FlatList data={ formattedData}
    renderItem = {renderItemFn}
    keyExtractor = {item => item.id}  
     
    
    />
        </SafeAreaView>
        
    );
};
export default CartScreen;