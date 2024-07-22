interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: Props) => {
  return <input {...props} />;
};
