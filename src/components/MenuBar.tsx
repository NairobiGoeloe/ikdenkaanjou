import { useNavigate, useLocation } from 'react-router-dom'
import { UserIcon, HomeIcon, LightBulbIcon } from '@heroicons/react/24/solid'

export default function MenuBar() {
  const navigate = useNavigate()
  const location = useLocation() // voor active icon

  const links = [
    { path: '/login', icon: UserIcon },
    { path: '/', icon: HomeIcon },
    { path: '/message', icon: LightBulbIcon },
  ]

  return (
    <div
      className="fixed bottom-0 w-full max-w-[500px] h-[60px] flex justify-around items-center
                    bg-background shadow-glow-bright-blue"
    >
      {links.map((link) => {
        const Icon = link.icon
        const isActive = location.pathname === link.path

        return (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className=" flex items-center justify-center
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-important
            rounded-full"
          >
            <Icon
              className={`h-7 w-7 transition-colors ${
                isActive ? 'text-important' : 'text-primary'
              }`}
            />
          </button>
        )
      })}
    </div>
  )
}
