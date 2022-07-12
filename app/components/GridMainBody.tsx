import clsx from 'clsx'

interface Props {
  className?: string
  children?: React.ReactNode
}

const GridMainBody = ({ className, children }: Props) => {
  return (
    <div
      className={clsx(
        'col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 md:col-start-3 md:col-end-11 xl:col-start-4 xl:col-end-10',
        className
      )}
    >
      {children}
    </div>
  )
}
export { GridMainBody }
