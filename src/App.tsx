// import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import  {Provider} from "react-redux";
import "./App.css";
import store from "./store/Store.ts";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
          <BrowserRouter>
              <AppRouter />
          </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
