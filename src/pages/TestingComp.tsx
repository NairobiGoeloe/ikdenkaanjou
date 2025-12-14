import {
  Button,
  IconButton,
  MenuBar,
  ColorSelectButton,
  SelectButton,
  SearchBar,
  TextInput,
} from '../components'
import { useNavigate } from 'react-router-dom'
import pulseSvg from '../assets/pulse.svg'

export default function Test() {
  const navigate = useNavigate()
  const colors = ['red', 'orange', 'yellow', 'green', 'blue'] as const

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Kader */}
      <div className="w-[430px] bg-background p-6 rounded-xl shadow-md space-y-6">
        <div className="space-y-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>

          <div className="flex gap-4">
            <IconButton onClick={() => navigate('/faq')} />
          </div>

          {/* ColorSelectButtons */}
          <div className="flex gap-4">
            {colors.map((color) => (
              <ColorSelectButton key={color} variant={color} />
            ))}
          </div>

          {/* SelectButtons */}
          <div className="flex gap-4">
            <SelectButton icon={pulseSvg} />
          </div>

          {/* SearchBar */}
          <div className="flex gap-4">
            <SearchBar />
          </div>

          {/* TextInput */}
          <div>
            <TextInput placeholder="Email" />
          </div>
        </div>
      </div>

      {/* MenuBar onderin pagina */}
      <MenuBar />
    </div>
  )
}
