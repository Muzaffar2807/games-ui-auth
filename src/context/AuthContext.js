import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = (email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        let userInfoKey = res.headers["authorization"]
        setUserInfo(userInfo);
        setUserToken(userInfoKey)

        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        AsyncStorage.setItem('userToken' , userInfoKey);

        /* console.log(userInfo);
        console.log('User Token' + userInfoKey) */
         
      })
      .catch((e) => {
        console.log(`Loggin Error ${e}`);
      }); 
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const register = (name, email, username, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/auth/signup`, {
        name,
        email,
        username,
        password
      }).then((res) => {
        console.log(`Registered`)
      })
      .catch(e => {
        console.log(`Register Error ${e}`)
      }) 
    setIsLoading(false)
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      let userToken = await AsyncStorage.getItem("userToken");
      userInfo = JSON.parse(userInfo);

      if(userInfo){
        setUserToken(userToken);
        setUserInfo(userInfo )
      }
      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, register, isLoading, userToken, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
