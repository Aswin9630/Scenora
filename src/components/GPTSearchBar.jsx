
const GPTSearchBar = () => {
  return (
    <div className="min-h-screen px-4 pt-10 md:pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className=" text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Scenora AI
        </p>

        <h1 className="text-3xl font-extrabold leading-tight text-balck md:text-5xl">
          Find your next
          <span className="block bg-gradient-to-r from-purple-800 via-purple-500 to-purple-900 bg-clip-text text-transparent">
            favourite movie
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400 md:text-base">
          Tell us how you feel, what you love, or what you're in the mood for.
          Let AI discover the perfect story for you.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl md:mt-14">
        <form className="grid grid-cols-1 gap-3 rounded-2xl border border-purple-400/30 bg-black/20 p-3 shadow-2xl shadow-purple-900/20 backdrop-blur-md sm:grid-cols-12 sm:gap-2 sm:p-4">
          <input
            type="text"
            placeholder="e.g. Feel-good movies for a relaxing evening..."
            className="col-span-1 min-w-0 rounded-xl border border-purple-500/40 bg-gradient-to-r from-purple-800 via-purple-500 to-purple-900 px-4 py-3.5 text-sm text-white placeholder-purple-100/70 outline-none transition-all duration-300 focus:border-purple-300 focus:ring-2 focus:ring-purple-400/30 sm:col-span-9"
          />

          <button
            type="submit"
            className="col-span-1 rounded-xl bg-gradient-to-r from-purple-800 via-purple-500 to-purple-900 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/30 active:scale-[0.98] sm:col-span-3"
          >
            Search Movies →
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-400">
          ✨ Personalized recommendations, powered by AI
        </p>
      </div>
    </div>
  );
};

export default GPTSearchBar;