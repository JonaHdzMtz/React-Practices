import { useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker';
const { width, height } = Dimensions.get('window');

export function RegionSelection() {
    const [selectedValue, setSelectedValue] = useState("Selecciona un pais");
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, textAlign: 'center' }}>Configuración incial</Text>
            <View style={styles.optionsContainer}>
                <Text style={styles.textOption}>Pais</Text>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                    }>
                    <Picker.Item label="Selecciona un pais" value="null" />
                    <Picker.Item label="Javas" value="Java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text style={styles.textOption}>Estado/región</Text>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                    }>
                    <Picker.Item label="Selecciona un pais" value="null" />
                    <Picker.Item label="Javas" value="Java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text style={styles.textOption}>Localidad</Text>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                    }>
                    <Picker.Item label="Selecciona un pais" value="null" />
                    <Picker.Item label="Javas" value="Java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 17, color: "white" }}>Continuar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        justifyContent: "space-around",
        alignItems: "center",
    },
    optionsContainer: {
        width: width - 60,
        height: height / 2,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 10,
        justifyContent: "space-around",
        paddingHorizontal:20,
        paddingVertical: 10,
    },
    button: {
        paddingHorizontal: 60,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: "#FD6567",
    },
    textOption: {
        fontSize: 20,
        textAlign: "center",
    }

})