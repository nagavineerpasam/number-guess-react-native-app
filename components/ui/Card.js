import { View } from "react-native";
import { StyleSheet } from "react-native";
const Card = ({children}) => {
    return (
        <View style = {styles.card}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
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
});
export default Card;