import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text, Image, Picker} from '@tarojs/components'
import {observer, inject} from '@tarojs/mobx'

import './inspectionDetail.scss'


@inject('counterStore')
@observer
class InspectionDetail extends Component {

  config = {
    navigationBarTitleText: '样品列表'
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

  /**
   * 跳转到样品详情界面
   */
  onHandleGetSampleDetail = () =>{
    console.log('跳转到详情界面');
    Taro.redirectTo ({
      url: '/pages/sampleDetail/sampleDetail'
    })
  };


  render() {
    const {windowWidth, dateSelStart, dateSelEnd} = this.state;
    return (
      <View>
        <View
          style={{background:`url(${require('../../images/backHeader.png')}) no-repeat`,backgroundColor: 'rgba(244,244,244,1)',backgroundPosition:'center',backgroundSize:'cover',width:'100%',height: `${windowWidth / 2}px`}}
        >
          <View className='c_title' >
            <Text>样品列表</Text>
          </View>
          <View style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'80px'}}>
            <View className='head_div' style={{}}>
              <View style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Picker mode='date' onChange={this.onDateChangeStart}>
                  <View style={{display: 'flex', flex: 1, flexDirection: 'column',alignItems:'center',justifyContent:'center'}}>
                    <Text className='date_title_left' style={{marginTop:'7px',height: '17px'}}>日期</Text>
                    <Text className='date_style_left' style={{marginTop: '12px'}}>{dateSelStart}</Text>
                  </View>
                </Picker>
              </View>
              <View style={{position:'relative',width:'100%'}}>
                <Image
                  src={require('../../images/right.png')}
                  style={{width: '40px', height: '40px',position:'absolute',left:'94%',top:'50%',transform:'translate(-50%,-50%)',marginTop:'-24px'}}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          backgroundColor: '#FFF',
          height: '45pt',
          lineHeight: '45pt',
          color: '#666666',
          fontSize: '11pt',
          marginTop:'-5px'
        }}
        >
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>样品名称</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>检测人员</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>检测项目</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>检测结果</Text>
          </View>
        </View>
        <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '3px', width: '100%',}}>
          <Text />
        </View>
        <View style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          backgroundColor: '#FFF',
          height: '45pt',
          lineHeight: '45pt',
          color: '#666666',
          fontSize: '10pt',
          marginTop: '2px'
        }}
          onClick={this.onHandleGetSampleDetail}
        >
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>木耳菜</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>杨少华</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>亚硝酸盐</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>合格</Text>
          </View>
        </View>
        <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '3px', width: '100%',}}>
          <Text />
        </View>
        <View style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          backgroundColor: '#FFF',
          height: '45pt',
          lineHeight: '45pt',
          color: '#666666',
          fontSize: '10pt',
          marginTop: '2px'
        }}
          onClick={this.onHandleGetSampleDetail}

        >
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>生花生</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>袁继孝</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>二氧化硫</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>合格</Text>
          </View>
        </View>
        <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '3px', width: '100%',}}>
          <Text />
        </View>
        <View style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          backgroundColor: '#FFF',
          height: '45pt',
          lineHeight: '45pt',
          color: '#666666',
          fontSize: '10pt',
          marginTop: '2px'
        }}
          onClick={this.onHandleGetSampleDetail}
        >
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>青菜</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>周邵英</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>农药残留</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>合格</Text>
          </View>
        </View>
        <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '3px', width: '100%',}}>
          <Text />
        </View>

      </View>
    )
  }
}

export default InspectionDetail

