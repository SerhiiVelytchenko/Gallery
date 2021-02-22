import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {AntDesign} from '@expo/vector-icons'
import Context from '../Context'

const Header = () => {
    const {press, setPress, name} = useContext(Context)
    return(
        <>
        {press ? <View style={styles.item}>
                    <Text style={styles.text}>Gallery</Text>
                    
                </View>
                :
                <View>
                    <AntDesign.Button
                        borderRadius = {0}
                        name = "arrowleft"
                        iconStyle={styles.iconItem}
                        style={styles.item}
                        onPress={()=> {setPress(true)} }>
                    <Text style={styles.text}>{name}</Text>
                    
            </AntDesign.Button>
        </View> }
        </>
    )
}
//size = {50}
 // backgroundColor: '#FFC618',
const styles = StyleSheet.create({
iconItem: {
    fontSize: 40,
    padding: 30,
    color: '#000000',
},
item: {
    height: 100,
    backgroundColor:  "#C39B22",
    color: '#000000',
    fontSize: 50,
    flexDirection: 'row'
},
text: {
    color: '#000000',
    fontSize: 50 ,
    padding: 20
},


})

export default Header