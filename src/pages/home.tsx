import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import Text from "../components/Text";
import Modal from "../components/Modal";
import Input from "../components/Input";

interface IJob {
  id: number;
  name: string;
  price: number;
}

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [data, setData] = useState<IJob[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex text-3xl font-inter"> Добавление услуги</div>
        <div className="flex justify-left flex-col gap-10">
          <div>
            <Input label={"Название услуги"} />
          </div>
          <div>
            <Input label={"Стоимость"} />
          </div>
          <Button size="small" color="primary">
            Добавить
          </Button>
        </div>
      </Modal>

      <Text size="large" color="secondary">
        Главная
      </Text>

      <Button onClick={() => setModalOpen(true)} size="small" color="primary">
        Добавить
      </Button>

      <Link to={"/registration"} className="text-black">
        <Button size="small" color="primary" children="Зарегистрируйтесь" />
      </Link>

      <div className="grid grid-cols-3 gap-6">
        {" "}
        {data.map((job) => (
          <div className="flex flex-col gap-3 border-2 border-black p-3">
            <div>{job.name}</div>
            <div>{job.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
