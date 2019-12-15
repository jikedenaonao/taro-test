import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text, Image, Picker} from '@tarojs/components'
import {observer, inject} from '@tarojs/mobx'

import './inspectionList.scss'


@inject('counterStore')
@observer
class Inspectionlist extends Component {

  config = {
    navigationBarTitleText: '检测台账'
  }

  constructor(props) {
    super(props)
    const info = Taro.getSystemInfoSync();
    const {windowWidth} = info;
    this.state = {
      windowWidth,
      dateSelStart: '2019-12-02',
      dateSelEnd: '2019-12-08',

    }
  }

  onDateChangeStart = e => {
    this.setState({
      dateSelStart: e.detail.value
    })
  }
  onDateChangeEnd = e => {
    this.setState({
      dateSelEnd: e.detail.value
    })
  }

  /**
   * 跳转到样品列表
   */
  onHandleGetInspectionPage = () => {
    console.log('跳转到样品列表');
    Taro.navigateTo({
      url: '/pages/inspectionDetail/inspectionDetail'
    })
  };

  render() {
    const {windowWidth, dateSelStart, dateSelEnd} = this.state;
    return (
      <View
        className='st01'
      >
        <View className='s2'>
          <Image
            src={require('../../images/backHeader.png')}
            className='backImg'
            style={process.env.TARO_ENV === 'rn' ? '' : `height:${windowWidth / 2}px`}
          />

          <View className='c01'>
            <View className='c11'>
              <Text>
                检测台账
              </Text>
            </View>
          </View>

          <View className='s3'>
            <View className='head_div'>
              <View className='s4'>
                <Picker mode='date' onChange={this.onDateChangeStart}>
                  <View className='s5'>
                    <View className='date_title_left_01'>
                      <Text>开始时间</Text>
                    </View>
                    <View
                      className='date_style_left_02'
                      style={process.env.TARO_ENV === 'rn' ? '' : 'font-size:20px'}
                    >
                      <Text>{dateSelStart}</Text>
                    </View>
                  </View>
                </Picker>
              </View>
              <View className='s4'>
                <Picker mode='date' onChange={this.onDateChangeEnd} className='picker'>
                  <View className='s5'>
                    <View className='date_title_left_01'>
                      <Text>结束时间</Text>
                    </View>
                    <View
                      className='date_style_left_02'
                      style={process.env.TARO_ENV === 'rn' ? '' : 'font-size:20px'}
                    >
                      <Text>{dateSelEnd}</Text>
                    </View>
                  </View>
                </Picker>
              </View>
              <View className='s6'>
                <Image
                  src={require('../../images/right.png')}
                  className='s7'
                />
              </View>
            </View>
          </View>


        </View>
        <Text>{windowWidth}</Text>

        {/*<View style={{*/}
        {/*display: 'flex',*/}
        {/*alignItems: 'center',*/}
        {/*width: '100%',*/}
        {/*backgroundColor: '#FFF',*/}
        {/*height: '45pt',*/}
        {/*lineHeight: '45pt',*/}
        {/*color: '#666666',*/}
        {/*fontSize: '11pt',*/}
        {/*marginTop:'-5px'*/}
        {/*}}*/}
        {/*>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>日期</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>检测数量</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>阴性</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>阳性</Text>*/}
        {/*</View>*/}
        {/*</View>*/}
        {/*<View style={{backgroundColor: 'rgba(244,244,244,1)', height: '3px', width: '100%',}}>*/}
        {/*<Text />*/}
        {/*</View>*/}
        {/*<View style={{*/}
        {/*display: 'flex',*/}
        {/*alignItems: 'center',*/}
        {/*width: '100%',*/}
        {/*backgroundColor: '#FFF',*/}
        {/*height: '45pt',*/}
        {/*lineHeight: '45pt',*/}
        {/*color: '#666666',*/}
        {/*fontSize: '10pt',*/}
        {/*marginTop: '2px'*/}
        {/*}}*/}
        {/*onClick={this.onHandleGetInspectionPage}*/}
        {/*>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>2019-12-08</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>100</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>99</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>1</Text>*/}
        {/*</View>*/}
        {/*</View>*/}
        {/*<View style={{backgroundColor: 'rgba(244,244,244,1)', height: '3px', width: '100%',}}>*/}
        {/*<Text />*/}
        {/*</View>*/}
        {/*<View style={{*/}
        {/*display: 'flex',*/}
        {/*alignItems: 'center',*/}
        {/*width: '100%',*/}
        {/*backgroundColor: '#FFF',*/}
        {/*height: '45pt',*/}
        {/*lineHeight: '45pt',*/}
        {/*color: '#666666',*/}
        {/*fontSize: '10pt',*/}
        {/*marginTop: '2px'*/}
        {/*}}*/}
        {/*onClick={this.onHandleGetInspectionPage}*/}
        {/*>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>2019-12-07</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>85</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>80</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>5</Text>*/}
        {/*</View>*/}
        {/*</View>*/}
        {/*<View style={{backgroundColor: 'rgba(244,244,244,1)', height: '3px', width: '100%',}}>*/}
        {/*<Text />*/}
        {/*</View>*/}
        {/*<View style={{*/}
        {/*display: 'flex',*/}
        {/*alignItems: 'center',*/}
        {/*width: '100%',*/}
        {/*backgroundColor: '#FFF',*/}
        {/*height: '45pt',*/}
        {/*lineHeight: '45pt',*/}
        {/*color: '#666666',*/}
        {/*fontSize: '10pt',*/}
        {/*marginTop: '2px'*/}
        {/*}}*/}
        {/*onClick={this.onHandleGetInspectionPage}*/}

        {/*>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>2019-12-06</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>85</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>80</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>5</Text>*/}
        {/*</View>*/}
        {/*</View>*/}
        {/*<View style={{backgroundColor: 'rgba(244,244,244,1)', height: '3px', width: '100%',}}>*/}
        {/*<Text />*/}
        {/*</View>*/}
        {/*<View style={{*/}
        {/*display: 'flex',*/}
        {/*alignItems: 'center',*/}
        {/*width: '100%',*/}
        {/*backgroundColor: '#FFF',*/}
        {/*height: '45pt',*/}
        {/*lineHeight: '45pt',*/}
        {/*color: '#666666',*/}
        {/*fontSize: '10pt',*/}
        {/*marginTop: '2px'*/}
        {/*}}*/}
        {/*onClick={this.onHandleGetInspectionPage}*/}

        {/*>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>2019-12-05</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>85</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>80</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>5</Text>*/}
        {/*</View>*/}
        {/*</View>*/}
        {/*<View style={{backgroundColor: 'rgba(244,244,244,1)', height: '3px', width: '100%',}}>*/}
        {/*<Text />*/}
        {/*</View>*/}
        {/*<View style={{*/}
        {/*display: 'flex',*/}
        {/*alignItems: 'center',*/}
        {/*width: '100%',*/}
        {/*backgroundColor: '#FFF',*/}
        {/*height: '45pt',*/}
        {/*lineHeight: '45pt',*/}
        {/*color: '#666666',*/}
        {/*fontSize: '10pt',*/}
        {/*marginTop: '2px'*/}
        {/*}}*/}
        {/*onClick={this.onHandleGetInspectionPage}*/}

        {/*>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>2019-12-04</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>85</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>80</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>5</Text>*/}
        {/*</View>*/}
        {/*</View>*/}
        {/*<View style={{backgroundColor: 'rgba(244,244,244,1)', height: '3px', width: '100%',}}>*/}
        {/*<Text />*/}
        {/*</View>*/}
        {/*<View style={{*/}
        {/*display: 'flex',*/}
        {/*alignItems: 'center',*/}
        {/*width: '100%',*/}
        {/*backgroundColor: '#FFF',*/}
        {/*height: '45pt',*/}
        {/*lineHeight: '45pt',*/}
        {/*color: '#666666',*/}
        {/*fontSize: '10pt',*/}
        {/*marginTop: '2px'*/}
        {/*}}*/}
        {/*onClick={this.onHandleGetInspectionPage}*/}

        {/*>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>2019-12-03</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>85</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>80</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>5</Text>*/}
        {/*</View>*/}
        {/*</View>*/}
        {/*<View style={{backgroundColor: 'rgba(244,244,244,1)', height: '3px', width: '100%',}}>*/}
        {/*<Text />*/}
        {/*</View>*/}
        {/*<View style={{*/}
        {/*display: 'flex',*/}
        {/*alignItems: 'center',*/}
        {/*width: '100%',*/}
        {/*backgroundColor: '#FFF',*/}
        {/*height: '45pt',*/}
        {/*lineHeight: '45pt',*/}
        {/*color: '#666666',*/}
        {/*fontSize: '10pt',*/}
        {/*marginTop: '2px'*/}
        {/*}}*/}
        {/*onClick={this.onHandleGetInspectionPage}*/}
        {/*>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>2019-12-02</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>85</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>80</Text>*/}
        {/*</View>*/}
        {/*<View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>*/}
        {/*<Text>5</Text>*/}
        {/*</View>*/}
        {/*</View>*/}
        {/*<View style={{backgroundColor: 'rgba(244,244,244,1)', height: '3px', width: '100%',}}>*/}
        {/*<Text />*/}
        {/*</View>*/}

      </View>
    )
  }
}

export default Inspectionlist

