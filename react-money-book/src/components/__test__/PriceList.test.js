import React from "react";
import { shallow } from "enzyme";
import PriceList from "../PriceList";
import {createSerializer} from 'enzyme-to-json';

const items = [
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
];
const categories = {
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
};

const itemsWithCategory = items.map(obj => {
  return {
    ...obj,
    category: categories[obj.cid]
  };
});

const props = {
  items: itemsWithCategory,
  onModifyItem: () => {},
  onDeleteItem: () => {}
};

let wrapper;

describe("test PriceList component ", () => {
    beforeEach(()=>{
       wrapper = shallow(<PriceList  {...props}/>)
    })

    it("should render the component to match snapshot 快照",()=>{
         expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
         expect(wrapper).toMatchSnapshot()

    })

});
