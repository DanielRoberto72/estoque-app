import { StatusBar } from "expo-status-bar";
import React from "react";
import Swiper from "react-native-swiper";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import slide from "../../assets/home/slider.png";
import estoque from "../../assets/home/gerenciarProdutos.png";
import cadastrar from "../../assets/home/cadastrar.png";
import usuarios from "../../assets/home/gerenciarUsuarios.png";
import relatorio from "../../assets/home/relatorio.png";

const HomeBody = () => {
  const homeData = [
    {
      id: 1,
      titulo: "Vendas Hoje",
      quantidade: 0,
    },
    {
      id: 2,
      titulo: "Produtos Cadastrados",
      quantidade: 240,
    },
    {
      id: 3,
      titulo: "Baixo Estoque",
      quantidade: 19,
    },
    {
      id: 4,
      titulo: "Sem Estoque",
      quantidade: 1,
    },
  ];
  const { width: windowWidth, height: WindowHeight } = Dimensions.get("window");
  return (
    <ScrollView style={{ width: windowWidth, height: WindowHeight + 30 }}>
      <View style={styles.container}>
        <StatusBar style="dark" />

        <Swiper style={{ height: 190, borderRadius: 10 }}>
          {homeData.map((item) => (
            <View key={item.id} style={styles.slide}>
              <View
                style={{
                  width: windowWidth - 20,
                  height: windowWidth - 250,
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#FFF0F6",
                  borderRadius: 12,
                  flex: 1,
                  flexDirection: "row",
                  marginBottom: 15,
                  marginTop: 15,
                  borderLeftWidth: 10,
                  borderLeftColor: "#FFA500",
                }}
              >
                <View style={{ flexDirection: "column", marginLeft: 20 }}>
                  <Text
                    style={{ fontSize: 20, color: "#000", fontWeight: "600" }}
                  >
                    {item.titulo}
                  </Text>
                  <Text
                    style={{ fontSize: 18, color: "#000", fontWeight: "600" }}
                  >
                    {item.quantidade}
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    marginRight: 10,
                    padding: 10,
                    backgroundColor: "#FFA500",
                    borderRadius: 12,
                  }}
                >
                  <Image source={slide} style={styles.imagemSlide} />
                </View>
              </View>
            </View>
          ))}
        </Swiper>
        <View style={styles.informacoes}>
          <TouchableOpacity style={styles.cards}>
            <Image source={estoque} style={styles.imagem} />
            <Text style={styles.textoCards}>Registrar Venda</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cards}>
            <Image source={cadastrar} style={styles.imagem} />
            <Text style={styles.textoCards}>Gerenciar Produtos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.informacoes}>
          <TouchableOpacity style={styles.cards}>
            <Image source={usuarios} style={styles.imagem} />
            <Text style={styles.textoCards}>Gerenciar Usuários</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cards}>
            <Image source={relatorio} style={styles.imagem} />
            <Text style={styles.textoCards}>Relatórios</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  informacoes: {
    flex: 1,
    flexDirection: "row", // add this line
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 10,
  },
  cards: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    width: "47.5%",
    borderRadius: 10,
    backgroundColor: "#F8F7F3",
    borderColor: "#FFA500",
    borderLeftWidth: 10,
    marginLeft: 2.5,
  },
  textoCards: {
    color: "#000",
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 5,
  },
  imagem: {
    height: 45,
    width: 45,
    marginLeft: 3,
  },
  imagemSlide: {
    height: 80,
    width: 80,
  },
});

export default HomeBody;
