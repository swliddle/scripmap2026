import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import { ScripturesDataProvider } from "./context/ScripturesDataProvider";

function BookComponent() {
    return <div>Some book</div>;
}

function ChapterComponent() {
    return <div>Some chapter</div>;
}

function ErrorPage() {
    return <div>There was a routing error.</div>;
}

function VolumesList() {
    return <div>VolumesList</div>;
}

function App() {
    const router = createBrowserRouter([
        {
            path: "*",
            element: <MainPage />,
            errorElement: <ErrorPage />,
            children: [
                { path: "", element: <VolumesList /> },
                { path: ":volumeId", element: <VolumesList /> },
                { path: ":volumeId/:bookId", element: <BookComponent /> },
                { path: ":volumeId/:bookId/:chapter", element: <ChapterComponent /> }
            ]
        }
    ]);

    return (
        <ScripturesDataProvider>
            <RouterProvider router={router} />
        </ScripturesDataProvider>
    );
}

export default App;
