import clsx from 'clsx'

interface Props {
  loading?: boolean
  className?: string
  children?: React.ReactNode
  variant?: null | 'secondary'
  size?: null | 'small'
  onClick?: React.MouseEventHandler
}

const Button = ({
  loading,
  className,
  variant,
  size,
  onClick,
  children,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        'font-semibold cursor-pointer whitespace-nowrap',
        variant === 'secondary'
          ? 'border border-foreground-4 dark:border-background-4-dark bg-background-1 dark:bg-background-1-dark text-foreground-3 dark:text-foreground-3-dark'
          : 'bg-teal-3 hover:bg-teal-2 active:bg-teal-4 text-white',
        size === 'small' ? 'text-xs px-2 h-8' : 'text-sm px-4 h-11'
      )}
    >
      {loading ? (
        <div className="flex items-center self-center">
          <svg
            className="animate-spin mx-auto h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
        children
      )}
    </button>
  )
}
export { Button }
