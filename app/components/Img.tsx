import clsx from 'clsx'
import Imgix from 'react-imgix'
import { useTheme } from '~/utils/theme-provider'

interface Props {
  className?: string
  width?: number
  height?: number
  darkAvailable?: boolean // this is not the most elegant way to do it, but I couldn't find a consistent way to just fall back if dark mode image wasn't available, both on Imgix and on self-hosted images (which could use fs, but was a bit ugly)
  src: string
  alt: string
}

const Img = ({
  className,
  alt,
  src,
  darkAvailable = false,
  ...otherProps
}: Props) => {
  const [theme] = useTheme()
  const fileExtension = src.split('.').pop()
  const imgIsSvg = fileExtension === 'svg' ? true : false
  const finalSrc =
    theme === 'dark' && darkAvailable
      ? src.substring(0, src.length - 4) + '-dark.' + fileExtension
      : src

  return (
    <div className={clsx('flex items-top justify-between', className)}>
      {/* We are self-hosting SVGs */}
      {imgIsSvg ? (
        <img
          className={clsx(className)}
          alt={alt}
          src={finalSrc}
          {...otherProps}
        />
      ) : (
        <Imgix
          className={clsx(className)}
          htmlAttributes={{
            alt: alt,
          }}
          src={finalSrc}
          {...otherProps}
        />
      )}
    </div>
  )
}
export { Img }
