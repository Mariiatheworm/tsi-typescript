import { ReactNode } from "react"

type SizeType = "small" | "medium" | "large"
type ColorType = "primary" | "secondary"

interface ITextProps {
  size?: SizeType
  color?: ColorType
  children?: ReactNode
}

const Text = (props: ITextProps) => {
  const { size = "small", color = "primary", children = "text" } = props
  const defaultClass = "w-full"

  const classes = {
    colors: {
      primary: "text-black",
      secondary: "text-white",
    },
    sizes: {
      small: "text-xs",
      medium: "text-xl",
      large: "text-3xl",
    },
  }

  return (
    <div
      className={
        defaultClass + " " + classes.sizes[size] + " " + classes.colors[color]
      }
    >
      {children}
    </div>
  )
}

export default Text
