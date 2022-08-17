import { Text,View, Pressable,StyleSheet,Image, ImageSourcePropType, Platform, Button, Alert } from "react-native";
import useBearStore from "../Zustand";

const CartItem = (props:any) => {
    let name = props.iname;
    let id = props.iid;
    let url = props.iimg_url;
    let zustandFn = useBearStore(state => state.addToCart);
    console.log(useBearStore(state => state.cart));
    return(
        <View style = {styles.gridItem}>
        <Pressable  android_ripple={{ color: '#ccc' }}
                    style={({ pressed }) => [
                        styles.button, pressed ? styles.buttonPressed : null,]}
                         >
          
            <View style={[styles.innerContainer, { backgroundColor:"lightblue" , justifyContent : "space-around"}]}>
                <Image source = {{uri : props.iimg_url}} style = {{ flex: 1,
    width: 180,
    height: 180,
    resizeMode: 'contain',
}}/>
                <Text style = {styles.title}>{name}</Text>
            </View>
        </Pressable>
    </View>
    );
}
export default CartItem;
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        backgroundColor : "yellow",
        margin: 5,
         height: 250,
         borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
         overflow: Platform.OS === 'ios' ? 'hidden' : 'visible',
    },
    button: {
      flex: 1,
    },
    buttonPressed: {
      opacity: 0.5,
    },
    innerContainer: {
      flex: 1,
      padding: 10,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 14,
    },
  });

  