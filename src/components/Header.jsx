import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import PropTypes from 'prop-types';

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {

  const authLinks = (
          
      <Link to="#" onClick={logout} className="text-amber-500 btn border-amber-500 md:border-2 hover:bg-amber-500 hover:text-white transition ease-out duration-500">Logout</Link>
    );

const guestLinks = (
    <Fragment>
        <Link to="/login" className="text-amber-500 btn border-amber-500 md:border-2 hover:bg-amber-500 hover:text-white transition ease-out duration-500">Log in</Link>
        <Link to="/sign-up" className="text-amber-500 ml-2 btn border-amber-500 md:border-2 hover:bg-amber-500 hover:text-white transition ease-out duration-500">Sign up</Link>
    </Fragment>
);

    const [openNav, setOpenNav] = useState(false);
 
    useEffect(() => {
        window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6 sm:text-dark-500 lg:text-dark-500 hover:text-dark-700 text-black">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal hover:text-amber-500"
            
          >
            <Link to="/" className="flex items-center">
              Home
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal hover:text-amber-500"
          >
            <Link to="/listing" className="flex items-center">
              Listing
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal hover:text-amber-500"
          >
            <Link to="/about" className="flex items-center">
              About
            </Link>
          </Typography>
          

          {/* personalised */}

          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            // className="p-1 font-normal"
            className="flex justify-center md:justify-end "
          >
            { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
          </Typography>
        </ul>
      );
  return (
        <Navbar className=" mx-auto py-2 text-dark px-4 md:px-8 md:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          to="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link to="/"><span className="md:text-xl text-amber-500 sm:text-amber-500 lg:text-amber-500 font-semibold">Real estate</span></Link>
        </Typography>
        <div className="hidden md:block">{navList}</div>
        <IconButton
          variant="text"
          className=" ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
      </MobileNav>
    </Navbar>
    
  )
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);