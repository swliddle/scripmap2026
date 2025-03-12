import "./App.css";
import MainPage from "./components/MainPage";
import { useFetchScripturesData } from "./ServerApi";

function App() {
    const { books, isLoading, volumes } = useFetchScripturesData();

    console.log(books, volumes);
    /*
     * Components we may want:
     *     Nav bar (header)
     *     Scriptures Navigation (left panel)
     *     Map
     */
    return <MainPage isLoading={isLoading} />;
}

export default App;
