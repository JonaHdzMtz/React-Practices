import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export function Card(props) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: props.image }} style={styles.img} />
            <View style={styles.infoContainer}>
                <Text style={styles.titleCard}>Chris</Text>
                <View style={styles.markLine}>
                    <View style={styles.mark}></View>
                    <Text style={{ paddingStart:10,fontSize:20, color:"white"}}>alive: Humanoid</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: width * 0.80,
        height: 500,
        backgroundColor: '#3d3e45',
        borderRadius: 10,
    },
    img: {
        height: 300,
        objectFit: "cover",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    titleCard: {
        fontSize: 35,
        color: '#ffffff',
    },
    markLine :{
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    mark: {
        width: 10,
        height: 10,
        backgroundColor: 'green',
        borderRadius: 5,
    }
});


