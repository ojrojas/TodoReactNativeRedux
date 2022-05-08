import React, { useEffect, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"

interface PropsButton {
    size?: number;
    fillColor?: string;
    unfillColor?: string;
    text?: string;
    iconStyle?: any;
    textStyle?: any;
    onPress: () => void;
    value?: boolean;
    isToday: boolean
}


const CheckBox = (props: PropsButton) => {
    const [checked, setChecked] = useState<boolean>(false);
    useEffect(() => {
        props.value = checked;
    }, [checked])
    return (<>
        {
            props.isToday ? <BouncyCheckbox
                size={props.size ?? 22}
                fillColor={props.fillColor ?? undefined}
                unfillColor={props.unfillColor ?? "#fff"}
                text={props.text ?? undefined}
                iconStyle={props.iconStyle}
                textStyle={props.textStyle}
                onPress={(isChecked: boolean) => { setChecked(!checked) }}
            /> :
                (
                    <View>
                        <Text style={styles.point}>‧</Text>
                    </View>)
        }
    </>

    );
}

const styles = StyleSheet.create({
    checked: {
        width: 20,
        height: 20,
        marginRight: 13
    },
    point: {
        fontSize: 40,
        fontWeight:'900'
    }
});

export default CheckBox;