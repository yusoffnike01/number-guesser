import { View, Text, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen() {
    return (
        <View style={styles.screen}>
            <Title>Game Over!</Title>
            <Text style={styles.summaryText}>Your phone needed X rounds to guess the number Y.</Text>
            <PrimaryButton>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
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
});