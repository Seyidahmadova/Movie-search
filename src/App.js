import "./App.css";

import { SaveList } from "./components/SaveList/SaveList";
import { HomePage } from "./HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/collection" exact element={<SaveList />} />
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
