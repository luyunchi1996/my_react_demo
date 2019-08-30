import React, { PureComponent } from 'react';
import { Select } from 'antd';
import styles from './style.less';
import { warpedComponent } from './warpedComponent';

class LinkSelectItem extends PureComponent {
  parentId = '';
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeHandler = () => {};

  onPressEnterHandler = e => {
    const { setData, name, getData, format } = this.props;
    const {value} = e.currentTarget;

    if (format) {
      const vals = [];
      const formats = format.split('|');
      let extraKey = '';
      const data = getData();
      formats.map(key => {
        if (key.indexOf(':') !== -1) extraKey = key;

        if (extraKey !== key && data[key]) {
          vals.push(data[key]);
        }

        return 0;
      });
      if (vals.length !== 0) {
        const values = vals.join('');
        const extra = value.substring(values.length, value.length);
        setData({ [extraKey]: extra, [name]: value });
        return 0;
      }
    }
    setData({ [name]: value });
    return 0
  };

  onSelectHandler = value => {
    const { setData, name } = this.props;
    setData({ [name]: value });
  };

  render() {
    const {
      children,
      label,
      selectData,
      name,
      getData,
      format,
      getParentIds,
      setParentIds,
      linkProps,
      root,
    } = this.props;

    let { value } = this.props;

    let selects = selectData[name];
    const parentId = getParentIds();
    // 如果value 存在值 则使用 value所对应的 parentId
    if (root === name) {
      const rootList = selects.filter(o => o.value === value);
      if (rootList.length === 0) {
        setParentIds({ [name]: selects[0].id });
      } else {
        setParentIds({ [name]: rootList[0].id });
      }
    } else {
      // debugger
      let preParentIds = '';
      linkProps.map((v, i) => {
        if (v === name) {
          preParentIds = parentId[linkProps[i - 1]];
        }
        return 0;
      });
      // 过滤掉不属于 该 preParentIds 的项
      if (selects) {
        selects = selects.filter(o => o.parentId === preParentIds);
        // 如果value 存在值 则使用 value所对应的 parentId ,设置value的值
        // 不存在时使用第0项的 parentId
        // 设置所在的parentId
        if (value) {
          const valueList = selects.filter(o => o.value === value);
          if(valueList.length!==0)
            setParentIds({ [name]: valueList[0].id });
          else
            if(selects.length!==0){
              // eslint-disable-next-line prefer-destructuring
              value = selects[0].value;
              setParentIds({ [name]:  selects[0].id });
            }else{
              value ="";
              setParentIds({ [name]: 0 });
            }

        } else
          if(selects.length!==0){
            // eslint-disable-next-line prefer-destructuring
            value = selects[0].value;
            setParentIds({ [name]: selects[0].id });
          }else{
            value ="";
            setParentIds({ [name]: 0 });
          }

      }
    }

    if (format) {
      const formats = format.split('|');
      const data = getData();
      const vals = [];
      formats.map(key => {
        if (data[key]) {
          vals.push(data[key]);
        }
        return 0;
      });
      if (vals.length !== 0) {
        value = vals.join('');
      }
    }

    const NewComponents = warpedComponent(children);

    return (
      <div>
        <span className={styles['link-select-item-label']}>{label}</span>
        {selects && selects instanceof Array ? (
          <NewComponents  style={{ width: '120px' }} value={value} onSelect={e => this.onSelectHandler(e)}>
            {selects.map(sel => (
              <Select.Option value={sel.value}>{sel.value}</Select.Option>
            ))}
          </NewComponents>
        ) : (
          <NewComponents
            style={{ width: '240px' }}
            defaultValue={value}
            onPressEnter={e => {
              this.onPressEnterHandler(e);
            }}
          />
        )}
      </div>
    );
  }
}

export default LinkSelectItem;
