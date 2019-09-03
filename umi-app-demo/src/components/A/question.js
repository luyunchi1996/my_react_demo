import React, { PureComponent, Fragment } from 'react';
import { Radio, Checkbox } from 'antd';

class Question extends PureComponent {

  componentWillMount(){
    const { questions,id } = this.props;
    questions.push(id)

  }


  render() {
    const { question, type,questions,items, answer, score, description } = this.props;
    const that = this
    function _renderGroupType() {

      const answerItemStr="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

      switch (type) {
        case 'radio':
          return (
            <Radio.Group onChange={that.handlerRadioChange}>
              {
                items.map((it,index)=>(<Radio value={index}><span>{`${answerItemStr[index]}.  `}</span>{it}</Radio>))
              }
            </Radio.Group>
          );
        case 'multi':
          return (
            <Checkbox.Group>
              {
                items.map((it,index)=>(<Checkbox value={index}><span>{`${answerItemStr[index]}.  `}</span>{it}</Checkbox>))
              }
            </Checkbox.Group>
          );
        default:
          return '';
      }
    }

    return (
      <Fragment>
        <p><span>{`${questions.length}. `}</span>{question}</p>
        <div>
           {_renderGroupType()}
        </div>
        <div>
           <div></div>
           <p>查看</p>
        </div>

      </Fragment>
    );
  }
}

export default Question;
