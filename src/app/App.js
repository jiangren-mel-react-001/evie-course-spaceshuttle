
import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { LinkContainer } from 'react-router-bootstrap';

import { CourseContainer } from './courses/CourseContainer';
import { StudentContainer } from './students/StudentContainer';
import { TeacherContainer } from './teachers/TeacherContainer';

import CourseDetail from './courses/CourseDetail';
import CourseEdit from './courses/CourseEdit';
import CourseCreate from './courses/CourseCreate';

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

          <Switch>
            <Route exact path="/" component={CourseContainer} />
            <Route path="/courses" render={props => <CourseContainer {...props} />} />
            <Route path="/students" component={StudentContainer} />
            <Route path="/teachers" component={TeacherContainer} />

            <Route exact path="/courses/create" render={
                    ({ history }) =><CourseCreate history={history} />
            } />
            <Route exact path="/courses/detail" render={
                ({ location, history }) => <CourseDetail detail={location.state.detail}
                history={history}/>
            }/>
            <Route exact path="/courses/edit" render={
                ({ location, history }) => <CourseEdit detail={location.state.detail} history={history} />
            }/>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
