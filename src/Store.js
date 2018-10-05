import { AsyncStorage } from 'react-native';
import { cryptoCurrencyCode, defaultFiatCurrencyCode } from './config';

export const appScoped = (key) => `@BitBayMe:${key}`;

const KEYS = {
  tickersList: appScoped('tickersList')
};

class Store {
  static getTickersList = async () => {
    try {
      const value = await AsyncStorage.getItem(KEYS.tickersList);
      if (value !== null){
        return JSON.parse(value);
      } else {
        return Store.populateInitialTickersList();
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  static persistTickersList = async (tickers) => {
    await AsyncStorage.setItem(KEYS.tickersList, JSON.stringify(tickers));
  };

  static addTicker = async (ticker) => {
    try {
      const list = await Store.getTickersList();
      list.push(ticker);
      await Store.persistTickersList(list);
    } catch (error) {
      console.log(error);
    }
  };

  static removeTickerAtIndex = async (index) => {
    try {
      const list = await Store.getTickersList();
      list.splice(index, 1);
      Store.persistTickersList(list);

      return list;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  static populateInitialTickersList = () => {
    const list = Object.keys(cryptoCurrencyCode).map(cryptoCurrencyCode => ({
      cryptoCurrencyCode,
      fiatCurrencyCode: defaultFiatCurrencyCode
    }));
    Store.persistTickersList(list);

    return list;
  };
}

export default Store;
