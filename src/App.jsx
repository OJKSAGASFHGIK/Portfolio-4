import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import HomeEnUs from './Home_en-us/HomeEnUs.jsx';
import HomePtBr from './Section_pt-br/HomePtBr.jsx';

function App() {
  return (
    <Router><Routes>
      <Route exact path="/" element={<HomeEnUs/>} />
      <Route exact path="/pt-br" element={<HomePtBr/>} />
    </Routes></Router>
  )
}

export default App
