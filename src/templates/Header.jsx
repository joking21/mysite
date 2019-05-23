import React from 'react';
import "../style/header.less";

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="d-header">
                <div>
                    <h1>
                        <span className="title1">Joking</span>
                        <span className="title2">个人网页</span>
                    </h1>
                </div>
            </div>
        )
    }
}
export default Header;
