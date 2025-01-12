import Header from "./Components/Header"
import styles from '@/styles/Components_styles/Header.module.css'
import Home from "./Home"
import Abouts from "./Abouts"

const Portfolio: React.FC = () => {
  return (
    <div className='main'>
      <Header />

      <div className="main_content">


        <Home />

        <Abouts />

      </div>

    </div>
  )
}

export default Portfolio