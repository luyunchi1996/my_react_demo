import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import logo from "../logo.svg";
import store from 'store'
import { withRouter } from "react-router-dom";
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import MonthPicker from "../components/MonthPicker";
import TotalPrice from "../components/TotalPrice";
import CreateBtn from "../components/CreateBtn";
import {NavBar,Menu,MenuItem} from "../components/NavBar"
import {
  LIST_VIEW,
  CHART_VIEW,
  TYPE_INCOME,
  TYPE_OUTCOME,
  padLeft
} from "../utility";
import { withContext } from "../withContext";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabView: LIST_VIEW,
      items: [
        {
          id: 1,
          title: "title1",
          price: 100,
          date: "2018-09-07",
          cid: "1"
        },
        {
          id: 2,
          title: "title2",
          price: 200,
          date: "2018-09-08",
          cid: "2"
        }
      ],
      categories: {
        "1": {
          id: 1,
          name: "旅行",
          type: "income",
          iconName: "ios-plane"
        },
        "2": {
          id: 2,
          name: "旅行",
          type: "outcome",
          iconName: "ios-plane"
        }
      },
      currentDate: {
        year: 2018,
        month: 2
      }
    };
  }

  onModifyItem = item => {
    const { history } = this.props;
    history.push(`/edit/${item.id}`);
  };

  onDeleteItem = item => {
    const { actions } = this.props;
    actions.deleteItem(item);
  };
  onChangeMonthPicker = (year, month) => {
    this.setState({ currentDate: { year, month } });
  };

  onTabChange = view => {
    this.setState({ tabView: view });
  };

  onClickCreateBtnItem = () => {
    const { history } = this.props;
    history.push("/create");
  };

  render() {
    let totalIncome = 0,
      totalOutcome = 0;

    const { data } = this.props;
    const { categories, items, currentDate, tabView } = this.state;
    const itemsWithCategory = items
      .map(obj => {
        return {
          ...obj,
          category: categories[obj.cid]
        };
      })
      .filter(o =>
        o.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
      );
    itemsWithCategory.forEach(item => {
      if (item.category.type === TYPE_OUTCOME) {
        totalOutcome += item.price;
      } else {
        totalIncome += item.price;
      }
    });

    const userInfo = store.get("userInfo");

    return (
      <Fragment>
        <NavBar leftIcon={logo} title="首页" rightIcon="ios-menu" rightOnClick={()=>{console.log("menuClick")}}>
            <Menu>
               <MenuItem onClick={()=>{
                  const { history } = this.props;
                  if(!userInfo)
                    history.push("/user/login");
                }}>
                 <p style={{display:"flex","alignItems":"center",margin:0}}>
                  <Ionicon
                      style={{
                        padding: "5px",
                        position: "relative",
                        top: "5px",
                        right: "10px"
                      }}
                      color={"#5ccbea"}
                      icon={"ios-contact"}
                      fontSize="40px"
                     
                    />
                    <span>{userInfo&&userInfo.userName||"未登录"}</span>
                 </p>
               </MenuItem>
               <MenuItem>返回首页</MenuItem>
            </Menu>
        </NavBar>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <MonthPicker
              year={currentDate.year}
              month={currentDate.month}
              onChange={this.onChangeMonthPicker}
            />
            <TotalPrice income={totalIncome} outcome={totalOutcome} />
          </div>
        </header>
        <ViewTab activeTab={tabView} onTabChange={this.onTabChange} />
        <CreateBtn onClick={this.onClickCreateBtnItem} />
        {tabView === LIST_VIEW && (
          <PriceList
            items={itemsWithCategory}
            onModifyItem={this.onModifyItem}
            onDeleteItem={this.onDeleteItem}
          />
        )}
        {tabView === CHART_VIEW && <div>图表模式</div>} */}
      
      </Fragment>
    );
  }
}

export default withRouter(withContext(Home));
