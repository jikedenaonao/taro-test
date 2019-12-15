import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker,Input } from '@tarojs/components'

export default class Test extends Component {
  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    selectorChecked: '美国',
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  render () {
    return (
      <View>
        <View>
          <View>
            <Text></Text>
            <View>
              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <View>
                  <Text>
                    当前选择：{this.state.selectorChecked}
                  </Text>
                </View>
              </Picker>
            </View>
          </View>
          <View >
            <Text>时间选择器</Text>
            <View>
              <Picker mode='time' onChange={this.onTimeChange}>
                <View>
                  <Text>
                    当前选择：{this.state.timeSel}
                  </Text>
                </View>
              </Picker>
            </View>
          </View>
          <View>
            <Text>日期选择器</Text>
            <View>
              <Picker mode='date' onChange={this.onDateChange}>
                <View>
                  <Text>
                    当前选择：{this.state.dateSel}
                  </Text>
                </View>
              </Picker>
            </View>
          </View>

          <Input type='text' placeholder='请输入样品名称' focus  />

        </View>
      </View>
    )
  }
}
