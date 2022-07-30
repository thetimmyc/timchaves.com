import clsx from 'clsx'

interface Props {
  url?: string
}

const Tweet = ({ url }: Props) => {
  return (
    <div>
      <blockquote className="twitter-tweet">
        <a href={url}>Read the Tweet</a>
      </blockquote>{' '}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </div>
  )
}
export { Tweet }
