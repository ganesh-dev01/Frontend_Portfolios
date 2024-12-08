import ThemeContext from "@/ThemeContext/ThemeContext";
import { useContext } from "react";

const Home: React.FC = () => {
  const data_theme = useContext<any>(ThemeContext);
  return (
    <>
      <h4>Home</h4>
    </>
  )
}

export default Home