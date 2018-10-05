const bitBayPublicApiUrl = 'https://bitbay.net/API/Public/';

const categories = {
  trades: 'trades',
  orderbook: 'orderbook',
  market: 'market',
  ticker: 'ticker',
  all: 'all'
};

const fetchAsync = async (url) => await (await fetch(url)).json();

const buildEndpointUrl = (cryptoCurrencyCode, method, fiatCurrencyCode) => (
  `${bitBayPublicApiUrl}${cryptoCurrencyCode}${fiatCurrencyCode}/${method}.json`
);

export const fetchTrades = async (cryptoCurrencyCode, fiatCurrency) => (
  fetchAsync(buildEndpointUrl(cryptoCurrencyCode, categories.trades, fiatCurrency))
);

export const fetchOrderbook = async (cryptoCurrencyCode, fiatCurrency) => (
  fetchAsync(buildEndpointUrl(cryptoCurrencyCode, categories.orderbook, fiatCurrency))
);

export const fetchMarket = async (cryptoCurrencyCode, fiatCurrency) => (
  fetchAsync(buildEndpointUrl(cryptoCurrencyCode, categories.market, fiatCurrency))
);

export const fetchTicker = async (cryptoCurrencyCode, fiatCurrency) => (
  fetchAsync(buildEndpointUrl(cryptoCurrencyCode, categories.ticker, fiatCurrency))
);

export const fetchAll = async (cryptoCurrencyCode, fiatCurrency) => (
  fetchAsync(buildEndpointUrl(cryptoCurrencyCode, categories.all, fiatCurrency))
);
