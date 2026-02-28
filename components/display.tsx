import { View, Text, StyleSheet } from "react-native";

type Props = {
    expression: string;
    result: string;
};

export default function Display({ expression, result }: Props) {
    return (
        <View style={styles.display}>
            <Text style={styles.expression}>{expression}</Text>
            <Text style={styles.result}>{result}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    display: {
        padding: 20,
        backgroundColor: "#000",
    },
    expression: {
        color: "#888",
        fontSize: 24,
        textAlign: "right",
    },
    result: {
        color: "#fff",
        fontSize: 40,
        textAlign: "right",
    },
});