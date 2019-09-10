import React, { Fragment, Component } from "react";
import Ionicon from "react-ionicons";
import "./index.css";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightClickStatus: false
    };
  }

  handlerRightClick = () => {
    const { rightClickStatus } = this.state;
    this.setState({ rightClickStatus: !rightClickStatus });
  };

  render() {
    const {
      leftIcon,
      leftOnClick,
      rightIcon,
      rightOnClick,
      title,
      children
    } = this.props;
    const { rightClickStatus } = this.state;

    let rightClick =
      children && typeof children === "object" && children.type.name === "Menu"
        ? this.handlerRightClick
        : rightOnClick;

    return (
      <Fragment>
        <header className="App-header">
          {typeof leftIcon === "function" ? (
            leftIcon()
          ) : (
            <img
              src={leftIcon}
              onClick={leftOnClick}
              className="App-logo"
              alt="logo"
            />
          )}
          {<p>{title}</p>}
          {typeof rightIcon === "function" ? (
            rightIcon()
          ) : (
            <Ionicon
              style={{
                padding: "5px",
                position: "relative",
                top: "5px",
                right: "10px"
              }}
              color={"#5ccbea"}
              icon={rightIcon}
              fontSize="50px"
              onClick={rightClick}
            />
          )}
        </header>
        {rightClickStatus && children}
      </Fragment>
    );
  }
}

export const Menu = props => {
  const { children } = props;

  let childs = [];
  if (children && children instanceof Array) {
    childs = children;
  } else {
    childs.push(children);
  }

  return (
    <ul className="list-group menu">
      {childs.map(child => (
        <li
          key={Math.random()
            .toString(36)
            .substr(2, 9)}
          
        >
          {child}
        </li>
      ))}
    </ul>
  );
};
export const MenuItem = props => {
  const { children, ...newProps } = props;
  return <a className="list-group-item menu-item" {...newProps}>{children}</a>;
};
