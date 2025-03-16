import Bottom from "./Bottom";
import Categories from "./Categories";
import Destination from "./Destination";
import Feadback from "./Feadback";
import Home from "./Home";
import Trippackages from "./Trippackages";

const App: React.FC = () => {
    return (
        <div>
            <Home /> 
             <Categories />
            <Destination />
            <Trippackages />
            <Feadback />
            <Bottom />
        </div>
    )
}

export default App;