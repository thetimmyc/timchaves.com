import clsx from 'clsx'
import Imgix from 'react-imgix'

interface Props {
  className?: string
  width?: number
  height?: number
  src: string
  alt: string
}

const Img = ({ className, alt, src, ...otherProps }: Props) => {
  const fileExt = src.split('.').pop()
  const imgIsSvg = fileExt === 'svg' ? true : false

  return (
    <div className={clsx('flex items-top justify-between', className)}>
      {imgIsSvg ? (
        <img alt={alt} src={src} {...otherProps} />
      ) : (
        <Imgix
          htmlAttributes={{
            alt: alt,
          }}
          src={src}
          {...otherProps}
        />
      )}
    </div>
  )
}
export { Img }
