import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from "react-native";
import Card from '../components/ui/Card';
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from '../constants/colors';

const StartGameScreen = ({onNumberPick}) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const inputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    };

    const resetInputValue = () => {
        setEnteredNumber('');
    }

    const confirmInptHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99 || chosenNumber === -0) {
            Alert.alert('Invalid number!',
             'Number has to be a number between 0 to 99',
              [{text: 'Okay', style: 'destructive', onPress: resetInputValue}]);
            return;
        };
        onNumberPick(chosenNumber);
    };

    return (
        <Card style = {styles.inputContainer}>
            <TextInput 
                onChangeText={inputHandler}
                value={enteredNumber}
                style = {styles.numberInput}
                maxLength = {2}
                keyboardType = 'number-pad'/>
            <View style = {styles.buttonsContainer}>
                <View style = {styles.buttonContainer}>
                    <PrimaryButton onPress = {resetInputValue}>Reset</PrimaryButton>
                </View>
                <View style = {styles.buttonContainer}>
                    <PrimaryButton onPress = {confirmInptHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#3b021f',
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }, 
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent600,
        borderBottomWidth: 2,
        color: Colors.accent600,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});

export default StartGameScreen;