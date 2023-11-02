
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, Text, View, TextInput } from 'react-native';

const firebase = require("firebase")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCfZ1GVgwffHq5h2mcJHjIaNc0SgkH-4-0",
  authDomain: "evoline-bd9c1.firebaseapp.com",
  projectId: "evoline-bd9c1",
  storageBucket: "evoline-bd9c1.appspot.com",
  messagingSenderId: "661077431736",
  appId: "1:661077431736:web:446a532725153626a3ab4d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



export default function App({navigation}) {

  
  const open = (e) => {
      if (e == "sromce"){
        navigation.navigate("kir")
      }else if(e == "89872060903l"){
        navigation.navigate("alex")
      }else if(e == "zaxipv"){
        navigation.navigate("time")
      }else if(e == "quest"){
        navigation.navigate("que")
      }
  }
  return (
    
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={open} placeholder={"password"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor:"white",
    width:"93%",
    height:"5%",
    borderRadius:30,
    padding:"7%" ,
    fontSize:30,
    paddingVertical:0,
  },
});
