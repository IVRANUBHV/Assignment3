import { Text, View, Image, StyleSheet, Pressable } from "react-native";
const CartIcon = (props:any) => {
    return(
        <Pressable onPress={props.onclick}>
    <View >
        <Image 
        style = {styles.logoimage}
        source={require('./shopping-cart-icon.png')}
      />
    </View>
    </Pressable>
    );
   
}
export default CartIcon;
const styles = StyleSheet.create({
    logoimage:{
        width : 50,
        height : 50
    }
});