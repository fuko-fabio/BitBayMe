import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Left,
  Right,
  Button,
  Icon,
  Title,
  Body,
  Text
} from 'native-base';
import I18n from '../../i18n';

class TopBar extends React.Component {
  render () {
    const { navigate, onSave } = this.props;

    return (
      <Header>
        <Left>
          <Button transparent onPress={() => navigate('Home')}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>{I18n.t('screen.TickerNew.title')}</Title>
        </Body>
        <Right>
          <Button transparent onPress={onSave}>
            <Text>{I18n.t('screen.TickerNew.save')}</Text>
          </Button>
        </Right>
      </Header>
    );
  }
}

TopBar.propTypes = {
  navigate: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default TopBar;