import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children , onPress }) {

    function pressHandler() {
        onPress();
    }

    return (

        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] :  styles.buttonInnerContainer}   onPress={pressHandler} android_ripple={{ color: Colors.primary800 }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,

        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28,
        borderWidth: 1,
        borderColor: '#fff',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    pressed: {
        opacity: 0.75,
    }


})