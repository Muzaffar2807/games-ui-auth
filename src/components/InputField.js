import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const InputField = ({ label, icon, inputType, keyboardType, value, onChangeText }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}
    >
     {icon}
      {inputType == 'password' ? (
        <TextInput 
            placeholder={label}
            keyboardType={keyboardType}
            style={{ flex: 1, paddingVertical: 0}}
            secureTextEntry={true}
            value={value}
            onChangeText={onChangeText}
        />
      ) : (
        <TextInput 
            placeholder={label}
            keyboardType={keyboardType}
            style={{ flex: 1, paddingVertical: 0}}
            value={value}
            onChangeText={onChangeText}
        />
      )}
    </View>
  );
};

export default InputField;
