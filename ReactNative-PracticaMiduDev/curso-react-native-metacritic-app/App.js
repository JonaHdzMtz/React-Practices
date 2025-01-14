import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Card } from './components/Card';
import RickApiService from './data/service';
import { useState,useEffect } from 'react';

const iconHeader = require('./assets/morty-smith.png');
const icon = require('./assets/icon.png');
const { width, height } = Dimensions.get('window');

export default function App() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    RickApiService().then((response)=>{
      setData(response.results);
    })
  },[])

  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* header */}
      <View style={styles.header}>
        <Image source={iconHeader} style={{ width: 50, height: 50 }} />
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.button} onPress={()=>{alert("prueba")}}>
            <Text style={{ fontSize: 20 }}>Docs</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 20 }}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* body */}
      <Text style={{ textAlign: "center", fontSize: 50, paddingHorizontal: 30, paddingVertical: 30 }}>The rick and Morty API</Text>
      <View style={styles.cardsContainer}>
        {data.map((item)=>(
          <Card key={item.id} image = {item.image} />
        ))}
      </View>
    </View>
</ScrollView>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'white',
    alignItems: 'center',


  },
  header: {
    paddingHorizontal: 20,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',

  },
  headerButtons: {
    alignItems: "space-between",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    width: 200,
  },
  cardsContainer: {
    flex: 1,
    backgroundColor: "#272b33",
    width: width,
    alignItems: 'center',
    gap: 20,
    paddingTop: 20,
  }


});