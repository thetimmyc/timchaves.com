function MenuIcon({
  size = 24,
  className = 'fill-slate-900 dark:fill-white',
}: { size?: number; className?: string } = {}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
    </svg>
  )
}

export { MenuIcon }
