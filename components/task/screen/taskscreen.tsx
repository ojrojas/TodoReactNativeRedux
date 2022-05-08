import React from "react";
import { Button, Text, View } from "react-native";
import { PropsTaskScreen } from "../../../router/propsapp";
import ListTask from "../views/listtask";

const TaskScreen = ({ route, navigation }: PropsTaskScreen) => {
    return (
        <View style={{ padding: 10, backgroundColor: 'white', flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: '400', flex: 1 }}>
                {route.params.group.name}
            </Text>
            <View style={{flex:30}}>
                <ListTask group={route.params.group} />
            </View>
            <View style={{ marginBottom: 20 }}>
                <Button title='Create new task' onPress={() => navigation.navigate('CreateTaskModal', { groupId: route.params.group.id })} />
            </View>
        </View>
    )
}

export default TaskScreen;