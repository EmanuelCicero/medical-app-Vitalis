import * as React from "react";
import { View, Text, StyleSheet} from "react-native";

const ViewError = ({ e }) => (
    <View>
        {{e}? <Text style={styles.textError}>{e}</Text> : null}
    </View>
);

const styles = StyleSheet.create({
    textError: {
        fontSize: 14,
        color: 'red',
    },
});

export default ViewError;