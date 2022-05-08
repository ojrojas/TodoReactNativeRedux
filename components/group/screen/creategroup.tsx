import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useAppDispatch } from "../../../store/apphooks";
import uuid from 'react-native-uuid';
import { fetchCreateGroup } from "../store/thunkfunctionsgroup";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/store";
import { IGroupState } from "../../../models/group";
import { PropsCreateGroupModal } from "../../../router/propsapp";



const CreateGroupModal = ({ navigation }: PropsCreateGroupModal) => {
  const groups = useSelector<AppState, IGroupState>(state => state.groups);
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const createGroups = () => {
    dispatch(fetchCreateGroup({ id: uuid.v4().toString(), name: value })).then((res)=> {
      console.log("response", res)
      navigation.goBack();
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Create new group!</Text>
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

export default CreateGroupModal