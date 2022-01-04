import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { coerceObservable } from './coerceObservable';

/**
 * This operator maps an Observable out of a static value or ObservableInput.
 *
 */
export function coerceObservableWith<T>(): OperatorFunction<
  Observable<T> | T,
  Observable<T>
> {
  return (o$: Observable<Observable<T> | T>) => map(coerceObservable)(o$);
}
