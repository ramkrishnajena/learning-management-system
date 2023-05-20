import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import store from "./utils/store/store";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='w-full h-full'>
      <Provider store={store}>
        <Header />
        <div className='w-full h-auto'>
          <Outlet />
        </div>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
