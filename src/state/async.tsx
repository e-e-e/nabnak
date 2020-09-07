import React, { ComponentType } from 'react';
import {
  isRecoilValue,
  RecoilState,
  useRecoilState,
  useRecoilValue,
} from 'recoil/dist';

type Empty = { type: 'empty' };
type Success<T> = { type: 'success'; value: T };
type Pending = { type: 'pending' };
type Failed<E> = { type: 'failed'; error: E };
export type AsyncValue<T, E = string> =
  | Empty
  | Success<T>
  | Pending
  | Failed<E>;

export const isSuccessful = (
  val: AsyncValue<unknown, unknown>
): val is Success<unknown> => val.type === 'success';

type CommonAwaitProps = {
  Placeholder?: ComponentType<unknown>;
  Error?: ComponentType<unknown>;
};
type InternalAwaitProps = {
  forValue: AsyncValue<any, any>;
} & CommonAwaitProps;

type RecoilAwaitProps = {
  forValue: RecoilState<AsyncValue<any, any>>;
} & CommonAwaitProps;

type AwaitProps = {
  forValue: AsyncValue<any, any> | RecoilState<AsyncValue<any, any>>;
} & CommonAwaitProps;

function InternalAwait({
  forValue,
  children,
  Placeholder,
  Error,
}: React.PropsWithChildren<InternalAwaitProps>) {
  switch (forValue.type) {
    case 'success':
      return <>{children}</>;
    case 'empty':
      return null;
    case 'pending':
      return !!Placeholder ? <Placeholder /> : <div>Pending</div>;
    case 'failed':
      return !!Error ? <Error /> : <div>Failed</div>;
  }
}

function InternalRecoilAwait(props: React.PropsWithChildren<RecoilAwaitProps>) {
  const value = useRecoilValue(props.forValue);
  return <InternalAwait {...props} forValue={value} />;
}

export function Await({
  forValue,
  children,
  Placeholder,
  Error,
}: React.PropsWithChildren<AwaitProps>) {
  return isRecoilValue(forValue) ? (
    <InternalRecoilAwait
      forValue={forValue}
      Placeholder={Placeholder}
      Error={Error}
      children={children}
    />
  ) : (
    <InternalAwait
      forValue={forValue}
      Placeholder={Placeholder}
      Error={Error}
      children={children}
    />
  );
}

export const useAsyncApiCall = <A extends any[], V, E = string>(
  action: (...args: A) => Promise<V>,
  atom: RecoilState<AsyncValue<V, E>>
) => {
  // how do we cancel this if the component unmounts or values change?
  const [value, setValue] = useRecoilState(atom);
  const cb = React.useCallback(
    async (...args: A) => {
      // if value is already pending should we cancel? how?
      setValue({ type: 'pending' });
      action(...args)
        .then((v) => {
          setValue({ type: 'success', value: v });
        })
        .catch((e) => {
          setValue({ type: 'failed', error: e });
        });
    },
    [action, setValue]
  );
  return cb;
};
