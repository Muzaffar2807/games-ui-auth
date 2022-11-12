import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import GamingImg from "../assets/images/misc/gaming.svg";
import SafeViewAndroid from "../components/SafeViewAndroid";

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#20315f" }}>
            GAMEON
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <GamingImg
            width={300}
            height={300}
            style={{ transform: [{ rotate: "-15deg" }] }}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{
            backgroundColor: "#AD40AF",
            padding: 20,
            width: "90%",
            borderRadius: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 50,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
            Let's Begin
          </Text>
          <MaterialIcons name="arrow-forward" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
