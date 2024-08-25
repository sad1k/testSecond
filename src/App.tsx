import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MainPage } from "pages/MainPage/MainPage";
import { Provider } from "react-redux";
import { store } from "lib/store";
import { IconContext } from "react-icons";
import { PersonPage } from "pages/PersonPage/PersonPage";

const path = process.env.REACT_APP_FOR_PATH;

const router = createBrowserRouter([
  {
    path: path + "/",
    element: <MainPage />,
  },
  {
    path: path + "/person/:personId",
    element: <PersonPage />,
  },
]);

function App() {
  return (
    <>
      <IconContext.Provider value={{}}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </IconContext.Provider>
    </>
  );
}

export default App;
