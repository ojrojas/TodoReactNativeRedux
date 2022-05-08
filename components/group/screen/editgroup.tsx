import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { RootStackParamList } from "../../../router/mystack";
import { useAppDispatch } from "../../../store/apphooks";
import { fetchEditGroup } from "../store/thunkfunctionsgroup";


type Props = NativeStackScreenProps<RootStackParamList, 'EditGroupModal', 'MyStack'>;


const EditGroupModal = ({ navigation, route }: Props) => {
  const [value, setValue] = useState(route.params.name);
  const dispatch = useAppDispatch();

  const createGroups = () => {
    dispatch(fetchEditGroup({ id: route.params.groupId, name: value }));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Edit group!</Text>
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

export default EditGroupModal