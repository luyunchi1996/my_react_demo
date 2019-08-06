import A from "./a";

import React from "react";
import { createForm } from 'rc-form';


// 代理事件，获取值
class ProxyComponent {
  data = {};
  props = {};
  constructor(props) {
    this.props = props;
  }
  setComponent(component) {
    const WrappedComponent = component;
    function _WrappedComponent() {
      return class extends React.PureComponent {
        render() {          
          return <WrappedComponent {...this.props} />;
        }
      };
    }
    const Wrapped = _WrappedComponent();
    const {config,form:{getFieldDecorator}}= this.props
    // return <Wrapped {...config}/>
    return getFieldDecorator("a",{
        initialValue:"123"
    })(<Wrapped key={config.key} {...config} />);
  }
  setData = value => {
    this.data = value;
  };
  getData() {
    return this.data;
  }
}

export default function SuperDemo(Component) {
  let componentList = [];

  return class extends createForm()(Component) {
    prop={}

    constructor(props) {
      super(props);
      this.state = {};
    }
    componentDidMount() {
    }

    renderList = () => {

      const list = componentList.map(o => {
        return o.setComponent(A);
      });

      return list;
    };

    getData = () => {
      componentList.map(o => {
        console.log(o.getData());
        return 0;
      });
      return 0;
    };

    addComponentInList = list => {

      list.map(k => {
        const newProps={
            ...this.prop,
            config:k
        }
        componentList.push(new ProxyComponent(newProps));
        return 0;
      });
    };

    addComponent = () => {};

    render() {
      const form ={
        setFields:this.setFields,
        setFieldsInitialValue: this.setFieldsInitialValue,
        setFieldsValue: this.setFieldsValue,
        resetFields:this.resetFields,
        getFieldDecorator: this.getFieldDecorator,
        getFieldError: this.getFieldError,
        getFieldInstance:this.getFieldInstance,
        getFieldProps: this.getFieldProps,
        getFieldValue: this.getFieldValue,
        getFieldsError: this.getFieldsError,
        getFieldsValue: this.getFieldsValue,
      }
      const newProps = {
        component: {
          addComponentInList: this.addComponentInList,
          addComponent: this.addComponent,
          renderList: this.renderList,
          getData: this.getData
        },
        form,
        ...this.props
      };
      this.prop = newProps

      return (
        <div>
          <Component {...newProps} />
        </div>
      );
    }
  };
}
