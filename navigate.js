import Home from "./Components/home";
import HW from "./Components/kir";
import News from "./Components/alex";
import Time from "./Components/time";
import Que from "./Components/quest";


import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";




const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="kir"
                component={HW}
                options={{title:"Домашнее задание"}}
            />
            <Stack.Screen
                name="alex"
                component={News}
                options={{title:"Новости, дежурство"}}
            />
            <Stack.Screen
                name="time"
                component={Time}
                options={{title:"Расписание"}}
            />
            <Stack.Screen
                name="que"
                component={Que}
                options={{title:"Настройки квеста"}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}