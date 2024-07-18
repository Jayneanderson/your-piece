import './title.css';

interface Props extends React.DetailsHTMLAttributes<HTMLHeadingElement> {}

export const Title = (props: Props) => {
  return <h1 {...props}></h1>;
};
