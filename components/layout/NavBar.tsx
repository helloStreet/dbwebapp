import React, { useState } from 'react';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Image from 'next/image';
import PageLink from './PageLink';
import AnchorLink from './AnchorLink';
import logo from '../../public/hello.webp';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    // <div className="nav-container" data-testid="navbar">
    //   <Navbar color="light" light expand="md">
    //     <Container>
    //       <NavbarBrand className="logo" />
    //       <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
    //       <Collapse isOpen={isOpen} navbar>
    //         <Nav className="mr-auto" navbar data-testid="navbar-items">
    //           <NavItem>
    //             <PageLink href="/" className="nav-link" testId="navbar-home">
    //               Home
    //             </PageLink>
    //           </NavItem>
    //           {user && (
    //             <>
    //               <NavItem>
    //                 <PageLink href="/csr" className="nav-link" testId="navbar-csr">
    //                   Client-side rendered page
    //                 </PageLink>
    //               </NavItem>
    //               <NavItem>
    //                 <PageLink href="/ssr" className="nav-link" testId="navbar-ssr">
    //                   Server-side rendered page
    //                 </PageLink>
    //               </NavItem>
    //               <NavItem>
    //                 <PageLink href="/dashboard/index" className="nav-link" testId="navbar-external">
    //                   Dashboard
    //                 </PageLink>
    //               </NavItem>
    //             </>
    //           )}
    //         </Nav>
    //         <Nav className="d-none d-md-block" navbar>
    //           {!isLoading && !user && (
    //             <NavItem id="qsLoginBtn">
    //               <AnchorLink
    //                 href="/api/auth/login"
    //                 className="btn btn-primary btn-margin"
    //                 tabIndex={0}
    //                 testId="navbar-login-desktop">
    //                 Log in
    //               </AnchorLink>
    //             </NavItem>
    //           )}
    //           {user && (
    //             <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
    //               <DropdownToggle nav caret id="profileDropDown">
    //                 <img
    //                   src={user.picture}
    //                   alt="Profile"
    //                   className="nav-user-profile rounded-circle"
    //                   width="50"
    //                   height="50"
    //                   decode="async"
    //                   data-testid="navbar-picture-desktop"
    //                 />
    //               </DropdownToggle>
    //               <DropdownMenu>
    //                 <DropdownItem header data-testid="navbar-user-desktop">
    //                   {user.name}
    //                 </DropdownItem>
    //                 <DropdownItem className="dropdown-profile" tag="span">
    //                   <PageLink href="/profile" icon="user" testId="navbar-profile-desktop">
    //                     Profile
    //                   </PageLink>
    //                 </DropdownItem>
    //                 <DropdownItem id="qsLogoutBtn">
    //                   <AnchorLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
    //                     Log out
    //                   </AnchorLink>
    //                 </DropdownItem>
    //               </DropdownMenu>
    //             </UncontrolledDropdown>
    //           )}
    //         </Nav>
    //         {!isLoading && !user && (
    //           <Nav className="d-md-none" navbar>
    //             <AnchorLink
    //               href="/api/auth/login"
    //               className="btn btn-primary btn-block"
    //               tabIndex={0}
    //               testId="navbar-login-mobile">
    //               Log in
    //             </AnchorLink>
    //           </Nav>
    //         )}
    //
    //       </Collapse>
    //     </Container>
    //   </Navbar>
    // </div>
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link href="/dashboard/index">Dashboard</Link>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <Link href="/" className="w-28 my-4 relative">
          <Image src={logo} alt="Hello"></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.picture} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        )}
        {!isLoading && !user && (
          <Link
            href="/api/auth/login"
            className="btn btn-primary btn-block"
            tabIndex={0}
            data-testId="navbar-login-mobile">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
