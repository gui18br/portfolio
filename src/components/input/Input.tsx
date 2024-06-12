interface InputProps {
  title: string;
  type: string;
  value: string;
  onInputChange: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    props.onInputChange(newValue);
  };

  return (
    <div>
      <p>{props.title}</p>
      <input
        type={props.type}
        value={props.value}
        onChange={handleInputChange}
        className={`rounded-md p-2 flex items-center justify-center w-[50%] w-[300px] lg:w-[700px] h-12`}
      />
    </div>
  );
};
