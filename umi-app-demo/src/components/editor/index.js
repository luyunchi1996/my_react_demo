import React, { PureComponent, Fragment } from 'react';
import Block from './block';

import styles from './style.less';

class Editor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      datas:[]
    };
    this.myRef = React.createRef();
  }
  componentDidMount() {}

  handlerEditorOnFocus(e) {}

  handlerEditorOnClick(e) {
    //  console.log(e.target.attributes.line.value)
    const {target:{attributes} } = e
    const {line={},id={}} = attributes
    const {datas} = this.state

    let newDatas =[...datas]

    if(id.value && id.value==="tEditor"){
        newDatas.push({p:""})
        this.setState({datas:newDatas})
    }else{

    }

    console.log(line.value);
  }

  handlerEditorOnKeyUp(e) {}

  warpedComponentByType(type) {
    const Type = type;
    return class extends PureComponent {
      render() {
        return <Type {...this.props} />;
      }
    };
  }

  _renderContent = (d, lists) => {
    const content = d.shift();
    if (typeof content === 'string') {
      lists.push(content);
    } else {
      for (const key in content) {
        const text = content[key];
        if (key === 'attr') continue;

        if (typeof text === 'string') {
          if (key === 'img') {
            const New = this.warpedComponentByType(key);
            const newProps = {
              ...content.attr,
              line: lists.length + 1,
              style: { width: '100%' },
            };
            lists.push(<New {...newProps} />);
          } else {
            const New = this.warpedComponentByType(key);
            const newProps = {
              ...content.attr,
              line: lists.length + 1,
            };
            lists.push(<New {...newProps}>{text}</New>);
          }
        } else if (text instanceof Array) {
          const New = this.warpedComponentByType(key);
          const newList = this._renderContent(text, []);
          const newProps = {
            ...content.attr,
            children: newList,
            line: lists.length + 1,
          };
          lists.push(<New {...newProps} />);
        }
      }
    }
    if (d.length === 0) return lists;
    return this._renderContent(d, lists);
  };

  render() {
    const { data } = this.props;
    const {datas} = this.state;



    return (
      <div
        tabIndex="0"
        className={styles.tEditor}
        id="tEditor"
        ref={this.myRef}
        contentEditable={true}
        suppressContentEditableWarning
        onFocus={e => this.handlerEditorOnFocus(e)}
        onKeyUp={e => this.handlerEditorOnKeyUp(e)}
        onClick={e => this.handlerEditorOnClick(e)}
      >
        {this._renderContent(datas.length===0?data:datas, [])}
      </div>
    );
  }
}

export default Editor;
