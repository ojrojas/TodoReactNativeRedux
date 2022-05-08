import React from 'react';
import { Button, View } from 'react-native';
import { useSelector } from 'react-redux';
import { IGroupState } from '../../../models/group';
import { IUser } from '../../../models/user';
import { PropsHomeScreen } from '../../../router/propsapp';
import { AppState } from '../../../store/store';
import GroupList from '../../group/views/listgroup';
import ProfileView from '../../user/views/profileview';


const HomeScreen = ({navigation, route}:PropsHomeScreen) => {
    const user = useSelector<AppState, IUser>(state => state.users);
    const groups = useSelector<AppState, IGroupState>(state => state.groups);

    return (
        <View style={{ flex: 1 }}>
            <ProfileView user={user} />
            <View style={{ borderBottomColor: '#00000010', borderBottomWidth: 1, marginBottom: 10 }} />
            <View style={{ flex: 1 }}>
               <GroupList route={route} navigation={navigation}/>
            </View>
            <View style={{marginBottom:20}}>
                <Button title='Create new group' onPress={()=> navigation.navigate("CreateGroupModal")} />
            </View>
        </View>
    )
}
export default HomeScreen;