import { Image } from "react-native";
import { StyleSheet } from "react-native";
const Logo = () => {
    return (
        <Image style = {styles.logoimage}
        source={require('./one.png')}
      />
    );
}
export default Logo;

const styles = StyleSheet.create({
    logoimage:{
        width : 50,
        height : 50
    }
});