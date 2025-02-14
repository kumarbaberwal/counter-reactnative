import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {

    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count => count + 1);
    }

    const decreament = () => {
        setCount(count => count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return <View
        style={styles.container}
    >
        <Text
            style={styles.countText}
        >
            {count}
        </Text>
        <View
            style={styles.buttons}
        >
            <Pressable
                onPress={decreament}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    -
                </Text>
            </Pressable>
            <Pressable
                onPress={increament}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    +
                </Text>
            </Pressable>
        </View>
        <Pressable
            onPress={reset}
            style={[styles.button, { width: '85%', margin: 30 }]}
        >
            <Text
                style={[styles.buttonText, { fontSize: 35, }]}
            >
                Reset
            </Text>
        </Pressable>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    countText: {
        fontSize: 100,
        marginBottom: 30,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        backgroundColor: 'orange',
        width: 150,
        // height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,

    },
    buttonText: {
        fontSize: 40,
    }
})