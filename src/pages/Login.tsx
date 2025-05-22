import { Helmet } from "react-helmet"
import { Button } from "../components/Button"
import { Link, useNavigate } from "react-router-dom"
import Input from "../components/Input"
import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios"

interface LoginErrors {
	email: string
	password: string
	server: string
}

const validateEmail = (value: string): boolean =>
	/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const Login = () => {
	const navigate = useNavigate()

	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [role, setRole] = useState<"admin" | "user">("user")

	const [errors, setErrors] = useState<LoginErrors>({
		email: "",
		password: "",
		server: "",
	})

	const handleInputChange =
		(setter: (v: string) => void) =>
		(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			setter(e.target.value)
		}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault()
		// сброс всех ошибок
		setErrors({ email: "", password: "", server: "" })

		const newErrors: Partial<LoginErrors> = {}

		if (!email.trim()) {
			newErrors.email = "Email обязателен"
		} else if (!validateEmail(email.trim())) {
			newErrors.email = "Неверный формат почты"
		}

		if (!password) {
			newErrors.password = "Пароль обязателен"
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors((prev) => ({ ...prev, ...newErrors }))
			return
		}

		try {
			const { data } = await axios.post(
				"http://localhost:3000/api/login",
				{ email, password, role },
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)

			localStorage.setItem("user", JSON.stringify(data.user))
			navigate("/profile")
		} catch (err: any) {
			const serverMsg =
				err.response?.data?.message ||
				"Не удалось выполнить вход. Попробуйте снова."
			setErrors((prev) => ({
				...prev,
				server: serverMsg,
			}))
		}
	}

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Вход в сервис QUICKY</title>
				<meta name="description" content="Quicky" />
				<meta
					name="keywords"
					content="вход quicky, вход в сервис quicky, подработка, работа, услуга, мастер"
				/>
			</Helmet>
			<div className="w-full h-screen flex justify-center items-center bg-amber-300">
				<form
					onSubmit={handleSubmit}
					className="w-full max-w-[40vw] p-6 rounded shadow-md"
				>
					<h1 className="text-2xl font-semibold mb-4">Вход в систему</h1>

					{errors.server && (
						<div className="mb-4 p-2 text-red-500 rounded text-sm">
							{errors.server}
						</div>
					)}

					<div className="flex flex-col gap-4">
						<div>
							<Input
								type="email"
								placeholder="Email"
								value={email}
								onChange={handleInputChange(setEmail)}
							/>
							{errors.email && (
								<div className="mt-1 text-red-600 text-sm">{errors.email}</div>
							)}
						</div>

						<div>
							<Input
								type="password"
								placeholder="Пароль"
								value={password}
								onChange={handleInputChange(setPassword)}
							/>
							{errors.password && (
								<div className="mt-1 text-red-600 text-sm">
									{errors.password}
								</div>
							)}
						</div>

						<select
							value={role}
							onChange={handleInputChange((v) =>
								setRole(v as "admin" | "user")
							)}
							className="border border-black rounded-xl p-2"
						>
							<option value="admin">Админ</option>
							<option value="user">Пользователь</option>
						</select>

						<Button size="large" color="primary">
							Войти
						</Button>

						<p className="text-sm text-gray-500">
							Нет аккаунта?{" "}
							<Link
								to="/registration"
								className="text-blue-500 hover:underline"
							>
								Зарегистрироваться
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
