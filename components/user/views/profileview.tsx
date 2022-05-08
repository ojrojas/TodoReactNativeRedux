import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IUser } from "../../../models/user";

const ProfileView = ({user}:{user:IUser}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{user.name}  {user.lastName} </Text>
            <Image style={styles.image} source={{uri: user.image}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:5,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    image:{
        marginLeft:10,
        height:50,
        width:50
    },
    text:{
        fontSize:24,
        fontWeight:'bold'
    }
})

export default ProfileView;