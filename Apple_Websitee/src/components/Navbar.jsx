import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          <div className="nav-links-container" style={{ display: 'flex' }}>
            {navLists.map((nav) => (
              <div
                key={nav}
                className="nav-link"
                style={{
                  padding: '0 7px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  color: 'gray',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = 'gray'}
              >
                {nav}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-baseline gap-7 max-sm:justiy-end max-sm:flex-1">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
