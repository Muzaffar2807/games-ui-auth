import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ label, onPress, navigation}) => {
  return (
    <TouchableOpacity
      onPress={onPress} 
      style={{
        backgroundColor: "#AD40AF",
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}
    >
      <Text
        style={{
          color: "#FFF",
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
