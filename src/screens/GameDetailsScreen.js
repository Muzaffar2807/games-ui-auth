import { View, Text, Image } from "react-native";
import React from "react";

const GameDetailsScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Image
          source={route.params?.photo}
          style={{ width: 200, height: 200}}
        />
      </View>

      <Text>GameDetailsScreen</Text>
      <Text> {route.params?.title} </Text>
    </View>
  );
};

export default GameDetailsScreen;
