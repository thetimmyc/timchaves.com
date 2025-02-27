import { Img } from './Img'

interface Props {
  children?: React.ReactNode
}

const Sig = ({ children }: Props) => {
  return (
    <div className="mb-8">
      <p>{children ? children : 'Thanks so much for reading,'}</p>
      <Img
        src="https://timchaves.imgix.net/tim-sig.png"
        darkAvailable={true}
        alt="Tim signature"
        width={349}
        height={295}
        className="w-16"
      />
      {children}
    </div>
  )
}
export { Sig }
