import React from 'react';

class Test extends React.Component{
    constructor(props){
        super(props)
        this.state={
          test: 'testtesttest'
        }
    }
    tt = () => {
      console.log('111111');
      console.log(this.state.test);
    }
    render() {
      console.log(process.env);
      console.log(process.env.NODE_ENV);
      console.log(this.props.lool);
      // console.log(this.state.test);
        return (
          <div>
            <span>哈qqqq哈哈{process.env.NODE_ENV}</span>
            <button onClick={this.tt}>点击test</button>
          </div>
        )
      }
}
export default Test;
