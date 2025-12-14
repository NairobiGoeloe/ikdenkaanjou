import { Animation } from '../components'

export default function Status() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-background">
      <h1 className="text-4xl text-body font-bold mb-4">Status van signaal</h1>
      <p className="text-body text-center max-w-md">
        Verzonden, in wachtrij of verzenden mislukt.
      </p>
      {/* Lottie animatie */}
      <Animation />
    </div>
  )
}
