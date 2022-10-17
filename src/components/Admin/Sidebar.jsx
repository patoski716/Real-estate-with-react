import React from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
  logout() {
    localStorage.clear();
    window.location.href = '/';
}
  render() {
    return (
        <aside id="sidebar" className="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">
                <ul className="list-reset flex flex-col  bg-white">
                    <li className=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <Link to="/dashboard"
                           className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i className="fas fa-tachometer-alt float-left mx-2"></i>
                            Listing
                            
                        </Link>
                    </li>

                    <li className=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <Link to="/admin/contact"
                           className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i className="fas fa-tachometer-alt float-left mx-2"></i>
                            Contact
                            
                        </Link>
                    </li>

                    <li className="w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <Link to="/admin/realtor"
                           className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i className="far fa-user float-left mx-2"></i>
                            Realtor
                        </Link>
                    </li>

                    <li className=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <button 
                           className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline" onClick={this.logout}>
                            <i className="fas fa-tachometer-alt float-left mx-2"></i>
                            Logout
                            
                        </button>
                    </li>
                </ul>
            </aside>
    
    )
  }
}
export default Sidebar
