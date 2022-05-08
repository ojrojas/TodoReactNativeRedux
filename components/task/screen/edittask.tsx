import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { PropsEditTaskModal } from "../../../router/propsapp";
import { useAppDispatch } from "../../../store/apphooks";

const EditTaskModal = ({ navigation, route }: PropsEditTaskModal) => {
  const [value, setValue] = useState(route.params.name);
  const dispatch = useAppDispatch();

  const createGroups = () => {
    //dispatch(fetchEditGroup({ id: route.params.taskId, name: value }));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Edit task!</Text>
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
        <Button onPress={() => createGroups()} title="Edit" />
      </View>
    </View>
  );
}

export default EditTaskModal