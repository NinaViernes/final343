export default function Home() {
  return (
    <>
      {/* Your Existing Content */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Final Exam 343</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-1">Viernes, Nina</h2>
      <h3 className="text-xl text-gray-600">Spring 2025</h3>   

      {/* New Content Below */}
      <div className="bg-background text-foreground font-sans">
        {/* Header with navigation */}
        <header className="bg-background text-foreground py-4">
          <nav className="text-center">
            <ul className="flex justify-center space-x-8">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#gallery" className="hover:underline">Gallery</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        <main>
          {/* Hero / Banner Section */}
          <section
            id="hero"
            className="bg-cover bg-center text-white text-center p-24"
            style={{ backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0836/2769/files/pottery-wheel-process_600x600.jpg?v=1601394984")' }}
          >
            <h1 className="text-5xl mb-5">Welcome to Nina's Ceramics</h1>
            <p className="text-xl">Handmade pottery crafted with love and passion.</p>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 px-4 bg-white text-center">
            <h2 className="text-4xl mb-8 text-brown">In Her Element</h2>
            <p className="text-lg max-w-3xl mx-auto text-brown">
              Nina is a Filipino artist who creates beautiful pottery inspired by the nature and culture of the Philippines. Her handmade pieces reflect the beauty of the land, the sea, and the traditions passed down through generations...
            </p>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="py-16 px-4 bg-tan text-center">
            <h2 className="text-4xl mb-12 text-brown">Gallery</h2>

            <div className="flex flex-wrap justify-center gap-6">
              {/* Ceramic Piece 1 */}
              <div className="ceramic-card bg-white border border-tan rounded-lg p-6 transition-transform duration-300 ease-in-out text-center max-w-xs">
                <img src="https://i.etsystatic.com/53330866/r/il/128007/6538022091/il_794xN.6538022091_130p.jpg" alt="Ceramic Vase" className="w-full h-80 object-cover rounded-lg mb-4" />
                <h3 className="text-xl mb-3 text-brown">Ceramic Vase</h3>
                <p className="text-sm mb-4 text-brown">A beautifully crafted vase that blends the essence of earth, vastness of the sea, wandering winds, and endless blue sky.</p>
                <button className="bg-brown text-white py-2 px-6 rounded-md hover:bg-darker-brown">View Details</button>
              </div>

              {/* Ceramic Piece 2 */}
              <div className="ceramic-card bg-white border border-tan rounded-lg p-6 transition-transform duration-300 ease-in-out text-center max-w-xs">
                <img src="https://brewerypottery.com/cdn/shop/products/STmMugTV16.jpg?v=1594674861" alt="Pottery Mug" className="w-full h-80 object-cover rounded-lg mb-4" />
                <h3 className="text-xl mb-3 text-brown">Pottery Mug</h3>
                <p className="text-sm mb-4 text-brown">Rooted in the land, this handcrafted mug brings warmth to your morning ritual-whether it's coffee or tea.</p>
                <button className="bg-brown text-white py-2 px-6 rounded-md hover:bg-darker-brown">View Details</button>
              </div>

              {/* Ceramic Piece 3 */}
              <div className="ceramic-card bg-white border border-tan rounded-lg p-6 transition-transform duration-300 ease-in-out text-center max-w-xs">
                <img src="https://i.etsystatic.com/34625692/r/il/8e6518/4047423576/il_570xN.4047423576_qrwf.jpg" alt="Ceramic Bowl" className="w-full h-80 object-cover rounded-lg mb-4" />
                <h3 className="text-xl mb-3 text-brown">Ceramic Bowl</h3>
                <p className="text-sm mb-4 text-brown">Inspired by the soft, nourishing heart of the coconut, this versatile bowl brings natural simplicity to everyday use.</p>
                <button className="bg-brown text-white py-2 px-6 rounded-md hover:bg-darker-brown">View Details</button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer with contact info */}
        <footer id="contact" className="bg-brown text-white py-8 text-center">
          <p className="text-base mb-4">Pricing information is available upon request.</p>
          <p className="text-base mb-4">Contact Nina:</p>
          <p className="text-base mb-4">Email: hello@ninasceramics.com</p>
          <p className="text-base mb-4">Phone: (012) 345-6789</p> {/* Fake phone number */}
          <p className="text-base">&copy; 2025 Nina's Ceramics. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
