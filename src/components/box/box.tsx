import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Box = (props: Props) => {
  return <div {...props}></div>;
};
