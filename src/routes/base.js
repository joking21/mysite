import NoMatch from '../components/notPage/404';
import App from '../views/PageApp';
import Test from '../views/PageTest';
export default [
    {
        path: '/',
        exact: true,
        component: App,
        meta:{
            hasHeader: true,
            hasFooter: true,
        }
    },
    {
        path: '/test',
        component: Test,
        meta:{
            hasHeader: true,
            hasFooter: true,
        }
    }
]