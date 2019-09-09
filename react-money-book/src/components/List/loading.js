import React, { Component } from "react";

/**
 *   1. 在获取数据时,加载一个loading状态图标,在加载完成后 loading 不显示 然后带数据的组件
 *   2. 内部状态: loading状态
 *   3. 外部 props:  Components 组件,数据的获取逻辑函数 getData:Object
 *   4. getData 封装异步逻辑,返回一个Object类型 根据返回的结果判断 是否应该显示列表
 *
 */

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    const { isLoading } = this.props;
    return isLoading && <div>加载中</div>;
  }
}

const setLoading = (Components, getData) => {
  return props => {
    const items = getData();
    if (!items) {
      return <Loading isLoading={true} />;
    } else {
      return items.list instanceof Array && items.list.length!==0 ? (
        <Components {...props} items={items} />
      ) : (
        <div>暂无数据</div>
      );
    }
  };
};

export default setLoading;
