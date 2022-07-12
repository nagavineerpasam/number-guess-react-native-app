import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({children}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.numberText}>{children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent600,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent600,
        fontWeight: 'bold',
        fontSize: 36,
    }
});

export default NumberContainer;