import { Observable } from 'rxjs';
import { fetchAll, fetchTicker } from './publicApi';

const DEFAULT_DELAY = 100;
const DEFAULT_UPDATE_INTERVAL = 10000;

export const allStream = (cryptoCurrencyCode, fiatCurrencyCode) => (
  Observable.timer(DEFAULT_DELAY, DEFAULT_UPDATE_INTERVAL).flatMap(() => (
    Observable.fromPromise(fetchAll(cryptoCurrencyCode, fiatCurrencyCode))
  ))
);

export const tickerStream = (cryptoCurrencyCode, fiatCurrencyCode) => (
  Observable.timer(DEFAULT_DELAY, DEFAULT_UPDATE_INTERVAL).flatMap(() => (
    Observable.fromPromise(fetchTicker(cryptoCurrencyCode, fiatCurrencyCode))
  ))
);
