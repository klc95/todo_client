import  { Component } from 'react'
import { View } from '@tarojs/components'

import './index.less'

class Detail extends Component {

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='todaoapp'>
         Hello World!
      </View>
    )
  }
}

export default Detail