import { Transition } from 'react-transition-group'

type Props = {
  in: boolean
  children?: React.ReactNode
}
const duration = 100

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transition = {
  transitionStyles: {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
    unmounted: { opacity: 0 },
  } as { [key: string]: React.CSSProperties },
}

const Fade = ({ in: inProp, children }: Props) => (
  <Transition in={inProp} timeout={duration}>
    {(state: string) => (
      <div
        style={{
          ...defaultStyle,
          ...transition.transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
)

export { Fade }
