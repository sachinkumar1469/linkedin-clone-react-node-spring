import {connect} from "react-redux";
import {BrowserRouter,Routes,Route} from "react-router-dom";

// Local imports
import './app.scss';
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from './components/authentication/Login';
import Signup from './components/authentication/Singup';
import Network from "./pages/mynetwork/Network";
import Jobs from "./pages/jobs/Jobs";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="mynetwork" element={<Network/>}/>
            <Route path="jobs" element={<Jobs/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProp = (state)=>{
  return {state};
};

const mapDispatchToProp = (dispatch)=>{
  return {dispatch};
}

export default connect(mapStateToProp,mapDispatchToProp)(App);
