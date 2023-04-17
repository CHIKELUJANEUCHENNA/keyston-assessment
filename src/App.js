import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="bg-slate-50 h-screen w-full container m-auto p-2 rounded-3xl ">
      <Router>
        <div className="flex h-full">
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
