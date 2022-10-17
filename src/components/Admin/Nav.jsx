import React from 'react'
import {Link} from 'react-router-dom'
class Nav extends React.Component {
  logout() {
    localStorage.clear();
    window.location.href = '/';
} 
  sidebarToggle() {
    var sidebar = document.getElementById('sidebar');
   
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
}
 profileToggle() {
  var profileDropdown = document.getElementById('ProfileDropDown');
    if (profileDropdown.style.display === "block") {
        profileDropdown.style.display = "none";
    } else {
        profileDropdown.style.display = "block";
    }
}

render() {
  return (
    <div>
        <header className="bg-nav">
            <div className="flex justify-between">
                <div className="p-1 mx-3 inline-flex items-center">
                    <i className="fas fa-bars pr-2 text-black" onClick={this.sidebarToggle}></i>
                    <h1 className="text-black p-2">Real estate</h1>
                </div>
                <div className="p-1 flex flex-row items-center">
                    <img  onClick={this.profileToggle} className="inline-block h-8 w-8 rounded-full" src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png" alt="" />
                    <Link to="#" onClick={this.profileToggle}  className="text-white p-2 no-underline hidden md:block lg:block">Welcome</Link>
                    <div id="ProfileDropDown" className="rounded hidden shadow-md bg-white absolute pin-t mt-12 mr-1 pin-r">
                        <ul className="list-reset">
                          <li><hr className="border-t mx-2 border-grey-ligght" /></li>
                          <li><button  onClick={this.logout} className="no-underline px-4 py-2 block text-black hover:bg-grey-light">Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        
    </div>
  )
}
}

export default Nav