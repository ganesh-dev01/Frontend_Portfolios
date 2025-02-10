import ThemeContext from "@/Theme/Themestate"
import { useContext } from "react"

const Home: React.FC = () => {
  const data=useContext(ThemeContext);
  return (
    <>
      <h4>{data?.theme}</h4>
    
    </>
  )
}
export default Home