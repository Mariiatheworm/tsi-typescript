import { Helmet } from "react-helmet"
import Input from "../components/Input"

const Registration = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-10 min-h-screen bg-amber-300'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Регистрация QUICKY</title>
        <meta name='description' content='Quicky' />
        <meta
          name='keywords'
          content='регистрация quicky, зарегистрироваться quicky, сервис, подработка, работа, услуга, мастер'
        />
      </Helmet>
      <div className='flex text-3xl font-unbounded'> Регистрация</div>
      <div className='flex justify-left flex-col gap-10'>
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
  )
}

export default Registration
