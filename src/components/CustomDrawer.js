import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { AuthContext } from "../context/AuthContext";
import Feather from "react-native-vector-icons/Feather";

const CustomDrawer = ({ navigation }) => {
  const { logout, userInfo } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        /* {...props} */
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        <ImageBackground
          source={require("../assets/images/menu-bg.jpeg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../assets/images/user-profile.jpg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}>
            {userInfo.data.name}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#FFF", marginRight: 5 }}>280 Coins</Text>
            <FontAwesome5 name="coins" size={14} color="white" />
          </View>
        </ImageBackground>

        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          {/* <DrawerItemList {...props} /> */}

          <Pressable
            onPress={() => navigation.navigate("Home2")}
            style={{
              padding: 8,
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              margin: 5, 
            }}
          >
            <Ionicons name="home-outline" size={21}   />
            <Text style={{  marginLeft: 8 }}>Home</Text>
          </Pressable>

            <Pressable
            onPress={() => navigation.navigate("Cart")}
            style={{
              padding: 8,
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              margin: 5, 
            }}
          >
            <Feather name="shopping-bag"    size={21} />
            <Text style={{   marginLeft: 8 }}>Cart</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Favorite")}
            style={{
              padding: 8,
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              margin: 5, 
            }}
          >
            <Ionicons name="heart-outline"   size={21} />
            <Text style={{  marginLeft: 8 }}>Favorite</Text>
          </Pressable>
        </View>
      </DrawerContentScrollView>

      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 12 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={{ paddingVertical: 12 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
