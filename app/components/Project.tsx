import clsx from 'clsx'
import { Img } from './Img'

interface Props {
  className?: string
  imgSrc?: string
  imgAlt?: string
  title?: string
  dates?: string
  imgDarkAvailable?: boolean
  children?: React.ReactNode
}

const Project = ({
  className,
  imgSrc,
  imgAlt,
  imgDarkAvailable = true,
  title,
  dates,
  children,
}: Props) => {
  return (
    <div className="border-b pb-8 mb-8">
      <div
        className={clsx('flex items-center justify-between mb-8', className)}
      >
        {imgSrc ? (
          <Img
            darkAvailable={imgDarkAvailable}
            alt={imgAlt || ''}
            src={imgSrc}
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
