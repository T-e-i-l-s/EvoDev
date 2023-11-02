


import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';


const firebase = require("firebase")
require("firebase/firestore")

const db = firebase.firestore();

export default function App() {


  const wrtEv = (e) =>{if(e.length > 3){db.collection("Evo1").doc("news").update({event:e})}}
  const wrtN1 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("news").update({new1:e})}}
  const wrtN2 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("news").update({new2:e})}}
  const wrtN3 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("news").update({new3:e})}}
  const wrtN4 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("news").update({new4:e})}}
  const wrtN5 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("news").update({new5:e})}}


  const wrtMon = (e) =>{if(e.length > 3){db.collection("Evo1").doc("dez").update({mon:e})}}
  const wrtTue = (e) =>{if(e.length > 3){db.collection("Evo1").doc("dez").update({tue:e})}}
  const wrtWed = (e) =>{if(e.length > 3){db.collection("Evo1").doc("dez").update({wed:e})}}
  const wrtThu = (e) =>{if(e.length > 3){db.collection("Evo1").doc("dez").update({thu:e})}}
  const wrtFri = (e) =>{if(e.length > 3){db.collection("Evo1").doc("dez").update({fri:e})}}
  const wrtSat = (e) =>{if(e.length > 3){db.collection("Evo1").doc("dez").update({sat:e})}}


  return (
    <ScrollView >
      <View style={styles.container}>

        <Text style={styles.warning}>При вводе любых данных содержащих более 3 символов происходит сохранение,если эти данные вы ввели по ошибке,то прошлые данные уже не вернуть,только перезаполня ячейку правильной информацией!</Text>
        
        <Text style={styles.title}>Новости:</Text>

        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"event"} onChangeText={wrtEv}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"new1"} onChangeText={wrtN1}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"new2"} onChangeText={wrtN2}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"new3"} onChangeText={wrtN3}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"new4"} onChangeText={wrtN4}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"new5"} onChangeText={wrtN5}/>

        <Text style={styles.title}>Дежурство:</Text>

        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Monday"}   onChangeText={wrtMon}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Tuesday"}  onChangeText={wrtTue}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Wednesday"}onChangeText={wrtWed}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Thursday"} onChangeText={wrtThu}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Friday"}   onChangeText={wrtFri}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Saturday"} onChangeText={wrtSat}/>
      </View>
      


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800000',
    alignItems: 'center',
    height:"150%"
  },
  warning:{
    color:"white",
    textAlign:"center",
    padding:10,
    marginTop:20
  },
  title:{
    color:"white",
    textAlign:"center",
    padding:10,
    marginTop:20,
    fontSize:35
  },
  input: {
    width:"100%",
    fontSize:30,
    backgroundColor:"white",
    color:"#800000",
    borderColor:"#800000",
    borderWidth:2,
    padding:"4%"
  },
});
