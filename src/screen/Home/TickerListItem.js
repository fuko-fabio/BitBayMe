import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Thumbnail,
  Badge,
  Text,
  ListItem,
  Left,
  Right,
  Grid,
  Col,
  Row,
  Body
} from 'native-base';
import { tickerStream } from '../../bitBay/stream';
import { cryptoCurrencyName } from '../../config';
import { cryptoCurrencyLogo } from '../../img';
import Cryptocurrency from '../Cryptocurrency';

class TickerListItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      ask: '',
      bid: ''
    };
    this.streamSubcription = null;
  }

  componentDidMount () {
    const { cryptoCurrencyCode, fiatCurrencyCode } = this.props;
    this.streamSubcription = tickerStream(cryptoCurrencyCode, fiatCurrencyCode).subscribe(this.onDataReceived, this.onDataError);
  }

  componentWillUnmount () {
    if (this.streamSubcription) {
      this.streamSubcription.unsubscribe();
    }
  }

  render () {
    const { navigate, cryptoCurrencyCode, fiatCurrencyCode } = this.props;
    const { ask, bid, vwap } = this.state;
    const status = ((((ask + bid) / 2) - vwap) * 100) / vwap;
    const logo = cryptoCurrencyLogo[cryptoCurrencyCode.toLowerCase()];

    return (
      <ListItem onPress={() => navigate('Cryptocurrency', { cryptoCurrencyCode, fiatCurrencyCode })}>
        <Left style={{ maxWidth: 100 }}>
          <Thumbnail small source={logo} style={{ marginLeft: 5 }}/>
          <Grid>
            <Row>
              <Text style={{ fontSize: 10 }}>
                { cryptoCurrencyName[cryptoCurrencyCode] }
              </Text>
            </Row>
            <Row>
              {!isNaN(status) &&
                <Text style={{ fontSize: 10, color: status >= 0 ? 'green' : 'red' }}>
                  {status.toFixed(2)}%
                </Text>
              }
            </Row>
          </Grid>
        </Left>
        <Body>
          <Grid style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Col>
                <Text numberOfLines={1} ellipsizeMode="clip" style={{ textAlign: 'center', fontSize: 11, color: '#121212', backgroundColor: '#EEEEEE', padding: 8 }}>
                  { Number(ask).toFixed(2) }
                </Text>
            </Col>
            <Col>
                <Text numberOfLines={1} ellipsizeMode="clip" style={{ textAlign: 'center', fontSize: 11, color: '#121212', backgroundColor: '#EEEEEE', padding: 8 }}>
                  { Number(bid).toFixed(2) }
                </Text>
            </Col>
          </Grid>
        </Body>
        <Right style={{ maxWidth: 20 }}>
          <Text style={{ fontSize: 10 }}>{ fiatCurrencyCode }</Text>
        </Right>
      </ListItem>
    );
  }

  onDataReceived = (data) => {
    this.setState(data);
  };

  onDataError = (error) => {
    console.log(error);
  };
}

TickerListItem.propTypes = {
  navigate: PropTypes.func.isRequired,
  cryptoCurrencyCode: PropTypes.string.isRequired,
  fiatCurrencyCode: PropTypes.string.isRequired
};

export default TickerListItem;
