export default function Test() {
  return (
    <div className="p-8 space-y-8">
      {/* FONTS */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Font test</h2>

        <p className="font-sans font-extralight">Nunito 200 – Extra Light</p>
        <p className="font-sans font-light">Nunito 300 – Light</p>
        <p className="font-sans font-normal">Nunito 400 – Normal</p>
        <p className="font-sans font-medium">Nunito 500 – Medium</p>
        <p className="font-sans font-semibold">Nunito 600 – SemiBold</p>
        <p className="font-sans font-bold">Nunito 700 – Bold</p>
        <p className="font-sans font-extrabold">Nunito 800 – ExtraBold</p>
        <p className="font-sans font-black">Nunito 900 – Black</p>
      </section>

      <hr className="my-6" />

      {/* KLEUREN */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Kleur test</h2>

        <div className="grid grid-cols-2 gap-4 max-w-lg">
          <div className="p-4 bg-primary text-white rounded-lg">
            primary (#3E7C9E)
          </div>
          <div className="p-4 bg-secondary text-black rounded-lg">
            secondary (#C0E3F6)
          </div>

          <div className="p-4 bg-background text-black rounded-lg">
            background (#E8F7FF)
          </div>

          <div className="p-4 bg-important text-white rounded-lg">
            important (#A64598)
          </div>
          <div className="p-4 bg-accent text-black rounded-lg">
            accent (#F8E9FF)
          </div>

          <div className="p-4 bg-success text-white rounded-lg">
            success (#3BBC57)
          </div>
          <div className="p-4 bg-warning text-black rounded-lg">
            warning (#FFC300)
          </div>

          <div className="p-4 bg-body text-white rounded-lg">
            body (#425466)
          </div>
          <div className="p-4 bg-subtext text-white rounded-lg">
            subtext (#5A6B7A)
          </div>

          <div className="p-4 bg-placeholder text-white rounded-lg">
            placeholder (#7C8B98)
          </div>
          <div className="p-4 bg-lightgrey text-black rounded-lg">
            lightgrey (#D9E1E7)
          </div>
        </div>
      </section>
    </div>
  )
}
