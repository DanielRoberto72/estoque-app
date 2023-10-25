import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";

import Logo from '../../assets/icons8-coquetel-100.png'
import arrowLeft from '../../assets/left-arrow.png'

import { useNavigation } from "@react-navigation/native";


export default function Header({ height, marginTop, page }){
    const navigation = useNavigation()
    
    return(
        <View style={style.cartaoHome}>
            {page !== 'Home' ? 
                <TouchableOpacity onPress={()=> {
                        navigation.goBack()
                    }} style={{ marginTop: '15%'}}
                >
                    <Image source={arrowLeft} style={marginTop ? [style.imagemLogin,{marginTop:marginTop}] : style.arrow}/> 
                </TouchableOpacity>
                : 
                <View style={{ marginLeft: '15%'}} />
            }
                <Image 
                    source={Logo} 
                    style={style.imagem}
                />

            {!height ?
                <View><Text style={{color: "#FFA500"}}>_______________</Text></View>
            :   null}
               
        </View>
    )
}

const style = StyleSheet.create({
    arrow: {
        width: 20,
        height: 20,
        marginLeft: 42,
        tintColor: '#FFF'
    },
    menubar: {
        marginTop: '14%',
        marginBottom: 10,
        marginRight: 30,
        width: 30,
        height: 30,
        paddingRight: 30,
        tintColor: '#FFF'
    },
    imagem:{
        marginTop: '10%',
        marginLeft: 45,
        marginBottom: 10,
        height: 50,
        width: 50
    },
    topo:{
        flexDirection: 'row',
    },
    imagemLogin:{
        justifyContent:"center",
        marginBottom: 10,
        width: 105,
        height: 50,
        marginLeft: '-16%'
    },
    texto:{
        height: "100%",
    },
    cartaoHome: {
        flex: 1,
        backgroundColor: '#FFA500',
        flexDirection: 'row',
        justifyContent: "space-between",
        height: 100,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 30,
        marginRight: 16,
      },
      titulo: {
        fontSize: 20,
        lineHeight: 22,
        fontWeight: "bold",
        color: "#0063F1"
      },
    
}
)