import clsx from 'clsx'
import { Img } from './Img'

interface Props {
  className?: string
  imgSrc?: string
  imgAlt?: string
  imgDimensions?: {
    width: number
    height: number
  }
  imgClassName?: string
  title?: string
  dates?: string
  imgDarkAvailable?: boolean
  children?: React.ReactNode
}

const Project = ({
  className,
  imgSrc,
  imgAlt,
  imgDimensions,
  imgDarkAvailable = true,
  imgClassName,
  title,
  dates,
  children,
}: Props) => {
  return (
    <div className="border-b border-background-3 last:border-0 dark:border-background-3-dark pb-8 mb-8">
      <div
        className={clsx('flex items-center justify-between mb-8', className)}
      >
        {imgSrc ? (
          <Img
            className={imgClassName}
            darkAvailable={imgDarkAvailable}
            alt={imgAlt || ''}
            src={imgSrc}
            width={imgDimensions?.width}
            height={imgDimensions?.height}
          />
        ) : null}
        {title ? <div className="text-lg font-bold">{title}</div> : null}
        <div className="text-sm font-bold">{dates}</div>
      </div>
      <div>{children}</div>
    </div>
  )
}
export { Project }
