import React from 'react';
import { Text, ListItem, Grid, Col } from 'native-base';

export default class CurrencyListHeader extends React.Component {
  render () {
    return (
      <ListItem itemHeader first>
        <Grid>
          <Col><Text>Currency</Text></Col>
          <Col><Text>Buy</Text></Col>
          <Col><Text>Sell</Text></Col>
        </Grid>
      </ListItem>
    );
  }
}
