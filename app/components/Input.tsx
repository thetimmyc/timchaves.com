import clsx from 'clsx'

interface Props {
  className?: string
  type: string
  name: string
  defaultValue?: string
  placeholder?: string
  ariaInvalid?: string
  ariaErrorMessage?: string
  required?: boolean
}

const Input = ({ className, ...otherProps }: Props) => {
  return (
    <input
      className={clsx(
        className,
        'h-11 px-4 bg-transparent border border-background-4 dark:border-background-4-dark focus:border-slate-400 dark:focus:border-slate-300 dark:text-white transition'
      )}
      {...otherProps}
    />
  )
}
export { Input }
