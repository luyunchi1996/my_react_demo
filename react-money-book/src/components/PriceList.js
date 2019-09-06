import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
  return (
    <ul className="list-group list-group-flush">
      {items.map(item => (
        <li
          className="list-group-item d-flex 
          justify-content-between align-items-center"
          key={item.id}
        >
          <span className="col-1 ">
            <Ionicon
              className="rounded-circle"
              fontSize="24px"
              style={{ backgroundColor: "#e4e4e4", padding: "5px" }}
              color={"#000"}
              icon={item.category.iconName}
            />
          </span>
          <span className="col-5">{item.title}</span>
          <span className="col-2 font-weight-bold">
            {item.category.type === "income" ? "+" : "-"}
            {item.price}元
          </span>
          <span className="col-2">{item.date}</span>
          <span className="col-1">
            <Ionicon
              onClick={e => {
                e.preventDefault();
                onModifyItem(item);
              }}
              className="rounded-circle"
              fontSize="24px"
              style={{ backgroundColor: "#e4e4e4", padding: "5px" }}
              color={"#000"}
              icon="ios-create-outline"
            />
          </span>
          <span className="col-1">
            <Ionicon
              onClick={e => {
                e.preventDefault();
                onDeleteItem(item);
              }}
              className="rounded-circle"
              fontSize="24px"
              style={{ backgroundColor: "#e4e4e4", padding: "5px" }}
              color={"#000"}
              icon="ios-close-circle"
            />
          </span>
        </li>
      ))}
    </ul>
  );
};
PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
};
PriceList.defaultProps = {
  onModifyItem: () => {},
  onDeleteItem: () => {}
};

export default PriceList;
