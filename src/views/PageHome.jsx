import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('PageHome')
@observer
class PageHome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {console.log(this.props.PageHome.Article.listData.toJS())}
                111
            </div>
        )
    }
}
export default PageHome;

