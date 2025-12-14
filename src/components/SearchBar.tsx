import { useState, useEffect } from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'

export default function SearchBar() {
  const [open, setOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [query, setQuery] = useState('')

  // Wanneer open verandert, start timer om input + XMark te laten verschijnen
  useEffect(() => {
    let timer: number
    if (open) {
      timer = setTimeout(() => setShowContent(true), 300) // 300ms = animatieduur
    } else {
      setShowContent(false)
    }
    return () => clearTimeout(timer)
  }, [open])

  return (
    <div className="relative w-full flex justify-end">
      <div
        className={`
          relative transition-all duration-500 ease-in-out
          ${
            open
              ? 'w-98 h-12 rounded-[50px] bg-white shadow-glow-pink'
              : 'w-12 h-12 rounded-full bg-important shadow-default'
          }
        `}
      >
        {/* Ronde knop + vergrootglas in gesloten state */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="
              absolute inset-0
              flex items-center justify-center
              rounded-full

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-important
              focus-visible:ring-offset-2
            "
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
          </button>
        )}

        {/* Input + XMark pas tonen na animatie */}
        {showContent && (
          <div className="flex items-center w-full h-full px-4 transition-opacity duration-300">
            <MagnifyingGlassIcon className="h-6 w-6 text-placeholder" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoeken..."
              className="flex-1 ml-2 outline-none bg-transparent text-body placeholder:text-placeholder "
            />
            <button
              onClick={() => {
                setOpen(false)
                setQuery('')
              }}
              className="
                ml-2
                rounded-full
                p-1

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-important
              "
            >
              <XMarkIcon className="h-6 w-6 text-placeholder ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
