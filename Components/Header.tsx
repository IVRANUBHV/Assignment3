import { Text, View, StyleSheet } from "react-native";
import CartIcon from "./CartIcon";
import Logo from "./Logo";
const Header = (props:any) => {
    return(
    <View style = {styles.container}>
        <Logo/>
        <Text style = {styles.logoName}>OneStore</Text>
        <CartIcon onclick = {props.onclick}/>
    </View>
    );
    
}
export default Header;

const styles = StyleSheet.create({
    container: {
      alignSelf : "stretch" ,
      flexDirection : "row",
      alignItems:"center",
      justifyContent:"space-between",
   
      padding : 5
    },
    logoName:{
        fontSize:25,
    }
});