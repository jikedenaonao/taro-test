import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text, Image, Icon} from '@tarojs/components'
import {observer, inject} from '@tarojs/mobx'

import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '校园食品监管',
  };

  constructor(props) {
    super(props)
    const info = Taro.getSystemInfoSync();
    const {windowWidth, windowHeight} = info;
    this.state = {
      windowWidth,
      windowHeight
    }
  }

  /**
   * 跳转到检测界面
   */
  onHandleGetInspectionPage = () => {
    console.log('跳转到检测界面');
    Taro.navigateTo({
      url: '/pages/inspectionList/inspectionList'
    })
  };
  /**
   * 跳转到新增样品界面
   */
  onHandleGetAddSamplePage = () => {
    console.log('跳转到新增样品界面');
    Taro.navigateTo({
      url: '/pages/sampleAdd/sampleAdd'
    })
  };
  /**
   * 测试
   */
  onHandleTestPage = () => {
    console.log('跳转到新增样品界面');
    Taro.navigateTo({
      url: '/pages/test/test'
    })
  };

  render() {
    const {windowWidth, windowHeight} = this.state;
    console.log(windowHeight);
    // alert(windowWidth);
    return (
      <View
        className='st01'
      >
        <View className='st02'>
          <Image
            src={require('../../images/schoolBackground.png')}
            className='backImg'
            style={process.env.TARO_ENV === 'rn' ? '' : `height:${windowWidth / 2.25}px`}
          />
          <View className='style01'>
            <View className='style04'>
              <Image
                src='http://www.yuntsoft.com:7389/group1/M00/01/35/rBDZEl06udyAd2IsAAko5fIOHUw644.png'
                className='backSchool'
              />
            </View>
          </View>
          <View
            className='school_style'
          >
            <Text className='style03'> 实验一中 </Text>
          </View>
        </View>

        <View className='q1 q7'>
          <View className='q2'>
            <Image
              src={require('../../images/schoolAddressName.png')}
              className='q3'
            />
          </View>
          <View className='q4'>
            <Text>注册地址</Text>
          </View>
          <View className='q5'>
            <Text>西安市鄠邑区画展街16号</Text>
          </View>
        </View>

        <View className='q1'>
          <View className='q2'>
            <Image
              src={require('../../images/enterprisePeople.png')}
              className='q3'
            />
          </View>
          <View className='q4'>
            <Text>负责人</Text>
          </View>
          <View className='q5'>
            <Text>冯收名</Text>
          </View>
        </View>

        <View className='q1'>
          <View className='q2'>
            <Image
              src={require('../../images/enterprisePhone.png')}
              className='q3'
            />
          </View>
          <View className='q4'>
            <Text>联系电话</Text>
          </View>
          <View className='q5'>
            <Text>13609255309</Text>
          </View>
        </View>

        <View className='q1'>
          <View className='q2'>
            <Image
              src={require('../../images/enterpriseNum.png')}
              className='q3'
            />
          </View>
          <View className='q4'>
            <Text>就餐人数</Text>
          </View>
          <View className='q5'>
            <Text>1200</Text>
          </View>
        </View>

        <View className='q1'>
          <View className='q2'>
            <Image
              src={require('../../images/schoolTag.png')}
              className='q3'
            />
          </View>
          <View className='q4'>
            <Text>企业类型</Text>
          </View>
          <View className='q5'>
            <Text>民办</Text>
          </View>
        </View>

        <View className='q1' onClick={this.onHandleGetInspectionPage}>
          <View className='q2'>
            <Image
              src={require('../../images/enterpriseRecord.png')}
              className='q3'
            />
          </View>
          <View className='q4'>
            <Text>检测台账</Text>
          </View>
          <View className='q5' >
            <Image
              src={require('../../images/right.png')}
              className='q3'
            />
          </View>
        </View>

        <View className='q1' onClick={this.onHandleGetAddSamplePage}>
          <View className='q2'>
            <Image
              src={require('../../images/add.png')}
              className='q3'
            />
          </View>
          <View className='q4'>
            <Text>新增样品</Text>
          </View>
          <View className='q5' >
            <Image
              src={require('../../images/right.png')}
              className='q3'
            />
          </View>
        </View>

        {/*<View className='q1' onClick={this.onHandleTestPage}>*/}
          {/*<View className='q2'>*/}
            {/*<Image*/}
              {/*src={require('../../images/add.png')}*/}
              {/*className='q3'*/}
            {/*/>*/}
          {/*</View>*/}
          {/*<View className='q4'>*/}
            {/*<Text>测试</Text>*/}
          {/*</View>*/}
          {/*<View className='q5' >*/}
            {/*<Image*/}
              {/*src={require('../../images/right.png')}*/}
              {/*className='q3'*/}
            {/*/>*/}
          {/*</View>*/}
        {/*</View>*/}

        <View className='q6'>
          <Text />
        </View>
      </View>
    )
  }
}

export default Index
