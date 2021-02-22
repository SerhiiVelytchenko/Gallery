import React, {useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, SafeAreaView, FlatList } from 'react-native';
import Context from '../Context'

const Post = () => {
    const {press, setPress, responseServer, id, setId, setName, pressImg, setPressImg, } = useContext(Context)

    const Item = ({ img, first_name, id}) => {

        let handlerPress = () => {
            let PressElement = responseServer.filter(el => el.user.id==id)[0]
            setPress(false)
            setName(PressElement.user.first_name)
            setPressImg(PressElement.urls.full)
            setId(id)
        }

        return (
        <TouchableWithoutFeedback onPress={handlerPress}>
            <View style={styles.item} >
                <Image style={styles.tinyLogo} source={{ uri: `${img}` }} />
                <Text style={styles.text}>{first_name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )};

    const renderItem = ({ item }) => (
        <Item img={item.urls.full} first_name={item.user.first_name} id={item.user.id} />
    );

    

return(

    <SafeAreaView style={styles.container}>
        {press ? <FlatList
                    data={responseServer}
                    renderItem={renderItem}
                    key={item => item.user.id}
                /> :
                <Image style={styles.img} source={{ uri: `${pressImg}` }} key={id}/>}
    </SafeAreaView>

)

}

const styles = StyleSheet.create({
    item: {
        height: 800,
        backgroundColor: '#F4EACD',
        paddingHorizontal: 10,
        paddingTop: 80,
        justifyContent: 'flex-end',
        marginTop: 20
        
    },
    tinyLogo: {
        flex: 1,
        backgroundColor: '#F4EACD',
        
    },
    text: {
        backgroundColor: '#F4EACD',
        height: 100,
        fontSize: 50,
       
    },
    img: {
        height: '95%',
    }


})

export default Post