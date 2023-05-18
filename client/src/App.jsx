import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import store from "./utils/store/store";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <Header />
      <div className='w-full h-screen px-16'>
        <Outlet />
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
