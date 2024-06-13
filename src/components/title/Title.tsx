interface TitleProps {
  size: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "5xl" | "6xl";
  children: string;
}

export const Title = (props: TitleProps) => {
  return (
    <div className="flex flex-col items-center">
      <h2
        className={`${
          props.size === "5xl"
            ? `lg:text-${props.size} text-3xl`
            : `text-${props.size}`
        }`}
      >
        {props.children}
      </h2>
      <div className="border-b-2  border-primary w-[90%]" />
    </div>
  );
};
