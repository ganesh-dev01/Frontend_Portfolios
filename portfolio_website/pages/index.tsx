import Header from "./Components/Header"
import styles from '@/styles/Components_styles/Header.module.css'
import Home from "./Home"
import Abouts from "./Abouts"
import Projects from "./Projects"
import Contact from "./Contact"

const Portfolio: React.FC = () => {
  return (
    <div className='main'>
      <Header />

      <div className="main_content">


        <Home />

        <Abouts />

        <Projects />

        <Contact />

      </div>

    </div>
  )
}

export default Portfolio