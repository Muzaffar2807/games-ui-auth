import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";

import RegistrationSvg from "../assets/images/misc/registration.svg";
import GoogleSvg from "../assets/images/misc/google.svg";
import FacebookSvg from "../assets/images/misc/facebook.svg";
import TwitterSvg from "../assets/images/misc/twitter.svg";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { AuthContext } from "../context/AuthContext";

const RegisterScreen = ({ navigation }) => {
  const { register } = useContext(AuthContext);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <View style={{ alignItems: "center" }}>
          <RegistrationSvg
            height={300}
            width={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          />
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Register
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <GoogleSvg height={24} width={24} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <FacebookSvg height={24} width={24} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <TwitterSvg height={24} width={24} />
          </TouchableOpacity>
        </View>

        <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
          Or, register with Email ...
        </Text>

        <InputField
          label={"Full Name"}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <InputField
          label={"Email Address"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 8 }}
            />
          }
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <InputField
          label={"User Name"}
          icon={
            <MaterialIcons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 8 }}
            />
          }
          keyboardType="email-address"
          value={username}
          onChangeText={(text) => setUserName(text)}
        />

        <InputField
          label={"Password"}
          icon={
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 8 }}
            />
          }
          inputType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <CustomButton
          label={"Register"}
          onPress={() => {
            register(name, email, username, password);
          }}
          navigation={navigation}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text> Already Registered? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#AD40AF", fontWeight: "700" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
