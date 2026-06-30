export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-orange-950 via-red-900 to-amber-950">
      {/* ================================================= */}
      {/* Animated Background */}
      {/* ================================================= */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Large Glow */}
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[180px] animate-pulse" />

        {/* Side Glows */}
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/10 blur-[120px] animate-pulse delay-700" />

        {/* Floating Food Icons */}
        <span className="absolute left-10 top-20 text-4xl opacity-20 animate-bounce">
          🍞
        </span>

        <span className="absolute right-24 top-32 text-5xl opacity-20 animate-pulse">
          🍚
        </span>

        <span className="absolute left-20 bottom-24 text-4xl opacity-20 animate-bounce delay-500">
          🍎
        </span>

        <span className="absolute right-16 bottom-20 text-5xl opacity-20 animate-pulse delay-1000">
          🥣
        </span>

        <span className="absolute left-1/2 top-10 text-3xl opacity-20 animate-ping">
          ❤️
        </span>

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* ================================================= */}
      {/* Main Content */}
      {/* ================================================= */}

      <section className="relative z-20 flex max-w-2xl flex-col items-center px-8">

        {/* Animated Logo */}

        <div className="relative mb-10">
          <div className="absolute inset-0 rounded-full bg-orange-400 blur-3xl opacity-30 animate-pulse" />

          <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-orange-300/30 bg-white/10 backdrop-blur-xl shadow-[0_0_80px_rgba(255,180,0,0.2)]">

            <div className="absolute h-44 w-44 rounded-full border border-orange-300/20 animate-spin" />

            <div className="absolute h-52 w-52 rounded-full border border-yellow-300/10 animate-[spin_12s_linear_infinite_reverse]" />

            <span className="text-7xl animate-bounce">
              🍲
            </span>

          </div>
        </div>

        {/* NGO Name */}

        <h1 className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-center text-5xl font-black text-transparent">

          One Meal One Hope

        </h1>

        <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />

        {/* Description */}

        <p className="mt-8 text-center text-xl leading-9 text-orange-100">

          A mission-driven NGO dedicated to ending hunger by ensuring
          that every individual has access to

          <span className="font-bold text-yellow-300">

            {" "}one nutritious meal every day.

          </span>

        </p>

        <p className="mt-5 max-w-xl text-center text-orange-200/90 leading-8">

          Every contribution becomes food on someone's plate,
          hope in someone's heart,
          and strength for tomorrow.

        </p>

        {/* Quote */}

        <div className="mt-10 rounded-3xl border border-orange-300/20 bg-white/5 px-8 py-6 backdrop-blur-xl">

          <p className="text-center text-lg italic text-orange-100">

            “No one has ever become poor by giving.”

          </p>

          <p className="mt-3 text-center text-sm text-orange-300">

            — Anne Frank

          </p>

        </div>

        {/* Skeleton Statistics */}

        <div className="mt-12 grid w-full grid-cols-3 gap-5">

          {[1,2,3].map((item)=>(
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="h-8 w-16 rounded bg-white/10 animate-pulse" />

              <div className="mt-4 h-3 rounded bg-white/10 animate-pulse" />

              <div className="mt-2 h-3 w-3/4 rounded bg-white/10 animate-pulse" />
            </div>
          ))}

        </div>

        {/* Progress */}

        <div className="mt-14 w-full">

          <div className="flex justify-between text-sm text-orange-300">

            <span>Preparing Hope...</span>

            <span>Loading...</span>

          </div>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">

            <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-[loading_2s_linear_infinite]" />

          </div>

        </div>

        {/* Bottom Icons */}

        <div className="mt-12 flex items-center gap-8 text-3xl">

          <span className="animate-bounce">
            🍞
          </span>

          <span className="animate-pulse">
            ❤️
          </span>

          <span className="animate-bounce delay-300">
            🤝
          </span>

          <span className="animate-pulse delay-500">
            🌍
          </span>

          <span className="animate-bounce delay-700">
            🥣
          </span>

        </div>

        <p className="mt-8 text-center text-sm tracking-[0.35em] uppercase text-orange-300 animate-pulse">

          Feeding Lives • Restoring Hope • Building Futures

        </p>

      </section>

      {/* ================================================= */}
      {/* Footer */}
      {/* ================================================= */}

      <footer className="absolute bottom-6 left-0 right-0 z-20 text-center">

        <p className="text-xs tracking-[0.25em] uppercase text-orange-400/80">

          Together We Can End Hunger

        </p>

      </footer>

      {/* ================================================= */}
      {/* Animations */}
      {/* ================================================= */}

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(50%);
          }
          100% {
            transform: translateX(220%);
          }
        }
      `}</style>
    </main>
  );
}