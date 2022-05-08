import React from "react";
import { FlatList, SafeAreaView } from "react-native"
import { useSelector } from "react-redux";
import { IGroup } from "../../../models/group";
import { ITaskState } from "../../../models/task";
import { AppState } from "../../../store/store";
import Task from "./task";


const ListTask = ({ group }: { group: IGroup }) => {
    debugger;
    const tasks = useSelector<AppState, ITaskState>(state => state.tasks);
    return (
        <SafeAreaView>
            <FlatList
                scrollEnabled={true}
                data={tasks.tasks.filter(x => x.idGroup === group.id)}
                keyExtractor={task => task.id}
                renderItem={({ item }) => (
                    <Task task={item} />)
                }>
            </FlatList>
        </SafeAreaView>
    )
}

export default ListTask;