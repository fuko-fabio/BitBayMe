import { Observable } from 'rxjs';
import { fetchTicker } from './bitBayPublicApi';

export const tickerStream = (cryptoCurrencyCode) => Observable.timer(100, 10000).flatMap(() => (
  Observable.fromPromise(fetchTicker(cryptoCurrencyCode))
));
