import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] sm:h-[40vh] md:h-screen w-full">

        <Image
          src="/hero.png"
          alt="Hero"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-5 sm:px-6 text-white">

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Elevate Your Style
          </h1>

          <p className="mb-6 text-sm sm:text-base md:text-lg max-w-xl">
            Discover premium fashion for every occasion
          </p>

          <Link
            href="/products"
            className="bg-yellow-500 text-black px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold w-fit hover:bg-yellow-400 transition"
          >
            Shop Now
          </Link>

        </div>
      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-12 md:py-16">

        <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-[var(--foreground)]">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">

          {[
            { name: "Men", img: "/cat-men.png" },
            { name: "Women", img: "/cat-women.png" },
            { name: "Kids", img: "/cat-kids.png" },
            { name: "Accessories", img: "/cat-acc.png" }
          ].map((c) => (

            <Link
              key={c.name}
              href={`/category/${c.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-xl"
            >

              <Image
                src={c.img}
                alt={c.name}
                width={400}
                height={500}
                className="object-cover w-full h-[200px] sm:h-[240px] md:h-[260px] group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end p-3 sm:p-4 text-white font-semibold text-sm sm:text-base">
                {c.name}
              </div>

            </Link>

          ))}

        </div>
      </section>


      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-12 md:py-16">

        <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-[var(--foreground)]">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">

          {[1,2,3,4].map((id) => (

            <div
              key={id}
              className="bg-[var(--background)] border rounded-xl overflow-hidden hover:shadow-lg transition"
            >

              <Image
                src="/product.jpg"
                alt="Product"
                width={400}
                height={400}
                className="object-cover w-full h-[220px] sm:h-[260px] md:h-[280px]"
              />

              <div className="p-3 sm:p-4">

                <h3 className="font-medium text-sm sm:text-base text-[var(--foreground)]">
                  Premium T-Shirt
                </h3>

                <p className="text-gray-500 text-sm">₹799</p>

                <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:opacity-90 text-sm sm:text-base">
                  Add to Cart
                </button>

              </div>
            </div>

          ))}

        </div>
      </section>


      {/* ================= SALE BANNER ================= */}
      <section className="bg-yellow-500 text-black py-10 md:py-14 text-center px-4">

        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          Flat 30% OFF
        </h2>

        <p className="text-sm md:text-base">
          On selected styles — Limited time only
        </p>

      </section>


      {/* ================= NEW ARRIVALS ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-12 md:py-16">

        <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-[var(--foreground)]">
          New Arrivals
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">

          {[1,2,3,4].map((id) => (

            <div key={id} className="text-center">

              <Image
                src="/product.jpg"
                alt="Product"
                width={400}
                height={400}
                className="rounded-xl w-full h-[220px] sm:h-[260px] md:h-[280px] object-cover"
              />

              <h3 className="mt-3 font-medium text-sm sm:text-base text-[var(--foreground)]">
                Casual Hoodie
              </h3>

              <p className="text-gray-500 text-sm">₹1299</p>

            </div>

          ))}

        </div>
      </section>


      {/* ================= BENEFITS ================= */}
      <section className="bg-gray-100 py-8 md:py-10">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="font-semibold text-sm md:text-base">Free Shipping</h3>
            <p className="text-xs md:text-sm text-gray-500">On orders above ₹999</p>
          </div>

          <div>
            <h3 className="font-semibold text-sm md:text-base">Easy Returns</h3>
            <p className="text-xs md:text-sm text-gray-500">7-day return policy</p>
          </div>

          <div>
            <h3 className="font-semibold text-sm md:text-base">Secure Payment</h3>
            <p className="text-xs md:text-sm text-gray-500">100% protected</p>
          </div>

          <div>
            <h3 className="font-semibold text-sm md:text-base">24/7 Support</h3>
            <p className="text-xs md:text-sm text-gray-500">We’re here to help</p>
          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white py-10 md:py-12">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid gap-8 md:grid-cols-3">

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">Shahi Style</h3>
            <p className="text-gray-400 text-sm">
              Premium fashion for modern lifestyle.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm md:text-base">Contact</h4>
            <p className="text-gray-400 text-sm">support@shahistyle.com</p>
          </div>

        </div>

        <p className="text-center text-gray-500 mt-8 text-xs md:text-sm">
          © 2026 Shahi Style. All rights reserved.
        </p>
      </footer>

    </div>
  )
}
