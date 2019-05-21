
import { notification } from 'antd';
export function success(msg) {
    notification.success({
        message: '成功',
        description: msg,
        duration: 3,
    });
};
export function failer(msg) {
    notification.error({
        message: '错误',
        description: msg,
        duration: 3,
    });
};