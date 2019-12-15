import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text, Input, Image, Picker} from '@tarojs/components'
import {observer, inject} from '@tarojs/mobx'
import {AtButton, AtIcon, AtInputNumber, AtImagePicker, AtToast} from 'taro-ui'

import './sampleAdd.scss'


@inject('counterStore')
@observer
class Sampleadd extends Component {

  config = {
    navigationBarTitleText: '新增样品'
  }

  constructor(props) {
    super(props);
    this.state = {
      selector: ['农药残留', '甲醛', '水分含量', '硼砂', '硼砂', '二氧化硫'],
      selectorChecked: '农药残留',
      selectorUser: ['SC7-赵佳', 'A32-姚振邦', 'A29-张莉', 'A28-赵士献', '27-汪建英'],
      selectorCheckedUser: 'A32-姚振邦',
      selectorSample: ['腌制咸菜', '腌白菜', '菜心', '生菜', '青菜'],
      selectorCheckedSample: '菜心',
      dept: '实验小学',
      selectColor: ['#666666', '#299dff'],
      numValue: 0,
      files: [],
      open: false,
      text: ''
    }
  }

  onClickButton = () => {
    let name = '';
    if (this.state.selectColor === '#666666') {
      name = '固定摊位'
    } else {
      name = '流动摊位'
    }
    const text = `
    ${this.state.dept},
    ${this.state.selectorChecked},
    ${this.state.selectorCheckedUser},
    ${this.state.selectorCheckedSample},
    ${name},
    ${this.state.numValue}Kg,
    `;
    this.setState({
      open: true,
      text,
    })
  }

  onChangeProject = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  onChangeUser = e => {
    this.setState({
      selectorCheckedUser: this.state.selectorUser[e.detail.value]
    })
  }

  onChangeSample = e => {
    this.setState({
      selectorCheckedSample: this.state.selectorSample[e.detail.value]
    })
  }

  onChangeColor = (value) => {
    if (value === 1) {
      this.setState({
        selectColor: ['#299dff', '#666666']
      })
    }
    if (value === 2) {
      this.setState({
        selectColor: ['#666666', '#299dff']
      })
    }

  };

  onHandleChangeNumber = (value) => {
    this.setState({
      numValue: value
    })
  };

  onChangeImg(files) {
    this.setState({
      files
    })
  }

  onFail(mes) {
    console.log(mes)
  }


  render() {
    return (
      <View>
        <View style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
          <View style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor: 'rgba(127,164,235,1)', height: '20px', width: '2px',}}><Text/></View>
          </View>
          <View style={{flex: 9, fontSize: '14pt'}}>新增样品</View>
        </View>

        <View style={{margin: '15px'}}>


          <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40px'}}>
            <View style={{flex: 1, fontSize: '13pt', textAlign: 'right'}}>
              <Text>采样学校</Text>
            </View>
            <View style={{flex: 3, fontSize: '12pt', color: '#299dff'}}>
              <Input type='text' value={this.state.dept} focus style={{marginLeft: '15px',}} disabled/>
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '2px', width: '100%',}}>
            <Text/>
          </View>


          <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40px'}}>
            <View style={{flex: 1, fontSize: '13pt', textAlign: 'right'}}>
              <Text>检测项目</Text>
            </View>
            <View style={{flex: 3, fontSize: '12pt', color: '#299dff'}}>
              <Picker mode='selector' range={this.state.selector} onChange={this.onChangeProject}>
                <Input type='text' value={this.state.selectorChecked} focus style={{marginLeft: '15px',}} disabled/>
              </Picker>
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '2px', width: '100%',}}>
            <Text/>
          </View>

          <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40px'}}>
            <View style={{flex: 1, fontSize: '13pt', textAlign: 'right'}}>
              <Text>摊位类型</Text>
            </View>
            <View style={{flex: 3, fontSize: '12pt',}}>
              <View style={{display: 'flex'}}>
                <View style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <AtIcon value='check-circle' size='25' color={this.state.selectColor[0]}
                          onClick={() => this.onChangeColor(1)}/>
                </View>
                <View style={{flex: 1}}>
                  <View>流动摊位</View>
                </View>
                <View style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <AtIcon value='check-circle' size='25' color={this.state.selectColor[1]}
                          onClick={() => this.onChangeColor(2)}/>
                </View>
                <View style={{flex: 1}}>
                  <View>固定摊位</View>
                </View>
              </View>
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '2px', width: '100%',}}>
            <Text/>
          </View>


          <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40px'}}>
            <View style={{flex: 1, fontSize: '13pt', textAlign: 'right'}}>
              <Text>经营摊主</Text>
            </View>
            <View style={{flex: 3, fontSize: '12pt', color: '#299dff'}}>
              <Picker mode='selector' range={this.state.selectorUser} onChange={this.onChangeUser}>
                <Input type='text' value={this.state.selectorCheckedUser} focus style={{marginLeft: '15px',}} disabled/>
              </Picker>
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '2px', width: '100%',}}>
            <Text/>
          </View>


          <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40px'}}>
            <View style={{flex: 1, fontSize: '13pt', textAlign: 'right'}}>
              <Text>样品名称</Text>
            </View>
            <View style={{flex: 3, fontSize: '12pt', color: '#299dff'}}>
              <Picker mode='selector' range={this.state.selectorSample} onChange={this.onChangeSample}>
                <Input type='text' value={this.state.selectorCheckedSample} focus style={{marginLeft: '15px',}}
                       disabled/>
              </Picker>
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '2px', width: '100%',}}>
            <Text/>
          </View>


          <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40px'}}>
            <View style={{flex: 1, fontSize: '13pt', textAlign: 'right', marginLeft: '5px'}}>
              <Text>进货重量</Text>
            </View>
            <View style={{flex: 3, fontSize: '12pt', paddingLeft: '16px'}}>
              <AtInputNumber
                min={0}
                max={10}
                step={1}
                value={this.state.numValue}
                onChange={this.onHandleChangeNumber}
              />
              Kg
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '2px', width: '100%',}}>
            <Text/>
          </View>


          <View style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
            <View style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{backgroundColor: 'rgba(127,164,235,1)', height: '20px', width: '2px',}}><Text/></View>
            </View>
            <View style={{flex: 9, fontSize: '14pt'}}>采样图片</View>
          </View>

          <View style={{margin: '10px'}}>
            <AtImagePicker
              files={this.state.files}
              onChange={this.onChangeImg.bind(this)}
              onFail={this.onFail.bind(this)}
            />
          </View>
          <View style={{backgroundColor: 'rgba(244,244,244,1)', height: '2px', width: '100%',}}>
            <Text/>
          </View>


        </View>

        <View>
          <View style={{width: '90%', marginLeft: '5%'}}>
            <AtButton type='primary' size='normal' onClick={this.onClickButton}>提交</AtButton>
          </View>
        </View>

        <AtToast isOpened={this.state.open} text={this.state.text} onClose={()=>{this.setState({open:false})}}></AtToast>
      </View>
    )
  }
}

export default Sampleadd
