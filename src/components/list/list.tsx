export interface Props
  extends React.HtmlHTMLAttributes<HTMLUListElement | HTMLOListElement> {
  listtype: 'ordered' | 'unordered';
}

export const List = (props: Props) => {
  return (
    <>
      {props.listtype === 'ordered' ? (
        <ol {...props}></ol>
      ) : (
        <ul {...props}></ul>
      )}
    </>
  );
};
