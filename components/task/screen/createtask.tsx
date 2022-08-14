import React, { useState } from "react";
import { Button, Switch, Text, TextInput, View } from "react-native";
import uuid from 'react-native-uuid';
import { useAppDispatch } from "../../../store/apphooks";
import { PropsCreateTaskModal } from "../../../router/propsapp";
import { fetchCreateTask } from "../store/thunkfunctionstask";
import { ITask } from "../../../models/task";
import DatePicker from "react-native-date-picker";


const CreateTaskModal = ({ navigation, route }: PropsCreateTaskModal) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<ITask>({
    id: '',
    idGroup: route.params.groupId,
    text: '',
    isToday: false,
    isCompleted: false,
    isImportant: false,
    startDate: '',
    endDate: '',
  });

  const createGroups = () => {
    dispatch(fetchCreateTask({ id: uuid.v4().toString(), idGroup: route.params.groupId, text: value.text })).then((res) => {
      console.log("response", res)
      navigation.goBack();
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Create new task!</Text>
      <View style={{ backgroundColor: '#00000010', width: '80%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          value={value.text}
          onChangeText={(e) => setValue({ ...value, text: e })}
          placeholder={'Name task'}
          style={{
            fontSize: 24,
            fontWeight: '400',
            textAlign: 'center',
            width: '100%',
            height: 50
          }} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Is scheduled ?</Text>
        <Switch
          style={{ marginTop: 5, alignContent: 'center' }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {isEnabled &&
        (
          <View>
            <TextInput
              placeholder={'Scheduled'}
              onPressOut={() => setOpen(!open)}
              onChange={(e)=> {console.log(e)}}
              value={value.startDate} />
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                setValue({...value, startDate:date.toUTCString()})
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
          </View>
        )
      }
      <View style={{ flexDirection: 'row' }}>
        <Button onPress={() => navigation.goBack()} title="Cancel" />
        <Button onPress={() => createGroups()} title="Create" />
      </View>
    </View>
  );
}

export default CreateTaskModal