export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="border-gray-200 bg-white fixed bottom-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center">
          <div className="flex items-center">
            {/* <h1 className="text-3xl font-bold tracking-tight text-black">
                YourBrand
                <span className="text-sm align-super">™</span>
              </h1> */}
          </div>
          <ul className="hidden md:flex flex-1 items-center">
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
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section
          className="min-h-screen
  max-w-7xl mx-auto
  px-6 lg:px-8
  grid grid-cols-1 lg:grid-cols-2
  gap-12
  items-center"
        >
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h1 className="w-fit p-2 text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight bg-black">bachyyy</h1>
              <h2 className="w-fit p-2 text-5xl lg:text-6xl text-white bg-black">koming soon</h2>
            </div>
            {/* <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Create beautiful, functional spaces that inspire and delight. Our products combine modern design with timeless elegance.
            </p> */}
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                Explore Products
              </button>
              <button className="border border-gray-300 text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                Learn More
              </button>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="h-96 lg:h-full min-h-96 bg-gradient-to-br from-green-200 via-green-100 to-green-50 shadow-lg overflow-hidden">
            <div className="w-full h-full bg-[url('/imgs/art.jpg')] bg-cover bg-center" />
          </div>
        </section>

        {/* Features Section */}
        {/* <section id="features" className="bg-gray-50 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Built with quality, designed for comfort, and crafted for excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Premium Quality",
                  description: "Crafted with the finest materials and attention to detail.",
                  icon: "✨",
                },
                {
                  title: "Modern Design",
                  description: "Contemporary aesthetics that complement any space.",
                  icon: "🎨",
                },
                {
                  title: "Sustainable",
                  description: "Environmentally conscious production and materials.",
                  icon: "🌱",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        {/* <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="bg-black text-white rounded-lg p-12 lg:p-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and experience the difference quality makes.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
              Contact Us Today
            </button>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">YourBrand</h3>
              <p className="text-sm">Design solutions that inspire.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Product One</a></li>
                <li><a href="#" className="hover:text-white transition">Product Two</a></li>
                <li><a href="#" className="hover:text-white transition">Product Three</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 YourBrand. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
