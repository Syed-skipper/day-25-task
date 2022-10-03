import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Animation() {
  return (
    <div id="wrapper">
      {/* <!-- Sidebar --> */}
      <Sidebar />
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" class="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          {/* <!-- Topbar --> */}
          <Topbar />
          {/* <!-- End of Topbar --> */}
          {/* <!-- Begin Page Content --> */}
          <div class="container-fluid">
            {/* <!-- Page Heading --> */}
            <h1 class="h3 mb-1 text-gray-800">Animation Utilities</h1>
            <p class="mb-4">
              Bootstrap's default utility classes can be found on the official{" "}
              <a href="https://getbootstrap.com/docs">
                Bootstrap Documentation
              </a>{" "}
              page. The custom utilities below were created to extend this theme
              past the default utility classes built into Bootstrap's framework.
            </p>

            {/* <!-- Content Row --> */}
            <div class="row">
              {/* <!-- Grow In Utility --> */}
              <div class="col-lg-6">
                <div class="card position-relative">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Grow In Animation Utilty
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <code>.animated--grow-in</code>
                    </div>
                    <div class="small mb-1">Navbar Dropdown Example:</div>
                    <Navbar variant="light" bg="light" expand="lg">
                      <Container>
                        <Navbar.Brand>NavBar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-light-example" />
                        <Navbar.Collapse id="navbar-light-example">
                          <Nav className="ml-auto paddingLeft5" alignRight>
                            <NavDropdown
                              id="nav-dropdown-light-example"
                              title="Dropdown"
                              menuVariant="light"
                              alignRight
                            >
                              <NavDropdown.Item href="#action/3.1">
                                Action
                              </NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">
                                Another action
                              </NavDropdown.Item>

                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.3">
                                Something else here
                              </NavDropdown.Item>
                            </NavDropdown>
                          </Nav>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>
                    <br />

                    <p class="mb-0 small">
                      Note: This utility animates the CSS transform property,
                      meaning it will override any existing transforms on an
                      element being animated! In this theme, the grow in
                      animation is only being used on dropdowns within the
                      navbar.
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Fade In Utility --> */}
              <div class="col-lg-6">
                <div class="card position-relative">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Fade In Animation Utilty
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <code>.animated--fade-in</code>
                    </div>
                    <div class="small mb-1">Navbar Dropdown Example:</div>
                    <Navbar variant="light" bg="light" expand="lg">
                      <Container>
                        <Navbar.Brand>NavBar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-light-example" />
                        <Navbar.Collapse id="navbar-light-example">
                          <Nav className="ml-auto " alignRight>
                            <NavDropdown
                              id="nav-dropdown-light-example"
                              title="Dropdown"
                              menuVariant="light"
                              alignRight
                            >
                              <NavDropdown.Item href="#action/3.1">
                                Action
                              </NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">
                                Another action
                              </NavDropdown.Item>

                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.3">
                                Something else here
                              </NavDropdown.Item>
                            </NavDropdown>
                          </Nav>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar><br/>
                    <div class="small mb-1">Dropdown Button Example:</div>
                    <div class="dropdown mb-4">
                    <DropdownButton id="dropdown-basic-button" title="Dropdown">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
                    </div>
                    <p class="mb-0 small">
                      Note: This utility animates the CSS opacity property,
                      meaning it will override any existing opacity on an
                      element being animated!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- End of Main Content --> */}

        {/* <!-- Footer --> */}
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2020</span>
            </div>
          </div>
        </footer>
        {/* <!-- End of Footer --> */}
      </div>
      {/* <!-- End of Content Wrapper --> */}
    </div>
  );
}

export default Animation;
