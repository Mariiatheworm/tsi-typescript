
const Footer = () => {
  return (
    <div className="w-full h-[390px] bg-black flex flex-row">
      <div className="flex gap-20 w-[70%] m-auto margin-top: 100px">
        <div className="flex flex-col">
          <div className="text-2xl font-medium text-white">Сведения</div>
          <div className="flex items-start flex-col">
            <li className="text-white">О нас</li>
            <li className="text-white">Контакты</li>
            <li className="text-white">Справка</li>
          </div>
        </div>
        <div className="flex flex-col justify-start margin-top: 100px">
          <div className="text-2xl font-medium text-white text-left">
            Клиенты
          </div>
          <div className="flex items-start flex-col">
            <li className="text-white">Найти услугу</li>
            <li className="text-white">Просмотреть мастеров</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
