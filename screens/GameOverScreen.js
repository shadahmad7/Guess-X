import React from "react";
import { View, StyleSheet, Text, Dimensions, Image, ScrollView, SafeAreaView } from "react-native";
import Colors from "../constants/colors";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";


const GameOverScreen = (props) => {
  return (
      <ScrollView>
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          source={require("../assets/success.png")}
          //  source={{uri:'https://img.freepik.com/free-vector/hand-drawn-mountain-landscape_23-2148059439.jpg?size=338&ext=jpg'}}
          style={styles.image}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          You phone needed <Text style={styles.highlight}>{props.rounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>{" "}
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7/ 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get('window').width * 0.7 / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultContainer: {
    marginHorizontal: 30,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    marginBottom: 8,
  },
});

export default GameOverScreen;
