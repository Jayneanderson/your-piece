interface Props
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Box = (props: Props) => {
  return <div {...props}></div>;
};
