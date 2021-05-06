import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/HeaderComp/Header';
import Home from "./Components/HomeComp/home";
import Register from './Components/RegisterComp/Register';
import Login from './Components/LoginComp/Login';
import './App.css';
import React from "react";
import Footer from './Components/FooterComp/Footer';
import MyFpo from './Components/ServicesComp/MyFpoComp/MyFpo';
import  MyFarmMainComp from './Components/ServicesComp/MyFarmComp/MyFarmMainComp/MyFarmMainComp';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/myfpo" component={MyFpo}/>
          <Route path="/myfarm" component={MyFarmMainComp}/>
        </Switch>
        <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;