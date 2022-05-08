import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateGroupModal from '../components/group/screen/creategroup';
import EditGroupModal from '../components/group/screen/editgroup';
import GroupScreen from '../components/group/screen/group';
import TaskScreen from '../components/task/screen/taskscreen';
import { IGroup } from '../models/group';
import HomeScreen from '../components/home/screen/home';
import CreateTaskModal from '../components/task/screen/createtask';
import EditTaskModal from '../components/task/screen/edittask';

export type RootStackParamList = {
    HomeScreen: undefined,
    TaskScreen: { group: IGroup },
    GroupScreen: undefined,
    CreateGroupModal: undefined,
    CreateTaskModal: { groupId: string},
    EditGroupModal: { groupId: string, name: string },
    EditTaskModal: { taskId: string, name: string },
    ListGroup: undefined,
    ListTask: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyStack = () => {
    return <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: true
            }}
            defaultScreenOptions={{
                contentStyle: {
                    backgroundColor: 'pink'
                }
            }}
            initialRouteName="HomeScreen"
        >
            <Stack.Screen
                name="GroupScreen"
                component={GroupScreen}
            />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name='EditGroupModal'
                    component={EditGroupModal}
                />
                <Stack.Screen
                    name="CreateGroupModal"
                    component={CreateGroupModal}
                />
            </Stack.Group>
                <Stack.Screen
                    name="TaskScreen"
                    component={TaskScreen}
                />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>

                <Stack.Screen
                    name="CreateTaskModal"
                    component={CreateTaskModal}
                />
                <Stack.Screen
                    name="EditTaskModal"
                    component={EditTaskModal}
                />


            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
}

export default MyStack;