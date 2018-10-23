import React, { Component, Fragment, createRef } from "react";
import { observer, inject } from 'mobx-react';
// 给组件注入其需要的 store（利用 React context 机制）
@inject('homeStore')
// 监听store的变化, 同时更新视图的变化
@observer class Home extends Component {
  constructor (props) {
    super(props)
    this.inputRef = createRef()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    const { changeValAction } = this.props.homeStore
    let val = e.target.value
    changeValAction(val)
  }
  handleSubmit () {
    const { addListAction } = this.props.homeStore
    let val = this.inputRef.current.value
    addListAction(val)
  }
  handleDelete (index) {
    const { deleteListAction } = this.props.homeStore
    deleteListAction(index)
  }
  render () {
    const { filterList, list, val } = this.props.homeStore
    return (
      <Fragment>
        <h2>
          使用computed之后list的值: {filterList}
        </h2>
        <label htmlFor="input"> 请输入: </label>
        <input 
          id="input"
          type="text"
          value={val}
          onChange={this.handleChange}
          ref={this.inputRef}
        />
        <button onClick={this.handleSubmit}>提交</button>
        {
          list.map((item, index) => {
            return (
              <li 
                key={index}
                onClick={() => this.handleDelete(index)}
              >
                {item}
              </li>
            )
          })
        }
      </Fragment>
    );
  }
}
export default Home;