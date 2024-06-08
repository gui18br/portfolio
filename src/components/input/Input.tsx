interface InputProps {
  title: string;
  type: string;
}

export const Input = (props: InputProps) => {
  return (
    <div>
      <p>{props.title}</p>
      <input
        type={props.type}
        className={`rounded-md p-2 flex items-center justify-center w-[700px] h-12`}
      />
    </div>
  );
};
