
import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import { LinkContainer } from 'react-router-bootstrap';

import { CoursesContainer } from './courses/courses-container';
import { StudentsContainer } from './students/students-container';
import { TeachersContainer } from './teachers/teachers-container';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                Jiangren
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/courses">
                  <NavItem>Courses</NavItem>
                </LinkContainer>
                <LinkContainer to="/students">
                  <NavItem>Students</NavItem>
                </LinkContainer>
                <LinkContainer to="/teachers">
                  <NavItem>Teachers</NavItem>
                </LinkContainer>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Login
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={CoursesContainer} />
          <Route path="/courses" component={CoursesContainer} />
          <Route path="/students" component={StudentsContainer} />
          <Route path="/teachers" component={TeachersContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
