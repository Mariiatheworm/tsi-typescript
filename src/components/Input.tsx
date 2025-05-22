import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

const Input: FC<IInputProps> = ({ label = "", ...rest }) => {
	const [value, setValue] = useState("")

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<div className="flex flex-col gap-3 font-unbounded">
			{label}
			<input
				className="border border-black rounded-xl p-2"
				value={value}
				onChange={handleChange}
				{...rest}
			/>
		</div>
	)
}

export default Input
