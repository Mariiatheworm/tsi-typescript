import { ReactNode } from "react";

type SizeType = "small"|"medium"|"large"
type ColorType = "primary"|"secondary"

interface ITextProps {
  size: SizeType;
  color: ColorType;
  children: ReactNode;
}

const Text = (props: ITextProps) => {
  const { size = "small", color = "primary", children = "text" } = props;
  const defaultClass =
    "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2";

  const classes = {
    colors: {
      primary: "text-red-500",
      secondary: "text-white",
    },
    sizes: {
      small: "text-xs",
      medium: "text-xl",
      large: "text-3xl",
    },
  };

  return (
    <div
      className={
        defaultClass + " " + classes.sizes[size] + " " + classes.colors[color]
      }
    >
      {children}
    </div>
  );
};

export default Text;
