import React from "react";
import About from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Courses from "./CoursesPage";
import ManageCoursepage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Courses" component={Courses}></Route>
        <Route path="/Course/:slug" component={ManageCoursepage}></Route>
        <Route path="/Course/" component={ManageCoursepage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}
export default App;
