import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import GamingImg from "./src/assets/images/misc/gaming.svg";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();


export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Main} name="Main" options={{ headerShown: false}}/>
        <Stack.Screen component={HomeScreen} name="Home" options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const Main = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={{ marginTop: 20}}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#20315f" }}>
          GAMEON
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
        <GamingImg
          width={300}
          height={300}
          style={{ transform: [{ rotate: "-15deg" }] }}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: "#AD40AF",
          padding: 20,
          width: "90%",
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 50
        }}
        
      >
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward" size={22} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

/* const HomeScreen = () => {
  return(
    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Text>
        Home Screen
      </Text>
    </View>
  )
} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
