import { getColor } from '@tu-eins/core';
import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps extends PropsWithChildren {
  className?: string;
}

export function Button({ children, className }: ButtonProps) {
  const color = getColor();

  return <button className={`${className} color-${color}`}>{children}</button>;
}

export default Button;
