import React from 'react';
import {
  Content,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Title,
  Body
} from 'native-base';

class TopBar extends React.Component {
  render () {
    const { navigate } = this.props;
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => navigate('DrawerOpen')}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>BitBayMe</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => navigate('TickerNew')}>
            <Icon name='add' />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default TopBar;
