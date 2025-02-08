import { Themecontext } from "@/Theme/Themestate";
import { useContext } from "react";
import Welcome from "./cms/user";

const Home: React.FC = () => {
  const data = useContext(Themecontext);
  return (
    <>
      <Welcome />
    </>
  )
}

export default Home;