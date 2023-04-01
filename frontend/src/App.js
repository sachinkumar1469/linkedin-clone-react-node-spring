import {connect} from "react-redux";
import {BrowserRouter,Routes,Route} from "react-router-dom";

// Local imports
import './app.scss';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Login from './components/authentication/Login';
import Signup from './components/authentication/Singup';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
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
