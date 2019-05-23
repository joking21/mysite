import React from 'react';
import {observer} from 'mobx-react';
import axios from 'axios';
@observer
class Test1 extends React.Component{
    constructor(props){
        super(props)
    }

   testFun = () => {
     console.log('1111');
   }

    render() {
        return (
          <div>
             {this.props.name}
          </div>
        )
      }
}
export default Test1;
