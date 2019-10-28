// app/components/Refresh.js

import React from 'react'
import {View,Text,StyleSheet,Dimensions,TouchableOpacity} from "react-native"
import {FontAwesome, AntDesign} from "@expo/vector-icons"

const TodoRefresh = ({refresh}) => (
    <View>
        <TouchableOpacity onPress={refresh}>
            <FontAwesome name="refresh" size={30} />
        </TouchableOpacity>
    </View>
);

export default TodoRefresh;