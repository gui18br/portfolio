interface ButtonProps {
  style: "transparent" | "elevation" | "border";
  children: string;
  type?: "button" | "submit" | "reset";

  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`w-36 h-10 rounded-md text-xl ${
        props.style === "elevation"
          ? "transition-all  duration-300 transform hover:-translate-y-1 hover:shadow-md bg-primary text-300"
          : props.style === "border"
          ? "border-primary border-2 text-primary hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
          : "transition-all duration-300 hover:bg-transparent hover:backdrop-blur-sm bg-primary text-300"
      }`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
