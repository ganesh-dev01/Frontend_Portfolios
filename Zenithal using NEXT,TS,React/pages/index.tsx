import ThemeContext from "@/ThemeContext/ThemeContext";
import { useContext } from "react";
import Home from "../pages/cms/Home";

const DefalutHome: React.FC = () => {
  const data_theme = useContext<any>(ThemeContext);
  return (
    <>
      <Home />
    </>
  )
}

export default DefalutHome