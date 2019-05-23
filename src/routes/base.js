import Test from '../views/PageTest';
import PageHome from '../views/PageHome';
export default [
    {
        path: '/',
        exact: true,
        component: PageHome,
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