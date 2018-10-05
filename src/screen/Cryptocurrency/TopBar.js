import React from 'react';
import PropTypes from 'prop-types';
import {
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
    const { title, navigate } = this.props;

    return (
      <Header>
        <Left>
          <Button transparent onPress={() => navigate('Home')}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>{ title }</Title>
        </Body>
        <Right/>
      </Header>
    );
  }
}

TopBar.propTypes = {
  navigate: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default TopBar;