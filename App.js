import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import Context from './components/Context'
import Header from './components/Header/Header'
import Post from './components/Post/Post'

export default function App() {

const [responseServer, SetResponseServer] = useState([])
const [press, setPress] = useState(true)
const [id, setId] = useState('')
const [name, setName] = useState('')
const [pressImg, setPressImg] = useState('')

let value = {press, setPress, responseServer, SetResponseServer, id, setId, name, setName, pressImg, setPressImg }

  useEffect(() => {
    fetch(
    `https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`
    )
    .then(response => response.json())
    .then(json => SetResponseServer(json))
    .catch(error => console.log(error))
}, []);

  return (
    <Context.Provider value={value}>
      <View style={styles.container}>
        <Header/>
        <Post/>
        <StatusBar style="auto" />
      </View>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  text: {
    color: '#FFFFFF',
  }
});
