import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.screen}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}> Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary500,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontWeight: 'bold',
        color: Colors.primary500,
    },

});