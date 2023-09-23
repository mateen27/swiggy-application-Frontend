import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import hotels from '../data/hotels'
import MenuItem from "../components/MenuItem";

const HomeScreen = () => {
    const data = hotels;
  return (
    <ScrollView style={{ marginTop : 50 }}>
      {/* Search Bar */}
      <View style={styles.form}>
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Search for Restaurants items or more"
        />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>

      {/* Image Slide Component */}
      <Carousel />

      {/* Food Items Types */}
      <FoodTypes/>

      {/* Quick Food Component */}
      <QuickFood/>

      {/* Filter Button */}
      <View style = {{flexDirection : 'row' , alignItems : 'center' , justifyContent : 'space-around'}}>
        <Pressable style ={{marginHorizontal : 10 , flexDirection : 'row' , alignItems : 'center' , borderWidth : 1 , borderColor : '#D0D0D0' , padding : 10 , borderRadius : 20 , justifyContent : 'center' , width : 120}}>
            <Text style = {{marginRight : 6}}>Filter</Text>
            <Ionicons name="filter" size={20} color="black" />
        </Pressable>

        <Pressable style ={{marginHorizontal : 10 , flexDirection : 'row' , alignItems : 'center' , borderWidth : 1 , borderColor : '#D0D0D0' , padding : 10 , borderRadius : 20 , justifyContent : 'center' , width : 120}}>
            <Text>Sort By Rating</Text>
        </Pressable>

        <Pressable style ={{marginHorizontal : 10 , flexDirection : 'row' , alignItems : 'center' , borderWidth : 1 , borderColor : '#D0D0D0' , padding : 10 , borderRadius : 20 , justifyContent : 'center' , width : 120}}>
            <Text>Sort By Price</Text>
        </Pressable>
      </View>

      {/* MenuItems */}
      {
        data.map((item , index) => (
            <MenuItem index={index} item = {item}/>
        ))
      }
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 7,
  },
});
