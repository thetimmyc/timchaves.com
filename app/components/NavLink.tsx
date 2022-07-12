import { Link } from '@remix-run/react'

type Props = {
  to: string
  children?: React.ReactNode
}

const NavLink = ({ to, children }: Props) => {
  return (
    <Link
      className={`
        block md:inline
        font-semibold text-sm 
        py-6 md:py-0 px-6 md:last-of-type:pr-0
        border-b md:border-b-0 border-background-3 dark:border-background-3-dark
        `}
      to={to}
      prefetch="intent"
    >
      {children}
    </Link>
  )
}
export { NavLink }
