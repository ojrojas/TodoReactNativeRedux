import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import { IGroupState } from "../../../models/group";
import { AppState } from "../../../store/store";
import uuid from 'react-native-uuid';
import { useAppDispatch } from "../../../store/apphooks";
import { PropsCreateTaskModal } from "../../../router/propsapp";
import { fetchCreateTask } from "../store/thunkfunctionstask";


const CreateTaskModal = ({ navigation, route }: PropsCreateTaskModal) => {
    const groups = useSelector<AppState, IGroupState>(state => state.groups);
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();
  
    const createGroups = () => {
      dispatch(fetchCreateTask({ id: uuid.v4().toString(), idGroup: route.params.groupId,  text: value })).then((res)=> {
        console.log("response", res)
        navigation.goBack();
      });
    };
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30, marginBottom: 20 }}>Create new task!</Text>
        <View style={{ backgroundColor: '#00000010', width: '80%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            value={value}
            onChangeText={setValue}
            style={{
              fontSize: 24,
              fontWeight: '400',
              textAlign: 'center',
              width: '100%',
              height: 50
            }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button onPress={() => navigation.goBack()} title="Cancel" />
          <Button onPress={() => createGroups()} title="Create" />
        </View>
      </View>
    );
  }
  
  export default CreateTaskModal