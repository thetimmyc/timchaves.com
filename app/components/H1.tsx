import clsx from 'clsx'

interface Props {
  className?: string
  children?: React.ReactNode
}

const H1 = ({ className, children }: Props) => {
  return (
    <h1 className={clsx('text-2xl md:text-3xl dark:text-white ', className)}>
      {children}
    </h1>
  )
}
export { H1 }
