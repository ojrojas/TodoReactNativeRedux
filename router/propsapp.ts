import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./mystack";

export type PropsHomeScreen = NativeStackScreenProps<RootStackParamList, 'HomeScreen', 'MyStack'>;
export type PropsListGroup = NativeStackScreenProps<RootStackParamList, 'ListGroup', 'MyStack'>;
export type PropsListTask = NativeStackScreenProps<RootStackParamList, 'ListTask', 'MyStack'>;
export type PropsTaskScreen = NativeStackScreenProps<RootStackParamList, 'TaskScreen', 'MyStack'>;
export type PropsCreateGroupModal = NativeStackScreenProps<RootStackParamList, 'CreateGroupModal', 'MyStack'>;
export type PropsCreateTaskModal = NativeStackScreenProps<RootStackParamList, 'CreateTaskModal', 'MyStack'>;
export type PropsEditTaskModal = NativeStackScreenProps<RootStackParamList, 'EditTaskModal', 'MyStack'>;





