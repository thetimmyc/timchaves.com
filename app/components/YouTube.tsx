interface Props {
  url: string
}

const YouTube = ({ url }: Props) => {
  const v = new URL(url).searchParams.get('v')
  console.log('by hand', 'https://www.youtube.com/embed/zyyJF_rbaqg')
  console.log('bparsed', `https://www.youtube.com/embed/${v}`)
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${v}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
export { YouTube }
