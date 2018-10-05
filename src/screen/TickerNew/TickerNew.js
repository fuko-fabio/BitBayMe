import React from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Left,
  Right,
  Button,
  Icon,
  Title,
  Picker,
  Form,
  Toast
} from 'native-base';
import { cryptoCurrencyName, fiatCurrencyName } from '../../config';
import Store from '../../Store';
import TopBar from './TopBar';
import I18n from '../../i18n';

class TickerNew extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      cryptoCurrencyCode: null,
      fiatCurrencyCode: null
    };
  }

  save = () => {
    const { cryptoCurrencyCode, fiatCurrencyCode } = this.state;

    if (!cryptoCurrencyCode) {
      Toast.show({
        text: I18n.t('screen.TickerNew.cryptoCurrencyRequired'),
        position: 'bottom',
        type: 'danger'
      });
      return;
    }

    if (!fiatCurrencyCode) {
      Toast.show({
        text: I18n.t('screen.TickerNew.fiatCurrencyRequired'),
        position: 'bottom',
        type: 'danger'
      });
      return;
    }

    Store.addTicker({ cryptoCurrencyCode, fiatCurrencyCode }).then(() => {
      this.props.navigation.navigate('Home')
    });
  };

  pickerHeader = (title) => {
    return (backAction) => (
      <Header>
        <Left>
          <Button transparent onPress={backAction}>
            <Icon name="arrow-back"/>
          </Button>
        </Left>
        <Body style={{ flex: 3 }}>
          <Title>{ title }</Title>
        </Body>
        <Right />
      </Header>
    );
  };

  render () {
    const { navigate } = this.props.navigation;
    const cc = I18n.t('screen.TickerNew.cryptoCurrency');
    const fc = I18n.t('screen.TickerNew.fiatCurrency');

    return (
      <Container>
        <Content>
          <TopBar navigate={navigate} onSave={this.save}/>
          <Content>
          <Form>
            <Picker
              renderHeader={this.pickerHeader(cc)}
              mode="dropdown"
              placeholder={cc}
              selectedValue={this.state.cryptoCurrencyCode}
              onValueChange={value => this.setState({cryptoCurrencyCode: value})}>
              { Object.keys(cryptoCurrencyName).map(key => (
                <Picker.Item key={key} label={cryptoCurrencyName[key]} value={key} />
              ))}
            </Picker>
            <Picker
              renderHeader={this.pickerHeader(fc)}
              mode="dropdown"
              placeholder={fc}
              selectedValue={this.state.fiatCurrencyCode}
              onValueChange={value => this.setState({fiatCurrencyCode: value})}>
              { Object.keys(fiatCurrencyName).map(key => (
                <Picker.Item key={key} label={fiatCurrencyName[key]} value={key} />
              ))}
            </Picker>
          </Form>
          </Content>
        </Content>
      </Container>
    );
  }
}

export default TickerNew;