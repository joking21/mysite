import React from 'react';
import {observer} from 'mobx-react';
import axios from 'axios';
@observer
class Test extends React.Component{
    constructor(props){
        super(props)
        this.state={
          value:''
        }
    }
    componentDidMount(){
      this.getData();
    }
    handleChange = (event,value) => {
      this.setState({
        value: event.target.value
      })
    }
    getData = () =>{
      console.log("测试连接");
      axios.get('/api/selectAll')
        .then(function(response){
          console.log(response);
        })
        .catch(function(err){
          console.log(err);
        });
    }
    render() {
        return (
          <div>
            <br />
            <h1>第二个组件！！！</h1>
             <ul>
              {console.log(this.props.store)}
              {this.props.store.todos.map((todo,index) => {
                  return <li key={index}>{todo.title}</li>
              })}
            </ul>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        )
      }
}
export default Test;
