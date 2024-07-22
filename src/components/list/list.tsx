export interface Props
  extends React.HtmlHTMLAttributes<HTMLUListElement | HTMLOListElement> {
  listType: 'ordered' | 'unordered';
}

export const List = (props: Props) => {
  return (
    <>
      {props.listType === 'ordered' ? (
        <ol {...props}></ol>
      ) : (
        <ul {...props}></ul>
      )}
    </>
  );
};
