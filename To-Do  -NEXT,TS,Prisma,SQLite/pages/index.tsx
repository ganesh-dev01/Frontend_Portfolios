import { ThemeContext } from "@/Theme/Themestate";
import { useContext } from "react";
import Welcome from "./Welcome";

const Home:React.FC=()=>{

  return(
    <div>
       <Welcome />
    </div>
  )
}

export default Home;