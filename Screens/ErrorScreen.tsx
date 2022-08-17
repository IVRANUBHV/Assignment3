import { ImageBackground, StyleSheet, Text } from "react-native";
const image = { uri: "https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52393.jpg" };
const ErrorScreen = (props:any) => {
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style = {styles.text}> {props.error_msg} </Text>
        </ImageBackground>
    );
}
export default ErrorScreen;
const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
    }
  });
  