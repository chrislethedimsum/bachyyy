import IntroOverlay from "@/app/IntroOverlay";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <IntroOverlay />
      {/* Header/Navigation */}
      {/* <header className="border-gray-200 bg-white fixed bottom-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center">
          <div className="flex items-center">
          </div>
          <ul className="hidden md:flex flex-1 items-center gap-100">
            <li>
              <a href="#products" className="text-sm font-medium text-gray-700 hover:text-black transition">
                ÂM THANH
              </a>
            </li>

            <li className="ml-auto">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-black transition">
                HÌNH ẢNH
              </a>
            </li>
          </ul>
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header> */}

      {/* Hero Section */}
      <main className="flex-1">
        <section
          className="min-h-screen
  max-w-7xl mx-auto
  px-6 lg:px-8
  grid grid-cols-1 lg:grid-cols-2
  gap-0 lg:gap-12
  items-stretch lg:items-center"
        >
          {/* Left Content */}
          <div className="flex flex-col h-full">
            {/* Middle content – centered vertically */}
            <div className="flex flex-col justify-center flex-1 space-y-4">
              <h1 className="w-fit p-2 text-5xl lg:text-6xl font-bold text-white bg-black">bachyyy</h1>
              <h2 className="w-fit p-2 text-5xl lg:text-6xl text-white bg-black">coming soon</h2>
            </div>

            {/* Bottom labels */}
            <div className="flex items-end justify-between pb-0 lg:pb-2">
              <a href="https://www.youtube.com/channel/UC7ztzTvvuirIMMcmUxCaV4A" className="text-sm pb-30 lg:pb-0 font-medium text-gray-700 hover:text-black transition">
                ÂM THANH
              </a>

              <a href="https://vi.wikipedia.org/wiki/%C4%90%E1%BA%B7ng_%C4%90%C3%ACnh_H%C6%B0ng" className="text-lg lg:text-sm font-medium text-gray-700 hover:text-black transition">
                HÌNH ẢNH
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="h-96 lg:h-full min-h-96 bg-gradient-to-br from-green-200 via-green-100 to-green-50 shadow-lg overflow-hidden">
            <div className="w-full h-full bg-[url('/imgs/art.jpg')] bg-cover bg-center" />
          </div>
        </section>
      </main>
      <audio src="audio/34953_080226_rockman.mp3" autoPlay></audio>
    </div>
  );
}
