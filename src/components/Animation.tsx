import { useRef } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import type { DotLottie } from '@lottiefiles/dotlottie-react'

export default function Animation() {
  const dotLottieRef = useRef<DotLottie | null>(null)

  return (
    <div className="w-64 h-64">
      <DotLottieReact
        src="/pulse.lottie"
        loop
        autoplay
        dotLottieRefCallback={(dotLottie) => {
          dotLottieRef.current = dotLottie
        }}
      />
    </div>
  )
}
