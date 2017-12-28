import {
  bitBay,
  defaultFiatCurrency,
  categories
} from './config';

const fetchAsync = async (url) => await (await fetch(url)).json();

const buildEndpointUrl = (cryptocurrency, method, fiatCurrency = defaultFiatCurrency) => (
  `${bitBay.publicApiUrl}${cryptocurrency}${fiatCurrency}/${method}.json`
);

export const fetchTrades = async (cryptocurrency, fiatCurrency = defaultFiatCurrency) => (
  fetchAsync(buildEndpointUrl(cryptocurrency, categories.trades, fiatCurrency))
);

export const fetchOrderbook = async (cryptocurrency, fiatCurrency = defaultFiatCurrency) => (
  fetchAsync(buildEndpointUrl(cryptocurrency, categories.orderbook, fiatCurrency))
);

export const fetchMarket = async (cryptocurrency, fiatCurrency = defaultFiatCurrency) => (
  fetchAsync(buildEndpointUrl(cryptocurrency, categories.market, fiatCurrency))
);

export const fetchTicker = async (cryptocurrency, fiatCurrency = defaultFiatCurrency) => (
  fetchAsync(buildEndpointUrl(cryptocurrency, categories.ticker, fiatCurrency))
);

export const fetchAll = async (cryptocurrency, fiatCurrency = defaultFiatCurrency) => (
  fetchAsync(buildEndpointUrl(cryptocurrency, categories.all, fiatCurrency))
);
