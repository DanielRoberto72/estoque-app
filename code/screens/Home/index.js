import React from "react";
import {ScrollView, Dimensions} from "react-native";
import HomeBody from "./homeBody";
import Header from "../../components/Header";


export default function Home(){
    const { width: windowWidth, height: WindowHeight } = Dimensions.get("window");
    return(
        <ScrollView style={{backgroundColor: '#fff'}}>
            <Header page={'Home'}/>
            <HomeBody/>
        </ScrollView>
    )
}