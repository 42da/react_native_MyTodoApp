// app/components/Todo.js

import React from "react"
import {View,Text,StyleSheet,Dimensions,TouchableOpacity} from "react-native"
import {FontAwesome, AntDesign} from "@expo/vector-icons"

const {width, height} = Dimensions.get('window');

const TodoItem= ({text, isComplete, changeComplete, deleteItem}) => (
    <View style={styles.todoContainer}>
        <View>
            <View style={styles.objContainer}>
                <View style={styles.textContainer}>
                    
                    <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={changeComplete}>
                        <AntDesign name={isComplete? "checkcircle":"checkcircleo"} size={30} style={styles.check}/>
                    </TouchableOpacity>
                    <Text style={isComplete? styles.done:styles.todos}>{text}</Text>
                </View>
                <TouchableOpacity
                    onPress={deleteItem}>
                    <FontAwesome name="close" size={20}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    todoContainer: {
        padding: 5,
        marginTop: 20,
        borderBottomWidth: 1,
        width: width-40
    },
    todos: {
        fontSize: 20
    },
    done: {
        textDecorationLine: 'line-through',
        fontSize: 20,
        color: 'grey'
    },
    objContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    check: {
        marginRight: 10
    }
})

export default TodoItem;