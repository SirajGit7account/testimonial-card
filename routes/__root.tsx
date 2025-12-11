import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(170deg, rgb(0, 0, 0) 0%, rgb(20, 19, 19) 70%, rgb(38, 38, 38) 100%)',
      }}
    >
      <Outlet />
    </div>
  ),
})


