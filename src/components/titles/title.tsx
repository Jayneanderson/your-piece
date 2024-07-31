import { createElement } from 'react';

interface Props extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  size: '1' | '2' | '3' | '4' | '5';
}

export const Title = (props: Props): JSX.Element => {
  const tag = `h${props.size}` as keyof HTMLHeadingElement;
  return createElement(tag, props, props.children);
};
