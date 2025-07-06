import { View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
    let rndNum = Math.floor(Math.random() * (max - min)) + min;
    
    while (rndNum === exclude) {
        rndNum = Math.floor(Math.random() * (max - min)) + min;
    }
    
    return rndNum;
}

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [minBoundary, setMinBoundary] = useState(1);
    const [maxBoundary, setMaxBoundary] = useState(100);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
        
        let newMin = minBoundary;
        let newMax = maxBoundary;
        
        if (direction === 'lower') {
            newMax = currentGuess;
            setMaxBoundary(currentGuess);
        } else {
            newMin = currentGuess + 1;
            setMinBoundary(currentGuess + 1);
        }
        
        const newRndNum = generateRandomBetween(newMin, newMax, currentGuess);
        setCurrentGuess(newRndNum);
        }

    return (
        <View style={styles.screen}>
          <Title>Opponent's Guess</Title>
          <NumberContainer>{currentGuess}</NumberContainer>
           <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
            <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}> <Ionicons name="md-remove" size={24} color="white" /></PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}> <Ionicons name="md-add" size={24} color="white" /></PrimaryButton>
            </View>
            <View>

            </View>
           </View>
        </View>
    )
}

export default GameScreen; 

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
    },
    instructionText: {
        marginBottom: 24,
    },
    numberText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }

});