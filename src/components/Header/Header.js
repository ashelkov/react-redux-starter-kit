import React from 'react'
// components
import { IndexLink, Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { NavItem } from 'react-bootstrap'
// styles
import classes from './Header.scss'

export const Header = () => (
  <nav className='navbar navbar-default'>
    <div className='container'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle collapsed'
                data-toggle='collapse' data-target='#bs-example-navbar-collapse-2'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        <IndexLink to='/' className='navbar-brand'>OMS</IndexLink>
      </div>
      <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-2'>
        <ul className='nav navbar-nav'>
          <LinkContainer to='/' onlyActiveOnIndex>
            <NavItem>Home</NavItem>
          </LinkContainer>
          <LinkContainer to='/counter'>
            <NavItem>Counter</NavItem>
          </LinkContainer>
        </ul>
        <ul className='nav navbar-nav navbar-right'>
          <li><a href='#'>Link</a></li>
          <li className='dropdown'>
            <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'>
              Dropdown <span className='caret' />
            </a>
            <ul className='dropdown-menu' role='menu'>
              <li><a href='#'>Action</a></li>
              <li><a href='#'>Another action</a></li>
              <li><a href='#'>Something else here</a></li>
              <li className='divider' />
              <li><a href='#'>Separated link</a></li>
              <li className='divider' />
              <li><a href='#'>One more separated link</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
