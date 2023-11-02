


import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';


const firebase = require("firebase")
require("firebase/firestore")

const db = firebase.firestore();

export default function App() {

  const wrtM1 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({m1:e})}}
  const wrtM2 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({m2:e})}}
  const wrtM3 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({m3:e})}}
  const wrtM4 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({m4:e})}}
  const wrtM5 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({m5:e})}}
  const wrtM6 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({m6:e})}}
  const wrtM7 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({m7:e})}}
  const wrtM8 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({m8:e})}}
  const wrtM9 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({m9:e})}}

  const wrtTu1 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({tu1:e})}}
  const wrtTu2 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({tu2:e})}}
  const wrtTu3 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({tu3:e})}}
  const wrtTu4 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({tu4:e})}}
  const wrtTu5 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({tu5:e})}}
  const wrtTu6 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({tu6:e})}}
  const wrtTu7 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({tu7:e})}}
  const wrtTu8 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({tu8:e})}}
  const wrtTu9 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({tu9:e})}}

  const wrtW1 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({w1:e})}}
  const wrtW2 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({w2:e})}}
  const wrtW3 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({w3:e})}}
  const wrtW4 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({w4:e})}}
  const wrtW5 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({w5:e})}}
  const wrtW6 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({w6:e})}}
  const wrtW7 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({w7:e})}}
  const wrtW8 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({w8:e})}}
  const wrtW9 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({w9:e})}}

  const wrtTh1 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({th1:e})}}
  const wrtTh2 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({th2:e})}}
  const wrtTh3 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({th3:e})}}
  const wrtTh4 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({th4:e})}}
  const wrtTh5 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({th5:e})}}
  const wrtTh6 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({th6:e})}}
  const wrtTh7 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({th7:e})}}
  const wrtTh8 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({th8:e})}}
  const wrtTh9 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({th9:e})}}

  const wrtF1 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({f1:e})}}
  const wrtF2 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({f2:e})}}
  const wrtF3 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({f3:e})}}
  const wrtF4 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({f4:e})}}
  const wrtF5 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({f5:e})}}
  const wrtF6 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({f6:e})}}
  const wrtF7 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({f7:e})}}
  const wrtF8 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({f8:e})}}
  const wrtF9 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({f9:e})}}

  const wrtS1 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({s1:e})}}
  const wrtS2 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({s2:e})}}
  const wrtS3 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({s3:e})}}
  const wrtS4 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({s4:e})}}
  const wrtS5 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({s5:e})}}
  const wrtS6 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({s6:e})}}
  const wrtS7 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({s7:e})}}
  const wrtS8 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({s8:e})}}
  const wrtS9 = (e) =>{if(e.length > 0){db.collection("Evo1").doc("timetable").update({s9:e})}}


  return (
    <ScrollView >
      <View style={styles.container}>
        <Text style={styles.warning}>При вводе любых данных содержащих более 0 символов происходит сохранение,если эти данные вы ввели по ошибке,то прошлые данные уже не вернуть,только перезаполня ячейку правильной информацией!</Text>

        <Text style={styles.title}>Понедельник:</Text>

        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 1"} onChangeText={wrtM1}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 2"} onChangeText={wrtM2}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 3"} onChangeText={wrtM3}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 4"} onChangeText={wrtM4}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 5"} onChangeText={wrtM5}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 6"} onChangeText={wrtM6}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 7"} onChangeText={wrtM7}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 8"} onChangeText={wrtM8}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 9"} onChangeText={wrtM9}/>


        <Text style={styles.title}>Вторник:</Text>

        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 1"} onChangeText={wrtTu1}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 2"} onChangeText={wrtTu2}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 3"} onChangeText={wrtTu3}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 4"} onChangeText={wrtTu4}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 5"} onChangeText={wrtTu5}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 6"} onChangeText={wrtTu6}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 7"} onChangeText={wrtTu7}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 8"} onChangeText={wrtTu8}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 9"} onChangeText={wrtTu9}/>


        <Text style={styles.title}>Среда:</Text>

        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 1"} onChangeText={wrtW1}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 2"} onChangeText={wrtW2}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 3"} onChangeText={wrtW3}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 4"} onChangeText={wrtW4}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 5"} onChangeText={wrtW5}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 6"} onChangeText={wrtW6}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 7"} onChangeText={wrtW7}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 8"} onChangeText={wrtW8}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 9"} onChangeText={wrtW9}/>


        <Text style={styles.title}>Четверг:</Text>

        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 1"} onChangeText={wrtTh1}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 2"} onChangeText={wrtTh2}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 3"} onChangeText={wrtTh3}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 4"} onChangeText={wrtTh4}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 5"} onChangeText={wrtTh5}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 6"} onChangeText={wrtTh6}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 7"} onChangeText={wrtTh7}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 8"} onChangeText={wrtTh8}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 9"} onChangeText={wrtTh9}/>


        <Text style={styles.title}>Пятница:</Text>

        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 1"} onChangeText={wrtF1}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 2"} onChangeText={wrtF2}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 3"} onChangeText={wrtF3}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 4"} onChangeText={wrtF4}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 5"} onChangeText={wrtF5}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 6"} onChangeText={wrtF6}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 7"} onChangeText={wrtF7}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 8"} onChangeText={wrtF8}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 9"} onChangeText={wrtF9}/>


        <Text style={styles.title}>Суббота:</Text>

        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 1"} onChangeText={wrtS1}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 2"} onChangeText={wrtS2}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 3"} onChangeText={wrtS3}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 4"} onChangeText={wrtS4}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 5"} onChangeText={wrtS5}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 6"} onChangeText={wrtS6}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 7"} onChangeText={wrtS7}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 8"} onChangeText={wrtS8}/>
        <TextInput style={styles.input} placeholderTextColor={"#800000"} placeholder={"Урок 9"} onChangeText={wrtS9}/>

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
