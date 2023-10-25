import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//icons
import Help from"../assets/tabBar/question.png"
import Casa from "../assets/tabBar/icons8-casa-24.png"
import Service from "../assets/tabBar/settings.png"
import Wallet from "../assets/tabBar/credit-card.png"
import Dollar from '../assets/tabBar/dollar.png'

//routes
import HomeRoutes from '../routes/HomeRoutes';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress})=>(
  <View style={{ flexDirection: 'column', margin: 0}}>
    <TouchableOpacity style={{
      top: -10,
      marginBottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
    }}onPress={onPress}>
      <View style={{
        width: 70,
        height:70,
        borderRadius:35,
        backgroundColor: '#FFA500',
      }}>
        {children}
      </View>
    </TouchableOpacity>
    <Text style={{top: -10, fontSize:11, fontWeight:'600', marginHorizontal: 15, marginVertical: 0}}>
      Recarga
    </Text>
  </View>
)
export default function Tabs(){
  return(
  <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [
          {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position:'absolute',
            backgroundColor: '#fff',
            height: 70,
            borderTopColor: "#fff",
            elevation:4,
            marginLeft: "2.8%",
            borderRadius: 20,
            marginBottom:25,
            width: '95%',
            
            //ios
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.40,
            shadowRadius: 2.62,
          },
          null
        ]}}
      >
        <Tab.Screen name='Home' component={HomeRoutes}  options={{tabBarIcon: ({focused})=>(
            <View style={{marginLeft: 30}}>
              <Image source={Casa}
              resizeMode='contain'
              style={{tintColor: focused ? '#FFA500' : '#000', marginLeft: 2, marginTop: 20}} />
              <Text style={styles.labelAjustar}>Home</Text>
            </View>
          )}}
        />
        <Tab.Screen name='Carteira' component={HomeRoutes} options={{tabBarIcon: ({focused}) =>  (
            <View style={{marginLeft: 30}}>
              <Image source={Wallet}
                resizeMode='contain'
                style={{tintColor: focused ? '#FFA500' : '#000', width: 25, height: 30, marginLeft: -10, marginTop: 20}} 
              />
              <Text style={[styles.label, { marginLeft: -18 }]}>Carteira</Text>
            </View>
          )}}
        /> 
        <Tab.Screen name='Recarga' component={HomeRoutes} options={{tabBarIcon: ({focused})=>(
              <Image  source={Dollar}
                style={{ tintColor: '#fff', width: 35, height: 35}}
              />
          ), tabBarButton:(props)=>(
            <CustomTabBarButton {...props}/>
          ) }}
        />
        <Tab.Screen name='Serviços' component={HomeRoutes} options={{tabBarIcon: ({focused})=>(
            <View>
              <Image source={Service}
              resizeMode='contain'
              style={{tintColor: focused ? '#FFA500' : '#000', marginLeft: 10, width: 25, height: 28, marginTop: 20 }}/>
              <Text style={styles.label}>Serviços</Text>
            </View>
        )}}/>
        <Tab.Screen name='Ajuda' component={HomeRoutes} options={{tabBarIcon: ({focused})=>(
            <View style={{ marginRight: 30}}>
              <Image  source={Help}
                style={{tintColor: focused ? '#FFA500' : '#000', width: 25, height: 25, marginTop: 20}}
              />
              
              <Text style={styles.labelAjustar}>Ajuda</Text>
            </View>
          )}}
        />
      </Tab.Navigator>
  </NavigationContainer>
  )
  
}

const styles = StyleSheet.create({
  label:{
    fontSize: 10,
    fontWeight: '600',
  },
  labelAjustar:{
    fontSize: 10,
    fontWeight: '600',
    borderTopWidth: 6,
    borderTopColor:"#fff",
  }
})

