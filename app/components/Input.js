// app/components/Input.js

import React from "react";
import {TextInput,StyleSheet} from 'react-native';

const Input = ({value, changeText, addTodo}) => (
    <TextInput
        value={value}
        style={styles.input}
        placeholder={"오늘 어떤 일을 하실건가요?"}
        onEndEditing={addTodo} //입력창 누르면 실행(App.js 에 _addTodoItem)
        onChangeText={changeText}
        maxLength={30}
        returnKeyType="done"/>
);

const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        paddingTop:15,
    }
})

export default Input;