import React, { Component } from 'react';
import {observer} from 'mobx-react';
// 观察者

@observer
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:1
    }
  }  
componentWillReact() {
    console.log("变了变了！！");
}
componentDidMount(){
  this.getTest();
  this.testSet();
}
getTest = () => {
  const test = 'hello world!'
  console.log(test.includes('1'));
  console.log(test.includes('h'));
  console.log(Math.cbrt('9'));
  console.log(2**3);
}
getIndex = ()=>{
  console.log(this.props.store);
  this.setState({
    title: this.state.title+1
  })
  console.log(this.state.title);
  this.props.store.changeTodoTitle({index:0,title:this.state.title})
}
testSet = () => {
  let s = new Set();
  [1,1,1,2,3,4,4,2,5,6].forEach(x => s.add(x))
  console.log(s);
}
  render() {
    return (
    <div>
      <div>{this.props.store.tt}</div>
      <div>{this.props.store1.title}</div>
      <ul>
        {console.log(this.props.store)}
        {/* {this.props.store.todos.map((todo,index) => <li key={index}>{todo.title}</li>)} */}
        {this.props.store.unfinishedTodos.map((todo,index) =><li key={index}>{todo.title}</li>)}
      </ul>
      {/* <button onClick={()=>this.props.store.changeTodoTitle({index:0,title:this.title})}>diandiandian</button> */}
      <button onClick={this.getIndex}>111</button>
      {/* <button onClick={()=>this.props.store.todos[0].title = "修改后的todo标题"}>dian</button> */}
      <h1>{false||'测试运算'}</h1>
    </div>
    );
  }
}

export default App;
