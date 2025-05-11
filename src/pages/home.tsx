import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Link } from "react-router-dom"
import Text from "../components/Text"
import Modal from "../components/Modal"
import Input from "../components/Input"

interface IJob {
  id: number
  name: string
  price: number
}

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [data, setData] = useState<IJob[]>([])
  const [newJob, setNewJob] = useState<Omit<IJob, "id">>({
    name: "",
    price: 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data")
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const handleAddJob = async () => {
    try {

      const response = await fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      })

      const createdJob = await response.json()

      setData([...data, createdJob])

      setModalOpen(false)
      setNewJob({ name: "", price: 0 })
    } catch (error) {
      console.error("Error adding job:", error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewJob({
      ...newJob,
      [name]: name === "price" ? Number(value) : value,
    })
  }

  return (
    <div className='flex justify-center items-center flex-col gap-8'>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className='flex text-3xl font-inter'>Добавление услуги</div>
        <div className='flex justify-left flex-col gap-10'>
          <div>
            <Input
              label={"Название услуги"}
              name='name'
              value={newJob.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Input
              label={"Стоимость"}
              type='number'
              name='price'
              value={newJob.price}
              onChange={handleInputChange}
            />
          </div>
          <Button size='small' color='primary' onClick={handleAddJob}>
            Добавить
          </Button>
        </div>
      </Modal>

      <Text size='large' color='black'>
        QUICKY - сервис поиска подработки. Найдите мастера и получите услугу!
      </Text>

      <Button onClick={() => setModalOpen(true)} size='small' color='primary'>
        Добавить
      </Button>

      <Link to={"/registration"} className='text-black'>
        <Button size='small' color='primary' children='Зарегистрируйтесь' />
      </Link>

      <div className='grid grid-cols-3 gap-6'>
        {data.map(job => (
          <div
            key={job.id}
            className='flex flex-col gap-3 border-1 rounded-3xl border-black p-3'
          >
            <div>{job.name}</div>
            <div>{job.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
