import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";
import { freeGames, paidGames } from "../model/data";
import { AuthContext } from "../context/AuthContext";
import SafeViewAndroid from "../components/SafeViewAndroid";
/* DEPRECIETED import Carousel from "react-native-snap-carousel"; */

const HomeScreen = ({ navigation }) => {
  const [gamesTab, setGamesTab] = useState(1);
  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };


  const { userInfo } = useContext(AuthContext);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Hello {userInfo.data.name}
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../assets/images/user-profile.jpg")}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 8,
          }}
        >
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{ marginRight: 5 }}
          />
          <TextInput placeholder="Search" />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "#0aada8" }}>See all</Text>
          </TouchableOpacity>
        </View>

        {/*  <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          
        /> */}

        <View style={{ marginVertical: 10 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to Play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          freeGames.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate("GameDetails", {
                  title: item.title,
                  id: item.id,
                  photo: item.poster
                })
              }
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate("GameDetails", {
                  title: item.title,
                  id: item.id, 
                  photo: item.poster
                })
              }
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
