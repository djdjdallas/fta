"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import "/Users/dominickhill/FTA-WEB/fta/src/app/globals.css";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for your interest! We'll notify ${email} when we launch.`);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Taste Without Borders - Translate Menus & Discover Dishes</title>
        <meta
          name="description"
          content="Translate menus globally with a snap! Hear pronunciations, save favorites, build your food history, and get personalized, humorous culinary insights."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/next.svg"
                alt="Taste Without Borders Logo"
                width={40}
                height={40}
              />
            </div>
            <span className="font-semibold text-lg">Taste Without Borders</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              About
            </a>
            <a
              href="#download"
              className="font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Taste Without Borders
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-lg">
              Translate menus globally with a snap! Hear pronunciations, save
              favorites, build your food history, and get personalized, humorous
              culinary insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="transition-transform hover:scale-105">
                <Image
                  src="/images/vercel.svg"
                  alt="Download on App Store"
                  width={150}
                  height={50}
                />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-[500px] w-[250px]">
              <Image
                src="/images/hero.png"
                alt="Taste Without Borders App"
                width={300}
                height={600}
                className="drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">
            Embark on a Culinary Quest
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Menu Translation
              </h3>
              <p className="text-gray-600">
                Instantly translate any menu from any language with just a
                photo.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🔊</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Audio Pronunciation
              </h3>
              <p className="text-gray-600">
                Hear how to properly pronounce dishes in their original
                language.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Dish Identification
              </h3>
              <p className="text-gray-600">
                Identify mystery dishes and discover their ingredients.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Save Favorites
              </h3>
              <p className="text-gray-600">
                Build your personal culinary passport of favorite discoveries.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">📷</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Real-Time Translation
              </h3>
              <p className="text-gray-600">
                Use the camera mode for instant menu scanning on the go.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Dietary Preferences
              </h3>
              <p className="text-gray-600">
                Get personalized recommendations based on your dietary needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About Taste Without Borders
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe language should never be a barrier to amazing culinary
              experiences. Our app helps travelers, food enthusiasts, and anyone
              with dietary restrictions navigate foreign menus with confidence
              and humor.
            </p>
            <p className="text-lg text-gray-600">
              Founded by a team of food-loving travelers frustrated by pointing
              at menus and hoping for the best, we've created the tool we always
              wanted - accurate translations with personality!
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-80 w-40 drop-shadow-lg">
                <Image
                  src="/images/2.png"
                  alt="App Screenshot"
                  width={160}
                  height={320}
                  className="rounded-xl"
                />
              </div>
              <div className="relative h-80 w-40 drop-shadow-lg -mt-8">
                <Image
                  src="/images/3.png"
                  alt="App Screenshot"
                  width={160}
                  height={320}
                  className="rounded-xl"
                />
              </div>
              <div className="relative h-80 w-40 drop-shadow-lg">
                <Image
                  src="/images/4.png"
                  alt="App Screenshot"
                  width={160}
                  height={320}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-16 md:py-24 bg-gray-900 text-white text-center"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download Taste Without Borders and transform every meal into a
            delicious adventure!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="transition-transform hover:scale-105">
              <Image
                src="/images/vercel.svg"
                alt="Download on App Store"
                width={180}
                height={60}
              />
            </a>
            <a href="#" className="transition-transform hover:scale-105">
              <Image
                src="/images/vercel.svg"
                alt="Get it on Google Play"
                width={180}
                height={60}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Highlight Section with Screenshot */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Dive Into Flavor
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            A whimsical description awaits with every dish you discover
          </p>
          <div className="max-w-md mx-auto">
            <Image
              src="/images/5.png"
              alt="Food description feature"
              width={300}
              height={600}
              className="rounded-xl shadow-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter to receive updates on new features and
            supported cuisines.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row max-w-lg mx-auto gap-4"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 relative">
                  <Image
                    src="/images/next.svg"
                    alt="Taste Without Borders Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="font-semibold">Taste Without Borders</span>
              </div>
              <p className="text-gray-400">
                Breaking down culinary language barriers, one dish at a time.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-800">
            <p>
              © {new Date().getFullYear()} Taste Without Borders. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
