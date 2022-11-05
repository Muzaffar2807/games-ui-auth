import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CustomSwitch = ({ selectionMode, option1, option2, onSelectSwitch }) => {

  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const upadateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value)
  }

  return (
    <View 
        style={{
            height: 44,
            width:" 100%",
            backgroundColor: "#e4e4e4",
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10
        }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => upadateSwitchData(1)}
        style={{
            flex: 1,
            backgroundColor: getSelectionMode == 1 ? "#AD40AF": '#e4e4e4',
            borderRadius: 10,
            justifyContent: 'center', 
            alignItems: 'center'
        }}
      >
        <Text style={{
            color: getSelectionMode == 1 ? 'white' : "#AD40AF",
            fontSize: 14,
            fontWeight: 'bold',

        }}>
            {option1}
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        activeOpacity={1}
        onPress={() => upadateSwitchData(2)}
        style={{
            flex: 1,
            backgroundColor: getSelectionMode == 2 ? "#AD40AF" : '#e4e4e4',
            borderRadius: 10,
            justifyContent: 'center', 
            alignItems: 'center'
        }}
      >
        <Text style={{
            color: getSelectionMode == 2 ? 'white' : "#AD40AF",
            fontSize: 14,
            fontWeight: 'bold',
            
        }}>
            {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSwitch;
