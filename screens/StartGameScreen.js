import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import Card from "../components/Card";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";


const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width /4);

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width /4);
    };
  
    Dimensions.addEventListener('change', updateLayout);
  });

  

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber)|| chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number should between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
    <Card style={styles.summaryContainer}>
    <BodyText>You Selected</BodyText>
    <NumberContainer>{selectedNumber}</NumberContainer>
    <MainButton  onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
    </Card>
    );
};

  return (
    <ScrollView>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView>
      <View style={styles.screen}>
        <Text style={styles.title}>Start New Game</Text>
        <Card style={styles.inputContainer}>
          <BodyText style={styles.text}>Select A Number</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={{width : buttonWidth}}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.secondary}
              />
            </View>
            <View style={{width : buttonWidth}}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
  },
  inputContainer: {
    minWidth: 300,
    width: "80%",
    maxWidth: '95%',
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  // button: {
  //   width: Dimensions.get('window').width / 4
  // },
  input: {
    width: 80,
    textAlign: "center",
  },
  summaryContainer: {
marginTop: 20,
alignItems:'center',
  },
  text : {
    fontFamily: 'open-sans',
  }
});

export default StartGameScreen;
