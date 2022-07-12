import clsx from 'clsx'

interface Props {
  className?: string
  children?: React.ReactNode
}

const Error = ({ className, children }: Props) => {
  return (
    <p
      className={clsx(
        className,
        'text-sm mt-2 text-rose-500 dark:text-rose-300'
      )}
    >
      {children}
    </p>
  )
}
export { Error }
