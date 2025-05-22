import express from "express"
import cors from "cors"
import bcrypt from "bcrypt"

const app = express()
const port = 3000

// Validation
const phoneRegex = /^\+?\d{10,15}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

app.use(cors())
app.use(express.json())

let jobs = [
	{ id: 0, name: "Уборка коммерческого помещения", price: 5000 },
	{ id: 1, name: "Кейтеринг на мероприятии", price: 10000 },
	{ id: 2, name: "Присмотр за ребенком", price: 3500 },
	{ id: 3, name: "Эмалирование ванной", price: 2000 },
]

let users = []

// app.post("/api/login", (req, res) => {
// 	const { username, password } = req.body

// 	if (username === "admin" && password === "admin") {
// 		return res.status(200).json({ message: "Успешный вход" })
// 	}

// 	return res.status(401).json({ error: "Неверные учетные данные" })
// })

app.get("/api/data", (req, res) => {
	res.json(jobs)
})

app.post("/api/data", (req, res) => {
	const { name, price } = req.body

	if (!name || !price) {
		return res.status(400).json({ error: "Необходимо указать название и цену" })
	}

	const newJob = {
		id: jobs.length > 0 ? Math.max(...jobs.map((job) => job.id)) + 1 : 0,
		name,
		price: Number(price),
	}

	jobs.push(newJob)
	res.status(201).json(newJob)
})

app.post("/api/register", async (req, res) => {
	const { firstName, lastName, phone, email, role, password } = req.body

	if (!firstName || firstName.trim() === "") {
		return res.status(400).json({ message: "Имя обязательно" })
	}
	if (!lastName || lastName.trim() === "") {
		return res.status(400).json({ message: "Фамилия обязательна" })
	}
	if (!phone || !phoneRegex.test(phone)) {
		return res.status(400).json({ message: "Неверный формат телефона" })
	}
	if (!email || !emailRegex.test(email)) {
		return res.status(400).json({ message: "Неверный формат почты" })
	}
	if (role !== "admin" && role !== "user") {
		return res
			.status(400)
			.json({ message: "Роль должна быть 'admin' или 'user'" })
	}
	if (!password || password.length < 6) {
		return res
			.status(400)
			.json({ message: "Пароль обязателен и должен быть не менее 6 символов" })
	}

	if (users.find((u) => u.email === email)) {
		return res.status(400).json({ message: "Пользователь уже зарегистрирован" })
	}

	const passwordHash = await bcrypt.hash(password, 10)
	users.push({ firstName, lastName, phone, email, role, passwordHash })

	res.status(201).json({ message: "Регистрация прошла успешно" })
})

app.post("/api/login", async (req, res) => {
	const { email, password } = req.body

	if (!email || !emailRegex.test(email)) {
		return res.status(400).json({ message: "Неверный формат почты" })
	}
	if (!password || password.trim() === "") {
		return res.status(400).json({ message: "Пароль обязателен" })
	}

	const user = users.find((u) => u.email === email)
	if (!user) {
		return res.status(400).json({ message: "Пользователь не найден" })
	}

	const isMatch = await bcrypt.compare(password, user.passwordHash)
	if (!isMatch) {
		return res.status(400).json({ message: "Неверный пароль" })
	}

	res.json({
		message: "Авторизация прошла успешно",
		user: {
			firstName: user.firstName,
			lastName: user.lastName,
			phone: user.phone,
			email: user.email,
			role: user.role,
		},
	})
})

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})
