import React from 'react';


class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {console.log(this.props)}
               头部
            </div>
        )
    }
}
export default Header;
