
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

const firebase = require("firebase")
require("firebase/firestore")

const db = firebase.firestore();


export default function App() {

  const wrtL1 = (e) =>{if(e.length > 3){db.collection("Evo1").doc( "hw").update( {bio:e})}}
  const wrtL2 = (e) =>{if(e.length > 3){db.collection("Evo1").doc( "hw").update( {tur1:e})}}
  const wrtL3 = (e) =>{if(e.length > 3){db.collection("Evo1").doc( "hw").update( {tur2:e})}}
  const wrtL4 = (e) =>{if(e.length > 3){db.collection("Evo1").doc( "hw").update( {geo:e})}}
  const wrtL5 = (e) =>{if(e.length > 3){db.collection("Evo1").doc( "hw").update( {art:e})}}
  const wrtL6 = (e) =>{if(e.length > 3){db.collection("Evo1").doc( "hw").update( {eng1:e})}}
  const wrtL7 = (e) =>{if(e.length > 3){db.collection("Evo1").doc( "hw").update( {eng2:e})}}
  const wrtL8 = (e) =>{if(e.length > 3){db.collection("Evo1").doc( "hw").update( {his:e})}}
  const wrtL9 = (e) =>{if(e.length > 3){db.collection("Evo1").doc( "hw").update( {lit:e})}}
  const wrtL10 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("hw").update({alge:e})}}
  const wrtL101 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("hw").update({geom:e})}}
  const wrtL11 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("hw").update({mus:e})}}
  const wrtL12 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("hw").update({obs:e})}}
  const wrtL13 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("hw").update({rl1:e})}}
  const wrtL14 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("hw").update({rl2:e})}}
  const wrtL15 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("hw").update({r1:e})}}
  const wrtL16 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("hw").update({r2:e})}}
  const wrtL17 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("hw").update({rus:e})}}
  const wrtL18 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("hw").update({tec:e})}}
  const wrtL19 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("hw").update({pe:e})}}
  const wrtL20 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("hw").update({physic:e})}}
  const wrtL21 = (e) =>{if(e.length > 3){db.collection("Evo1").doc("hw").update({info:e})}}

  return (
    <ScrollView >
      <View style={styles.container}>
        <Text style={styles.title}>При вводе любых данных содержащих более 3 символов происходит сохранение,если эти данные вы ввели по ошибке,то прошлые данные уже не вернуть,только перезаполня ячейку правильной информацией!</Text>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Биология"}           onChangeText={wrtL1 }/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Турецкий(рус)"}      onChangeText={wrtL2 }/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Турецкий(тат)"}      onChangeText={wrtL3 }/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"География"}         onChangeText={wrtL4 }/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"ИЗО"}               onChangeText={wrtL5 }/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Английский(сред)"}  onChangeText={wrtL6 }/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Английский(продв)"} onChangeText={wrtL7 }/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"История"}           onChangeText={wrtL8 }/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Литература"}        onChangeText={wrtL9 }/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Алгебра"}        onChangeText={wrtL10}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Геометрия"}        onChangeText={wrtL101}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Музыка"}            onChangeText={wrtL11}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Обществознание"}    onChangeText={wrtL12}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Род.лит(рус)"}      onChangeText={wrtL13}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Род.лит(тат)"}      onChangeText={wrtL14}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Род.яз(рус)"}       onChangeText={wrtL15}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Род.яз(тат)"}       onChangeText={wrtL16}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Русский.яз"}        onChangeText={wrtL17}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Технология"}        onChangeText={wrtL18}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Физ.культура"}      onChangeText={wrtL19}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Физика"}        onChangeText={wrtL20}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"}  placeholder={"Информатика"}      onChangeText={wrtL21}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#800000",
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  title:{
    color:"white",
    textAlign:"center",
    padding:10,
    margin:20
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
