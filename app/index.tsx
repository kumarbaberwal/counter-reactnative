import { decrement, increment, reset } from "@/features/counter/counterSlice";
import { RootState } from "@/store/store";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    const increament = () => {
        dispatch(increment())
    }

    const decreament = () => {
        dispatch(decrement())
    }

    const resetCount = () => {
        dispatch(reset())
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
            onPress={resetCount}
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