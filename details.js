import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
  SectionList,
  Pressable,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NavigateToBooks = (props) =>{
  props.navigation.navigate("Books");
};
const image2 ={
  uri:"http://s3.amazonaws.com/themorning-aruna/wp-content/uploads/2021/07/10235907/Litro-laugf.jpg"
};

function Home1(props) {
  return (
    <View style={[
      styles.container,
      {
        flexDirection:"column",
      },
    ]}>
      <Image source={image2} style={styles.image}/>
      <View style={[styles.flexbox1, {flex:1,backgroundColor:"black"}]}>
        <Text style={styles.wellcome}>Welcome to SL GAS</Text>
      </View>

      <View style ={{flex:1, backgroundColor:"#F3E6F0"}}>
        <View
        style={{
          flex:1,
          flexDirection:"row",
          justifyContent:"space-between",
          marginVertical:30,
          padding:10,
        }}
        >
          <View style={{width:160, height:110, backgroundColor: "white"}}>
            <View style={styles.signupButto}>
              <TouchableOpacity
              onpress={() => NavigateToBooks(props)}
              style={styles.obaz}>
<Text style ={styles.as}> Litro </Text>
              </TouchableOpacity>
              </View>
              </View>

              <View style={{ width: 160, height: 110, backgroundColor: "white" }}>
            <View style={styles.signupButto}>
              <TouchableOpacity style={styles.obaz2}>
                <Text style={styles.as}> Laugfs </Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    
    
    </View>
  );
}

   

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical:100, backgroundColor:"#D3D3D3" }}>
      
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ 
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"#D3D3D3" }}>

      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

const gas_app = (props) =>{
  return (
    <Tab.Navigator
      initialRouteName="Home1"
      activeColor="white"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "#009688" }}
    >
      <Tab.Screen
        name="Home1"
        component={Home1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={"black"} size={24} />
          ),
}}/> 
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={"black"} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
 
 container: {
  flex: 1,
 },
 wellcome:{
   fontWeight:"bold",
   fontSize:30,
   color:"white",
   textShadowRadius:100,
   textShadowColor:"black",
 },
 flexbox1:{
   justifyContent:"center",
   alignItems:"center",
   margin:3,
 },
 signupButto:{},
 button:{
   alignItems:"center",
   justifyContent:"center",
   paddingVertical:12,
   paddingHorizontal:32,
   borderRadius:4,
   elevation:3,
   backgroundColor:"white",
   height:100,
   borderRadius:10,
 },
 text:{
  fontSize: 16,
  lineHeight: 21,
  fontWeight: "bold",
  letterSpacing: 0.25,
  color: "#ee4035",
 },
 obaz: {
  backgroundColor: "#0000FF",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
},
obaz2: {
  backgroundColor: "#FFEB2A",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
},
as: {
  fontSize: 18,
  fontWeight: "bold",
  color: "white",
},
image: {
  justifyContent: "center",
  height: 80,
  margin: 5,
  borderRadius: 10,
},
});

export default gas_app;  
