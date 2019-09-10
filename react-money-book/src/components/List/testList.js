import React, { Fragment } from "react";
export const TestList = props => {
  const { item } = props;
  return (
    <Fragment>
      <span>{item.category.name}</span>
      <span>{item.title}</span>
    </Fragment>
  );
};
