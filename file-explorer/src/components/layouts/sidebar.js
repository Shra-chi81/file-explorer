import {React} from 'react';

function Sidebar(){

    return(
        <>
         <div>
            <div className="container-fluid p-0 d-flex h-100 bg-Color ">
                    <div id="bdSidebar" 
                        className="d-flex flex-column sidebar
                                flex-shrink-0 
                                p-3 
                                text-white offcanvas-md offcanvas-start">
                        <a href="#" 
                        className="navbar-brand">
                        </a>
                        <ul className="mynav nav nav-pills flex-column mb-auto">
                            <li className="nav-item mb-1">
                                <a href="#">
                                    <i className="fa-regular fa-user"></i>
                                    Profile
                                </a>
                            </li>

                            <li className="nav-item mb-1">
                                <a href="#">
                                    <i className="fa-regular fa-bookmark"></i>
                                    Saved Articles
                                    <span className="notification-badge">5</span>
                                </a>
                            </li>
                            <li className="nav-item mb-1">
                                <a href="#">
                                    <i className="fa-regular fa-newspaper"></i>
                                    Articles
                                </a>
                            </li>
                            <li className="nav-item mb-1">
                                <a href="#">
                                    <i className="fa-solid fa-archway"></i>
                                    Institutions
                                </a>
                            </li>
                            <li className="nav-item mb-1">
                                <a href="#">
                                    <i className="fa-solid fa-graduation-cap"></i>
                                    Organizations
                                </a>
                            </li>

                            <li className="sidebar-item  nav-item mb-1">
                                <a href="#" 
                                className="sidebar-link collapsed" 
                                data-bs-toggle="collapse"
                                data-bs-target="#settings"
                                aria-expanded="false"
                                aria-controls="settings">
                                    <i className="fas fa-cog pe-2"></i>
                                    <span className="topic">Settings </span>
                                </a>
                                <ul id="settings" 
                                    className="sidebar-dropdown list-unstyled collapse" 
                                    data-bs-parent="#sidebar">
                                    <li className="sidebar-item">
                                        <a href="#" className="sidebar-link">
                                            <i className="fas fa-sign-in-alt pe-2"></i>
                                            <span className="topic"> Login</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a href="#" className="sidebar-link">
                                            <i className="fas fa-user-plus pe-2"></i>
                                            <span className="topic">Register</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a href="#" className="sidebar-link">
                                            <i className="fas fa-sign-out-alt pe-2"></i>
                                            <span className="topic">Log Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <hr/>
                    </div>

                    <div className="bg-light flex-fill">
                        <div className="p-2 d-md-none d-flex text-white bg-Color">
                            <a href="#" className="text-white" 
                            data-bs-toggle="offcanvas"
                            data-bs-target="#bdSidebar">
                                <i className="fa-solid fa-bars"></i>
                            </a>
                            <span className="ms-3">GFG Portal</span>
                        </div>
                        <div className="p-4" >
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <i className="fa-solid fa-house"></i>
                                    </li>
                                    <li className="breadcrumb-item">Learning Content</li>
                                    <li className="breadcrumb-item">Next Page</li>
                                </ol>
                            </nav>

                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <p>Page content goes here</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
         </div>
        </>
    )

}
export default Sidebar;