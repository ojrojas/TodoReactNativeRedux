import React from "react";
import { Alert,  StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { useSelector } from "react-redux";
import { IGroupState } from "../../../models/group";
import { PropsHomeScreen } from "../../../router/propsapp";
import { useAppDispatch } from "../../../store/apphooks";
import { AppState } from "../../../store/store";
import { fetchDeleteGroup } from "../store/thunkfunctionsgroup";

const ListGroup = ({ navigation }: PropsHomeScreen) => {
    const groups = useSelector<AppState, IGroupState>(state => state.groups);
    const dispatch = useAppDispatch();

    const closeRow = (rowMap: any, rowKey: any) => {
        console.log("rowMap ==> ", rowMap)
        console.log("rowKey ==> ", rowKey)
    };

    const deleteRow = (rowMap: any, rowKey: any) => {
        closeRow(rowMap, rowKey);

        Alert.alert(
            'Delete',
            'Are you shure delete this item',
            [{
                text: 'Cancel',
                style: 'cancel',
                onPress: () => { }
            }, {
                text: 'Accept',
                style: 'default',
                onPress: () => dispatch(fetchDeleteGroup(rowKey))
            }]);
        /// reducer
    };

    const onRowDidOpen = (rowKey: any) => {
        console.log('This row opened', rowKey);
    };

    return (
        <SwipeListView
            data={groups.groups}
            renderItem={({item}) => (
                <TouchableHighlight
                    onPress={() => console.log('You touched me')}
                    style={styles.rowFront}
                    underlayColor={'#fff'}
                >
                    <View style={styles.container}>
                        <View style={styles.containerItem}>
                            <Text>
                                ✺
                            </Text>
                            <Text
                                style={styles.nameGroup}
                                onPress={() => { navigation.navigate("TaskScreen", { group: item }) }}>
                                {item.name}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            )}
            renderHiddenItem={(item, rowMap) => (
                <View style={styles.rowBack}>
                    <TouchableOpacity
                        style={[styles.buttonLeft, { height: 50, width: 80, left: -15, justifyContent: 'center', alignItems: 'center' }]}
                        onPress={() => { navigation.navigate("EditGroupModal", { groupId: item.item.id, name:item.item.name }) }}>
                        <Text style={{ justifyContent: 'center' }}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.backRightBtn, styles.backRightBtnLeft]}
                        onPress={() => closeRow( rowMap , item.item.id)}
                    >
                        <Text style={styles.backTextWhite}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.backRightBtn, styles.backRightBtnRight]}
                        onPress={() => deleteRow(rowMap, item.item.id)}
                    >
                        <Text style={styles.backTextWhite}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-150}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={onRowDidOpen}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1
    },
    containerItem: {
        padding: 5,
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        width: '100%'
    },
    nameGroup: {
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 10,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
        flex: 1
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
    buttonLeft: {
        backgroundColor: '#efe9',
        bottom: 0,
        top: 0,
    }
});

export default ListGroup ;