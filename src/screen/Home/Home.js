import React from 'react';
import { ListView } from 'react-native';
import { Icon, Button, Container, Content, List } from 'native-base';
import Cryptocurrency from '../Cryptocurrency';
import TickerListItem from './TickerListItem';
import TopBar from './TopBar';
import Store from '../../Store';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      listViewData: []
    };
  }

  componentWillMount () {
    Store.getTickersList().then(data => {
      this.setState({
        listViewData: data
      });
    });
  }

  deleteRow (secId, rowId, rowMap) {
    Store.removeTickerAtIndex(rowId).then(newData => {
      rowMap[`${secId}${rowId}`].props.closeRow();
      this.setState({
        listViewData: newData
      });
    });
  }

  render () {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <TopBar navigate={navigate}/>
        <Content>
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <TickerListItem
                navigate={navigate}
                cryptoCurrencyCode={data.cryptoCurrencyCode}
                fiatCurrencyCode={data.fiatCurrencyCode}
              />
            }
            renderLeftHiddenRow={data =>
              <Button full onPress={() => navigate('Cryptocurrency', data)}>
                <Icon active name="information-circle" />
              </Button>
            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={() => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>
            }
            leftOpenValue={75}
            rightOpenValue={-75}
            enableEmptySections={true}
          />
        </Content>
      </Container>
    );
  }
}

export default Home;
