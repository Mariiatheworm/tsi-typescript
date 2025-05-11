import Input from "../components/Input";

const Registration = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-10 min-h-screen bg-amber-300">
      <div className="flex text-3xl font-inter"> Регистрация</div>
      <div className="flex justify-left flex-col gap-10">
        <div>
          <Input label={"Введите имя пользователя"} />
        </div>
        <div>
          <Input label={"Введите пароль"} />
        </div>
        <div>
          <Input label={"Введите пароль еще раз"} />
        </div>
        <div>
          <Input label={"Введите почту"} />
        </div>
      </div>
    </div>
  );
};

export default Registration;
