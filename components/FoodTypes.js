import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FoodTypes = () => {
    const types = [
        {
            id:"0",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq",
            name:"Biriyani",
        },
        {
            id:"1",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc",
            name:"Dessert"
        },
        {
            id:"2",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs",
            name:"Burger"
        },
        {
            id:"3",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud",
            name:"Salad",

        },
        {
            id:"4",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb",
            name:"Sandwiches"
        }
    ]

  return (
    <View>
        <Text style = {{marginTop : 12 , marginHorizontal: 15 , fontSize : 20 , fontWeight : 'bold'}} >What's on your mind?</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator = {false} >
        {
            types.map((item , index) => (
                <View style ={{margin : 12}} key={index}>
                    <Image source={{uri : item.image}} style={{height : 60 , width : 60 , borderRadius : 30}}/>
                    <Text style = {{marginTop : 6 , textAlign : 'center'}}>{item.name}</Text>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({})