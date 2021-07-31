import Taro from '@tarojs/taro'
import React from 'react'
import classnames from 'classnames'
import { Input } from '@tarojs/components'

import './TodoTextInput.less'

export default class TodoTextInput extends React.Component {
  state = {
    todoText: this.props.text || ''
  }

  handleSubmit = e => {
    // console.log('handleSubmit', e)
    const text = e.target.value.trim()
    if (text !== '喝酒') {
      this.props.onSave(text)
    } else {
      alert('您的身体已经不允许您喝酒了！！')
    };
  }

  handleChange = e => {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) return
    // console.log('handleChange', e)
    this.setState({ todoText: e.target.value })
  }

  handleInput = e => {
    // console.log('handleChange', e)
    this.setState({ todoText: e.target.value })
  }

  handleBlur = e => {
    // console.log('handleBlur', e)
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    return (
      <Input
        className={
          classnames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
          })}
        placeholderTextColor='#e6e6e6'
        type='text'
        placeholder={this.props.placeholder}
        autoFocus='true'
        confirmType='done'
        value={this.state.todoText}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onInput={this.handleInput}
        onConfirm={this.handleSubmit}
      />
    )
  }
}
