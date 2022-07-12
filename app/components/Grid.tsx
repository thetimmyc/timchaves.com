import clsx from 'clsx'

interface Props {
  className?: string
  children?: React.ReactNode
}

const Grid = ({ className, children }: Props) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-12 gap-4 mx-auto w-full xl:w-[1140px] my-8',
        className
      )}
    >
      {children}
    </div>
  )
}
export { Grid }
