import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ITask } from "../../../models/task";
import CheckBox from "./checkbox";

const Task = ({ task }: { task: ITask }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerCheck}>
                <CheckBox 
                isToday={task.isToday ?? false} 
                onPress={() => { }} 
                textStyle={styles.checkBox} 
                iconStyle={styles.checkBoxIcon} />
            </View>
            <View style={styles.containerText}>
                <Text 
                style={ task.isCompleted ?  [styles.text, {textDecorationLine:'line-through', color:'#73737330'}]: styles.text}>
                    {task.text}
                </Text>
                <Text  style={ task.isCompleted ?  [styles.text, {textDecorationLine:'line-through', color:'#73737330'}]: styles.date} >
                    {task.startDate}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        flexDirection: 'row',
        backgroundColor:'yellow',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    containerCheck:{
        flex:1,
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#737373'
    },
    date: {
        fontWeight: '500',
        color: '#a3a3a3'
    },
    checkBox: {
        backgroundColor: 'red',
        textDecorationLine: 'none',
        justifyContent:"center",
        alignItems:'center',
        
    },
    checkBoxIcon: {
        borderRadius: 0,
        justifyContent:'center',
    },
    containerText: {
        justifyContent:'center',
        flex:11
    }
})

export default Task;