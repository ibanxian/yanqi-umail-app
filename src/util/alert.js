import { Toast, Modal } from 'antd-mobile';

//成功弹框
export const successAlert = (msg) => {
  Toast.success(msg, 1);
}

//失败弹框
export const warningAlert = (msg) => {
  Toast.fail(msg, 1);
}

//确认弹框

export const confirmAlert = (cancelFn, okFn) => {
  Modal.alert('确定删除吗?', '', [
    { text: '取消', onPress: () => { cancelFn() }, style: 'default' },
    { text: '确定', onPress: () => { okFn() } },
  ]);
  //alertInstance.close() 手动关闭
};
