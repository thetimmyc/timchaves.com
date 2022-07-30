import { Outlet } from '@remix-run/react'
const Articles = () => <Outlet />

export default Articles
// This file is necessary but seems redundant to me. If this isn't here, then /articles route does not render /articles/index.tsx
