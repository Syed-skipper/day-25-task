import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Link } from 'react-router-dom';

function Error() {
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

          <div class="container-fluid">
            {/* <!-- 404 Error Text --> */}
            <div class="text-center">
              <div class="error mx-auto" data-text="404">
                404
              </div>
              <p class="lead text-gray-800 mb-5">Page Not Found</p>
              <p class="text-gray-500 mb-0">
                It looks like you found a glitch in the matrix...
              </p>
              <Link to="/dashboard">&larr; Back to Dashboard</Link>
            </div>
          </div>
        </div>
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2020</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Error;
