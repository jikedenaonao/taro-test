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
  onHandleGetInspectionPage = () =>{
    console.log('跳转到样品列表');
    Taro.navigateTo({
      url: '/pages/inspectionDetail/inspectionDetail'
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
            <Text>检测台账</Text>
          </View>
          <View style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'80px'}}>
            <View className='head_div' style={{display: 'flex',}}>

              <View style={{flex:4}}>
                <Picker mode='date' onChange={this.onDateChangeStart}>
                  <View style={{display: 'flex', flex: 1, flexDirection: 'column', marginLeft: '20px'}}>
                    <Text className='date_title_left' style={{marginTop: '7px', height: '17px'}}>开始时间</Text>
                    <Text className='date_style_left' style={{marginTop: '12px'}}>{dateSelStart}</Text>
                  </View>
                </Picker>
              </View>
              <View style={{flex:4}}>
                <Picker mode='date' onChange={this.onDateChangeEnd}>
                  <View style={{display: 'flex', flex: 1, flexDirection: 'column', marginLeft: '20px',}}>
                    <Text className='date_title_left' style={{marginTop: '7px', height: '17px'}}>结束时间</Text>
                    <Text className='date_style_left' style={{marginTop: '12px'}}>{dateSelEnd}</Text>
                  </View>
                </Picker>
              </View>
              <View style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center'}}>
                 <Image
                   src={require('../../images/right.png')}
                   style={{width: '40px', height: '40px'}}
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
            <Text>日期</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>检测数量</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>阴性</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>阳性</Text>
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
          onClick={this.onHandleGetInspectionPage}
        >
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>2019-12-08</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>100</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>99</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>1</Text>
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
          onClick={this.onHandleGetInspectionPage}
        >
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>2019-12-07</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>85</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>80</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>5</Text>
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
          onClick={this.onHandleGetInspectionPage}

        >
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>2019-12-06</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>85</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>80</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>5</Text>
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
          onClick={this.onHandleGetInspectionPage}

        >
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>2019-12-05</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>85</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>80</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>5</Text>
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
          onClick={this.onHandleGetInspectionPage}

        >
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>2019-12-04</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>85</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>80</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>5</Text>
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
          onClick={this.onHandleGetInspectionPage}

        >
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>2019-12-03</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>85</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>80</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>5</Text>
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
          onClick={this.onHandleGetInspectionPage}
        >
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>2019-12-02</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>85</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>80</Text>
          </View>
          <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <Text>5</Text>
          </View>
        </View>
        <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '3px', width: '100%',}}>
          <Text />
        </View>

      </View>
    )
  }
}

export default Inspectionlist

