import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
    label: string;
    onPress: () => void;
};

export default function CalcButton({ label, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "25%",
        padding: 25,
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "#333",
    },
    text: {
        fontSize: 24,
        color: "#fff",
    },
});