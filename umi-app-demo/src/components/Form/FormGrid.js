import React from 'react';
import { Row, Col } from 'antd';
import { isArray } from 'util';

const FormGrid = props => {
  const { children, ...another } = props;
  const childs = children && isArray(children) && children;
  const colList = [];
  childs.map(child => {
    if (child) {
      const { col = 'normal' } = child.props;
      colList.push({ col, child });
    }
    return 0;
  });
  return <RowSet items={colList} {...another} />;
};

const RowSet = props => {
  const { items, cols, gutter } = props;

  const setRowList = (list, rowList, colList) => {
    const item = list.shift();
    let colls = colList;
    if (item.col === 'full') rowList.push([item]);
    else {
      colls.push(item);
      if (colls.length === cols) {
        rowList.push(colls);
        colls = [];
      }
    }
    if (list.length < cols && item) {
      if (colls.length === cols) {
        rowList.push(colls);
      }
      items.map(li => {
        if (li.col === 'full') rowList.push([li]);
        colls.push(li);
        return 0;
      });
      rowList.push(colls);
      colls = [];
      return rowList;
    }

    if (list.length === 0) return rowList;

    return setRowList(list, rowList, colls);
  };

  const rows = setRowList(items, [], []);
  const setItemIndex = index => index;

  return rows.map((row, i) => (
    <Row key={`formgrid_row_${setItemIndex(i)}`} gutter={gutter}>
      {row.map((c, j) => (
        <Col
          key={`formgrid_col_${setItemIndex(j)}`}
          span={c.col === 'full' ? 24 : 24 / cols}
          md={c.col === 'full' ? 24 : 24 / cols}
          xs={24}
        >
          {c.child}
        </Col>
      ))}
    </Row>
  ));
};

export default FormGrid;
