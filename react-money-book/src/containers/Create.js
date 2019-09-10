import React, { Component } from "react";
import { Tabs, Tab } from "../components/Tabs";
import CategorySelect from "../components/CategorySelect";
import PriceForm from "../components/PriceForm";
import { TYPE_INCOME, TYPE_OUTCOME } from "../utility";
import { withContext } from "../withContext";

const testCategories = [
  {
    name: "旅行",
    iconName: "ios-plane",
    id: "1",
    type: "outcome"
  },
  {
    name: "餐饮",
    iconName: "ios-restaurant",
    id: "2",
    type: "outcome"
  },
  {
    name: "购物",
    iconName: "ios-basket",
    id: "3",
    type: "outcome"
  },
  {
    name: "数码",
    iconName: "ios-phone-portrait",
    id: "4",
    type: "outcome"
  },
  {
    name: "工资",
    iconName: "ios-card",
    id: "10",
    type: "income"
  },
  {
    name: "兼职",
    iconName: "ios-cash",
    id: "11",
    type: "income"
  },
  {
    name: "理财",
    iconName: "logo-yen",
    id: "12",
    type: "income"
  }
];

const activeList = [TYPE_INCOME, TYPE_OUTCOME];

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  render() {
    const { match } = this.props;
    const { activeIndex } = this.state;

    const newCategories = testCategories.filter(
      category => category.type === activeList[activeIndex]
    );

    return (
      <div>
        <Tabs
          activeIndex={activeIndex}
          onTabChange={index => {
            this.setState({ activeIndex: index });
          }}
        >
          <Tab>收入</Tab>
          <Tab>支出</Tab>
        </Tabs>
        <CategorySelect
          categories={newCategories}
          onSelectCategory={() => {}}
        />
        <PriceForm onCancelSubmit={() => {}} onFormSubmit={() => {}} />
      </div>
    );
  }
}
   
export default withContext(Create);
