interface Props extends React.HtmlHTMLAttributes<HTMLHeadingElement> {}

export const Title = (props: Props) => {
  return <h1 {...props}></h1>;
};
