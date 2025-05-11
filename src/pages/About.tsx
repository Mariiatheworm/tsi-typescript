import { Helmet } from "react-helmet"

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Страница о сервисе QUICKY</title>
        <meta name='description' content='Quicky' />
        <meta
          name='keywords'
          content='о нас, о сервисе quicky, quicky, работа, подработка'
        />
      </Helmet>
      О нас
    </div>
  )
}

export default About
