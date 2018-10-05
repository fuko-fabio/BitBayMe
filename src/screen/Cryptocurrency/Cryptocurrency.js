import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Container, Content, List, Text } from 'native-base';
import { allStream } from '../../bitBay/stream';
import TopBar from './TopBar';

class Cryptocurrency extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.streamSubcription = null;
  }

  componentDidMount () {
    const { cryptoCurrencyCode, fiatCurrencyCode } = this.props.navigation.state.params;
    this.streamSubcription = allStream(cryptoCurrencyCode, fiatCurrencyCode).subscribe(this.onDataReceived, this.onDataError);
  }

  componentWillUnmount () {
    if (this.streamSubcription) {
      this.streamSubcription.unsubscribe();
    }
  }

  onDataReceived = (data) => {
    this.setState(data);
  };

  onDataError = (error) => {
    console.log(error);
  };

  render () {
    const { navigate, state: { params: { cryptoCurrencyCode, fiatCurrencyCode } } } = this.props.navigation;

    return (
      <Container>
        <TopBar navigate={navigate} title={`${cryptoCurrencyCode}/${fiatCurrencyCode}`}/>
        <Content>
          <Text>{JSON.stringify(this.state)}</Text>
        </Content>
      </Container>
    );
  }
}

TopBar.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Cryptocurrency;
