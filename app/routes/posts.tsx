import { Outlet } from '@remix-run/react'

const PostsLayout = () => (
  <div className="px-5 mx-auto w-full xl:w-[1140px] my-8 text-slate-900 dark:text-white">
    this is posts.tsx
    <Outlet />
  </div>
)

export default PostsLayout
