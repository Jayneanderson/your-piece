interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image = (props: Props) => {
  return <img {...props} />;
};
