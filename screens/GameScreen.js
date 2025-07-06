import { View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
    let rndNum = Math.floor(Math.random() * (max - min)) + min;
    
    while (rndNum === exclude) {
        rndNum = Math.floor(Math.random() * (max - min)) + min;
    }
    
    return rndNum;
}

function GameScreen({userNumber, onGameOver}) {
    console.log('GameScreen started with userNumber:', userNumber);
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    console.log('Initial guess:', initialGuess);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [minBoundary, setMinBoundary] = useState(1);
    const [maxBoundary, setMaxBoundary] = useState(100);

    useEffect(() => {
        console.log('useEffect triggered - currentGuess:', currentGuess, 'userNumber:', userNumber);
        if (currentGuess === userNumber) {
            console.log('Game Over! Calling onGameOver()');
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
          <Text style={styles.debugText}>Your number: {userNumber}</Text>
          <Text style={styles.debugText}>Current guess: {currentGuess}</Text>
          <Text style={styles.debugText}>Match: {currentGuess === userNumber ? 'YES' : 'NO'}</Text>
           <View>
            <Text>Higher or lower?</Text>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
            
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
    numberText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    debugText: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 4,
        color: 'white',
    },
});