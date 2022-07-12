import { Button, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({startAgain}) => {
    return (
        <View>
            <Text style = {styles.gameOver}>Game Over!</Text>
            <View style = {{marginHorizontal: 20, marginTop: 100}}>
                <PrimaryButton onPress = {startAgain}>HOME</PrimaryButton>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    gameOver: {
        marginTop: 100, 
        textAlign: 'center',
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#3b021f',
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        color: 'white',
        fontSize: 30,
    },
})

export default GameOverScreen;