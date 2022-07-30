import clsx from 'clsx'

interface Props {
  size?: 'small' | 'base' | 'large'
  className?: string
  children?: React.ReactNode
}

const P = ({ className, size = 'base', children }: Props) => {
  const classSet = {
    small: 'text-sm sm:text-base',
    base: 'text-base sm:text-lg',
    large: 'text-lg sm:text-xl tracking-wide',
  }

  return (
    <p
      className={clsx(classSet[size], 'dark:text-foreground-1-dark', className)}
    >
      {children}
    </p>
  )
}
export { P }
