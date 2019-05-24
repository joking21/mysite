import React from 'react';
import { observer } from 'mobx-react';
import { Row, Col } from 'antd';

@observer
class PageHome extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.Article.getList();
    }
    render() {
        const listData = this.props.Article.listData.toJS();
        console.log(listData);
        return (
            <div>
                {listData.map((item, index) => {
                    // const _item = item.toJS();
                    return <div key={item.id}>
                     {
                         item.title
                     }
                    </div>
                })}

                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
            </div>
        )
    }
}
export default PageHome;

