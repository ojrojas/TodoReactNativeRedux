import React from "react";
import { PropsHomeScreen } from "../../../router/propsapp";
import ListGroup from "../views/listgroup";

const GroupScreen = ({navigation, route}:PropsHomeScreen) => {
    return (
        <ListGroup navigation={navigation} route={route} />
    )
}

export default GroupScreen;