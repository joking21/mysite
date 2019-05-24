import React from 'react';
import { inject, observer } from 'mobx-react';
import Article from '../component/pageHome/Article';
import '../style/pageHome.less'
@inject('PageHome')
@observer
class PageHome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="d-content">
                <Article Article={this.props.PageHome.Article} />
            </div>
        )
    }
}
export default PageHome;

