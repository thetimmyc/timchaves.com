import clsx from 'clsx'
import { Img } from './Img'

interface Props {
  className?: string
  children?: React.ReactNode
}

const Project = ({ className, children }: Props) => {
  return (
    <div className={clsx('flex items-top justify-between', className)}>
      LAST THING???
      <Img />
      NEXT THING!!!!!!!!!!
      <div>hi</div>
      <div>there</div>
    </div>
  )
}
export { Project }
