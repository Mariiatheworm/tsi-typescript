const Footer = () => {
  return (
    <div className='w-full h-[390px] bg-black flex flex-row justify-between lg:px-[300px] px-8 py-6'>
      <div className='flex gap-20'>
        <div className='flex flex-col'>
          <div className='text-2xl font-medium text-white'>Сведения</div>
          <div className='flex items-start flex-col'>
            <li className='text-white'>О нас</li>
            <li className='text-white'>Контакты</li>
            <li className='text-white'>Справка</li>
          </div>
        </div>
        <div className='flex flex-col justify-start margin-top: 100px'>
          <div className='text-2xl font-medium text-white text-left'>
            Клиенты
          </div>
          <div className='flex items-start flex-col'>
            <li className='text-white'>Найти услугу</li>
            <li className='text-white'>Просмотреть мастеров</li>
          </div>
        </div>
      </div>{" "}
      <div className='text-2xl font-medium text-white flex justify-end'>
        QUICKY-сервис
      </div>
    </div>
  )
}

export default Footer
