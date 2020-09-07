import React, {
  ClassAttributes,
  HTMLAttributes,
  MutableRefObject,
} from 'react';

export function createElementWithClassName<
  P extends HTMLAttributes<T>,
  T extends HTMLElement
>(element: keyof React.ReactHTML, className: string) {
  return React.forwardRef(
    (
      props: (ClassAttributes<T> & P) | null,
      ref: ((instance: T | null) => void) | MutableRefObject<T | null> | null
    ) =>
      React.createElement(element, {
        ...props,
        className: optionalJoinClassNames(className, props?.className),
        ref,
      })
  );
}

function optionalJoinClassNames(a: string, b?: string) {
  return !!b ? `${a} ${b}` : a;
}
