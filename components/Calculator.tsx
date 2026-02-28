import { useState } from "react";
import { View, StyleSheet } from "react-native";
import CalcButton from "./button";
import Display from "./display";

export default function Calculator() {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");

    const handlePress = (value: string) => {
        if (value === "=") {
            try {
                setResult(eval(expression).toString());
            } catch {
                setResult("Error");
            }
        } else if (value === "C") {
            setExpression("");
            setResult("");
        } else {
            setExpression((prev) => prev + value);
        }
    };

    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "C", "+",
        "=",
    ];

    return (
        <View style={styles.container}>
            <Display expression={expression} result={result} />

            <View style={styles.buttons}>
                {buttons.map((btn, index) => (
                    <CalcButton
                        key={index}
                        label={btn}
                        onPress={() => handlePress(btn)}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e1e1e",
        justifyContent: "flex-end",
    },
    buttons: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
