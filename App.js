import React from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, List, ListItem, Grid, Col, H3 } from 'native-base';
import CurrencyListHeader from './components/CurrencyListHeader';
import CurrencyListItem from './components/CurrencyListItem';
import { cryptoCurrencyCode } from './config';

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>BitBayMe</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <CurrencyListHeader/>
            { Object.keys(cryptoCurrencyCode).map((code, index) => (
              <CurrencyListItem key={index} cryptoCurrencyCode={code}/>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
