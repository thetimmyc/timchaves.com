import { Link, useLocation } from '@remix-run/react'
import React, { useState } from 'react'
import { MenuIcon } from '~/icons/menu-icon'
import { NavLink } from './NavLink'
import OutsideClickHandler from 'react-outside-click-handler'

/**
 * Hook that alerts clicks outside of the passed ref
 */

const Nav = () => {
  const location = useLocation()
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
  const handleClickOutside = () => {
    if (mobileMenuVisible) {
      setMobileMenuVisible(false)
    }
  }

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        handleClickOutside()
      }}
    >
      <div
        className={`
          relative
          grid grid-cols-12 gap-4 
          items-center
          w-full xl:w-[1140px] 
          mx-auto px-5 md:px-8
          h-16 md:h-24 lg:h-28
          ${
            location.pathname === '/'
              ? null
              : `border-b md:border-b-0 border-background-3 dark:border-background-3-dark`
          }
          text-foreground-1 dark:text-foreground-1-dark`}
      >
        <div className="col-span-10 md:col-span-6">
          <h2 className="text-xl lg:text-2xl font-bold">
            <Link to="/" prefetch="intent">
              Tim Chaves
            </Link>
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block col-span-2 md:col-span-6 text-right">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/articles">Articles</NavLink>
        </div>

        {/* Mobile Menu */}
        <div
          className="col-span-2 md:hidden flex items-center ml-auto flex"
          onClick={() => {
            mobileMenuVisible === true
              ? setMobileMenuVisible(false)
              : setMobileMenuVisible(true)
          }}
        >
          <MenuIcon />
        </div>

        {mobileMenuVisible ? (
          <div
            onClick={() => {
              setMobileMenuVisible(false)
            }}
            className={`
              absolute 
              left-0 top-[63px] md:top-24 lg:top-28
              w-full 
              border-t border-background-3 dark:border-background-3-dark
              bg-background-1 dark:bg-background-1-dark`}
          >
            <NavLink to="/about">About</NavLink>
            <NavLink to="/articles">Articles</NavLink>
          </div>
        ) : null}
      </div>
    </OutsideClickHandler>
  )
}
export { Nav }
