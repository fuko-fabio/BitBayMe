import React from 'react';
import { Text, ListItem, Grid, Col, H3 } from 'native-base';
import { tickerStream } from '../dataStream';

export default class CurrencyListItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      ask: '',
      bid: ''
    };
  }

  componentDidMount () {
    tickerStream(this.props.cryptoCurrencyCode).subscribe(data => {
      this.setState(data);
    });
  }

  render () {
    const { cryptoCurrencyCode } = this.props;
    const { ask, bid } = this.state;

    return (
      <ListItem>
        <Grid>
          <Col><H3>{ cryptoCurrencyCode }</H3></Col>
          <Col><Text>{ ask }</Text></Col>
          <Col><Text>{ bid }</Text></Col>
        </Grid>
      </ListItem>
    );
  }
}
