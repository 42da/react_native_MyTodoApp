//필요한 것들을 import합니다. react,react-native는 우리가 앱을 만들면 자동으로 생성됩니다.
import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage, ScrollView, Alert } from 'react-native';
import Header from './app/components/Header'
import Subtitle from './app/components/Subtitle'
import Input from './app/components/Input'
import TodoItem from './app/components/Todo'
import TodoRefresh from './app/components/Refresh'

//App이라는 class를 만들고 이를 export합니다.
export default class App extends React.Component {
  state = {
    inputValue : "",
    todos : [
      
    ]
  }

  componentWillMount() {
    AsyncStorage.getItem('@mytodo:state').then(
      (state) => {
        if (state != null) {
          this.setState(JSON.parse(state));
        }
      });
  }

  saveItem = () => {
    //state를 문자열로 바꿔서 저장
    AsyncStorage.setItem('@mytodo:state', JSON.stringify(this.state));
  }

  //초기화 기능
  _refreshItem = () => {
    this.setState({todos: []}, this.saveItem);
  }

  _makeTodoItem = ({ item, index }) => {
    return (
      <TodoItem 
        text = {item.title}
        isComplete={item.isComplete}
        changeComplete={() => {
          const newTodo = [...this.state.todos];
          newTodo[index].isComplete = !newTodo[index].isComplete;
          this.setState({todos:newTodo}, this.saveItem);
        }}
        deleteItem={() => {
          const newTodo = [...this.state.todos];
          newTodo.splice(index, 1);
          this.setState({todos:newTodo}, this.saveItem);
        }}/>
    );
  }

  _changeText = (value) => {
    this.setState({inputValue: value});
  }

  _addTodoItem = () => {
    if(this.state.inputValue != ''){
    const prevTodo = this.state.todos;
    const newTodo = { title: this.state.inputValue, isComplete: false};

    this.setState({
      inputValue: '',
      todos:prevTodo.concat(newTodo)
    }, this.saveItem);
  }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Header/>
        </View>
        <View style={styles.inputContainer}>
          <Subtitle title="TO-DO 입력"/>

          <Input
            value={this.state.inputValue}
            changeText={this._changeText}
            addTodo={this._addTodoItem}/>
            

        </View>
        <View style={styles.todoRefreshContainer}>
          <Subtitle title="TO-DO LIST"/>
          <TodoRefresh refresh={this._refreshItem}/>
        </View>
        
        <ScrollView>
          <View style={styles.todoContainer}>
            
            {/* <TodoItem text={this.state.todos[0].title} isComplete={this.state.todos[0].isComplete}/>
          <TodoItem text={this.state.todos[1].title} isComplete={this.state.todos[1].isComplete}/> */}
            <FlatList
              data={this.state.todos}
              renderItem={this._makeTodoItem}
              keyExtractor={(item, index) => { return `${index}` }} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

//style을 설정해줍니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    alignItems: 'center',
    
  },
  inputContainer: {
    marginLeft: 20
  },
  todoContainer: {
    marginLeft: 20
  },
  todoRefreshContainer: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});