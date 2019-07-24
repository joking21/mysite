import React from 'react';
import { Link } from 'react-router-dom';
class PageApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['哈哈1111', '没有没有哈哈哈好', '哈哈哈什么呀哈哈哈', '在在在'],
        }
    }
    // item 该段全文   word 关键字
    search(item, word){
        var re = RegExp(word ,"g");
        const newItem = item.replace(re, "<font style='color:#ff0000'>"+word+"</font>");
        const div = <div dangerouslySetInnerHTML={{__html:newItem}}></div>
        return div;
    }
    render() {
        return (
            <div>
                {this.state.list.map((item, index)=>{
                    return <div key={index}>{this.search(item, '么')}</div>
                })}
            </div>
        )
    }
}
export default PageApp;

