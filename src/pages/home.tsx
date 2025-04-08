import React, { useEffect, useState } from "react";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
import Text from "../components/text";

const Home = () => {
  const [data, setData] = useState<{ message: string; title: string } | null>(
    null
  );

  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await fetch("http://localhost:5000/api/data");
        const result = await response.json();
        setData(result);

      }
      catch (error) {

        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <Text size="large" color="secondary">
        Главная
      </Text>
      +
      <Link to={"/registration"} className="text-black">
        <Button size="small" color="primary" children="Зарегистрируйтесь" />
      </Link>
    </div>
  );
};

export default Home;
