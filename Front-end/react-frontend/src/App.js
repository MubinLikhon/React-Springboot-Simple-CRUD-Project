import React from 'react';
import logo from './logo.svg';
import './App.css';
//import {BrowserRouter as Router} from "react-router-dom";
//import {Routes, Route} from "react-router";


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';

function App() {


  return (
    <div>
      <Router>
             <HeaderComponent/>
              <div className="container">
                   <Switch>
                         <Route exact path= "/" component={ListStudentComponent}></Route>
                         <Route  path = "/students" component= {ListStudentComponent}></Route>
                         <Route  path = "/add-student" component={CreateStudentComponent}></Route>
                         <Route path= "/update-student/:id" component={UpdateStudentComponent}/>
                         <Route path= "/view-student/:id" component={ViewStudentComponent}/>
                         
                   
                   </Switch>
              </div>
              <FooterComponent/>
     </Router>
    </div>
  );
}

export default App;