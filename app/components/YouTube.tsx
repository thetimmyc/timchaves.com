interface Props {
  url: string
}

const YouTube = ({ url }: Props) => {
  const v = new URL(url).searchParams.get('v')
  return (
    // https://stackoverflow.com/a/54924505/405709
    <div className="relative h-0 pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
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
