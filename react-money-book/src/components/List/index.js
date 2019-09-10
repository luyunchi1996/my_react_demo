import React, { Component } from "react";

/**
 *   1.通过获取服务端数据,并根据不同的设置来渲染不同类型的列表,行 或 列 的显示方式
 *    在获取服务端数据时 加载一个 loading 之后根据服务端返回数据结果 以此显示返回的状态 无数据 和 有数据
 *   4.共享状态: loading NoData
 *   2.内部状态: 选中状态 isSelectRow|isSelectCol
 *   3.外部 props: 列表数据 items:Array  显示方式 行 或 列  renderContentModel:row|col   内容函数 renderContent
 *
 */

const Loading = props => {
  const { isLoading, children } = props;
  return isLoading ? <div>加载中</div> : children;
};
const NoData = props => {
  const { isNoData, children } = props;
  return isNoData ? <div>暂无数据</div> : children;
};

const ListItem = props => {
  const { items, renderContentModel, renderContent } = props;

  const groupHorizontal =
    renderContentModel === "row"
      ? "list-group list-group-horizontal"
      : "list-group";
  return (
    <ul className={groupHorizontal}>
      {items.map(item => (
        <li class="list-group-item">{renderContent(item)}</li>
      ))}
    </ul>
  );
};

class List extends Component {
  render() {
    const {
      items = [1,2],
      isLoading = false,
      isNoData = false,
      renderContentModel = "col",
      renderContent = item => item
    } = this.props;

    return (
      <Loading className="loader" isLoading={isLoading}>
        <NoData isNoData={isNoData}>
          <ListItem
            items={items}
            renderContentModel={renderContentModel}
            renderContent={renderContent}
          />
        </NoData>
      </Loading>
    );
  }
}

export default List;
