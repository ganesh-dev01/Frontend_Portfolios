import ThemeContext from "@/Theme/Themestate"
import { useContext } from "react"
import SignIn from "./auth/signin";
import Dashboard from "./cms/user/dashboard";

const Home: React.FC = () => {
  const data = useContext(ThemeContext);
  return (
    <>
      <SignIn />
      {/* <Dashboard /> */}
    </>
  )
}
export default Home