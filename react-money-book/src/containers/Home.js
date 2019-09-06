import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import logo from "../logo.svg";
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import MonthPicker from "../components/MonthPicker";
import TotalPrice from "../components/TotalPrice";
import CreateBtn from "../components/CreateBtn";
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME,padLeft } from "../utility";

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
 

  onModifyItem =(item)=>{
    const {items} = this.state
    const newItem = items.map((o)=>{
       if(o.id===item.id){
          return {
             ...o,
             title:"修改内容"
          }
       }
       return o
    } )
    this.setState({items:newItem})
  }

  onDeleteItem =(item)=>{
    const {items} = this.state
    const newItem = items.filter((o)=>o.id!==item.id)
    this.setState({items:newItem})

  }
  onChangeMonthPicker=(year,month)=>{
    this.setState({ currentDate: { year, month } });
  }


  onTabChange=(view)=>{
    this.setState({ tabView:view });
  }
  
  onClickCreateBtnItem =()=>{
    const newItem =    {
      id: 5,
      title: "title1",
      price: 100,
      date: "2018-10-07",
      cid: "2"
    }
    const {items} = this.state
    this.setState({items:[newItem,...items]})

  }


  render() {
    let totalIncome = 0,
      totalOutcome = 0;

    const { categories, items, currentDate, tabView } = this.state;
    const itemsWithCategory = items.map(obj => {
      return {
        ...obj,
        category: categories[obj.cid]
      };
    }).filter((o)=>o.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)  );
    itemsWithCategory.forEach(item => {
      if (item.category.type === TYPE_OUTCOME) {
        totalOutcome += item.price;
      } else {
        totalIncome += item.price;
      }
    });

    return (
      <Fragment>
        <header className="App-header">
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
        <ViewTab
          activeTab={tabView}
          onTabChange={this.onTabChange}
        />
        <CreateBtn onClick={this.onClickCreateBtnItem} />
        {tabView === LIST_VIEW && (
          <PriceList
            items={itemsWithCategory}
            onModifyItem={this.onModifyItem}
            onDeleteItem={this.onDeleteItem}
          />
        )}
        {tabView === CHART_VIEW && <div>图表模式</div>}
      </Fragment>
    );
  }
}

export default Home;
