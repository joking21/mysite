import { observable, action } from 'mobx';
import { getData } from '../../util/requist';
import dwApi from '../../util/api';

class ArticleList {
    @observable listData = [];
    @action getList = () => {
        getData(dwApi.PageHome.getNewArticle, null, (res) => {
            this.listData = res.result;
        })
    }
}
export default ArticleList;