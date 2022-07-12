import clsx from 'clsx'

interface Props {
  className?: string
  children?: React.ReactNode
}

const P = ({ className, children }: Props) => {
  return <p className={clsx(className, 'text-base sm:text-lg')}>{children}</p>
}
export { P }
