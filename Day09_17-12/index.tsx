import { Image, StyleSheet,Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("../assets/images/react-logo.png")} style={styles.logo}/>
      <Text style={styles.name}>Hello World!</Text>
      <Text>My first React Native cross platform app.</Text>
    </View>
  );
}

const styles=StyleSheet.create({
  logo:{
    width:100,
    height:100,
    borderStyle:"solid",
    borderWidth:3,
    borderColor:"blue"
  },
  name:{
   fontSize: 20,
   fontStyle: "italic"
  }
})