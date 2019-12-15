import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text, Picker, Image} from '@tarojs/components'
import {observer, inject} from '@tarojs/mobx'

import './sampleDetail.scss'


@inject('counterStore')
@observer
class SampleDetail extends Component {

  config = {
    navigationBarTitleText: '样品详情'
  }

  constructor(props) {
    super(props)
    const info = Taro.getSystemInfoSync();
    const {windowWidth, windowHeight} = info;
    this.state = {
      windowWidth,
      windowHeight
    }
  }

  render() {
    const {windowWidth, windowHeight} = this.state;
    return (
      <View
        className='st01'
        style={`height:${windowHeight}px`}
      >
        <View
          style={{
            background: `url(${require('../../images/projectDetail.png')}) no-repeat`,
            backgroundColor: 'rgba(244,244,244,1)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: `${windowWidth / 2.5}px`
          }}
        >
          <View className='s01'>
            <View className='s02'>
              <View className='s03'>
                <Text>黄豆芽</Text>
              </View>
              <View className='s04'>
                <Text>杭州市人民路实验小学</Text>
              </View>
              <View className='s04'>
                <Text>2019-12-14 08:09:36采</Text>
              </View>
            </View>
            <View className='s02'>
              <View className='s03'>
                <View className='style04'>
                  <Image
                    src={require('../../images/e.png')}
                    className='backSchool'
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className='w1'>
          <View className='w2'>
            <View className='w3'>
              <Text>样品编号：</Text>
            </View>
            <View className='w4'>
              <Text>yp87654646</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#e4e4e4', height: '1px', width: '94%',marginLeft:'3%'}}>
            <Text />
          </View>
          <View className='w2'>
            <View className='w3'>
              <Text>样品名称：</Text>
            </View>
            <View className='w4 w5'>
              <Text>黄豆芽</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#e4e4e4', height: '1px', width: '94%',marginLeft:'3%'}}>
            <Text />
          </View>
          <View className='w2'>
            <View className='w3'>
              <Text>检验单号：</Text>
            </View>
            <View className='w4'>
              <Text>jx10546465</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#e4e4e4', height: '1px', width: '94%',marginLeft:'3%'}}>
            <Text />
          </View>

          <View className='w2'>
            <View className='w3'>
              <Text>检测项目：</Text>
            </View>
            <View className='w4 w5'>
              <Text>农药残留</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#e4e4e4', height: '1px', width: '94%',marginLeft:'3%'}}>
            <Text />
          </View>

          <View className='w2'>
            <View className='w3'>
              <Text>检测时间：</Text>
            </View>
            <View className='w4'>
              <Text>2019-12-14 08:09:36</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#e4e4e4', height: '1px', width: '94%',marginLeft:'3%'}}>
            <Text />
          </View>

          <View className='w2'>
            <View className='w3'>
              <Text>检测值：</Text>
            </View>
            <View className='w4'>
              <Text>0.00%</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#e4e4e4', height: '1px', width: '94%',marginLeft:'3%'}}>
            <Text />
          </View>

          <View className='w2'>
            <View className='w3'>
              <Text>检测结果：</Text>
            </View>
            <View className='w4'>
              <Text>合格</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#e4e4e4', height: '1px', width: '94%',marginLeft:'3%'}}>
            <Text />
          </View>
          <View className='w2'>
            <View className='w3'>
              <Text>后续处理：</Text>
            </View>
            <View className='w4'>
              <Text>-</Text>
            </View>
          </View>
          <Image
            src={require('../../images/323.png')}
            className='w6'
          />
        </View>
      </View>
    )
  }
}

export default SampleDetail
