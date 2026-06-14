import { NavLink } from 'react-router-dom'

export function Navbar() {
  const navItems = [
    { to: '/', label: 'Posiciones', icon: '🏆' },
    { to: '/calendario', label: 'Calendario', icon: '📅' },
    { to: '/selecciones', label: 'Selecciones', icon: '👥' },
    //{ to: '/cargar-predicciones', label: 'Cargar', icon: '📤' },
  ]

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-1 md:space-x-8 py-4 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex-1 md:flex-none px-2 md:px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-1 md:gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="text-lg md:text-base">{item.icon}</span>
              <span className="hidden sm:inline text-sm md:text-base">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}