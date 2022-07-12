import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert} from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import {FontAwesome5} from '@expo/vector-icons';
const generateNum = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateNum(min, max, exclude);
    }
    return rndNum;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}) => {
    const initialGuess = generateNum(1, 100 , userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (userNumber === currentGuess) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    const nextGuessHandler = (direction) => {
        if (direction === 'lower' && currentGuess < userNumber || direction === 'higher' && currentGuess > userNumber){
            Alert.alert("Don't lie", 'You know that this is wrong...', [{text: 'Sorry!', style:'cancel'}])
            return;
        }
        if (direction === 'lower') { 
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRnd = generateNum(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRnd);
    }
    return (
        <View style = {styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Text style = {{fontSize: 20, color: 'white', marginBottom: 10}}>Higher or lower?</Text>
                <View style = {{flexDirection: 'row'}}>
                    <View style = {styles.buttonContainer}>
                        <PrimaryButton onPress = {nextGuessHandler.bind(this, 'lower')}>
                            <FontAwesome5 name = 'minus' size = {20}/>
                        </PrimaryButton>
                    </View>
                    <View style = {styles.buttonContainer}>
                        <PrimaryButton onPress = {nextGuessHandler.bind(this, 'higher')}>
                            <FontAwesome5 name = 'plus' size = {20}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View></View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent600,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent600,
        padding: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});