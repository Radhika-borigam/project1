import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Search Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h3 className="text-2xl font-bold mb-4 md:mb-0">Search Services</h3>
          <div className="flex items-center w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search for services..."
              className="flex-1 p-3 rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-purple-500 hover:bg-purple-600 px-4 py-3 text-white rounded-r-md">
              Search
            </button>
          </div>
        </div>

        {/* Footer Main Section */}
        <div className="md:flex md:justify-between">
          {/* Company Section */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h1 className="text-2xl font-bold text-purple-400">Y9K</h1>
            <p className="mt-3 text-gray-400">
              Y9K offers organizations a unique IT service experience. Everything we
              do revolves around making you better tomorrow than you are today. Our
              solutions don’t focus on the latest shiny objects – they solve problems,
              increase productivity, and give peace of mind.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:w-2/3">
            <div>
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Managed Cloud Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Private Cloud
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Managed IT Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Business Phone Systems
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Business IT Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Y9K Teams Voice
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Y9K Talk
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Cyber Security Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold">Industries</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Medical IT Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Manufacturing IT
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Retail & Fashion IT
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Accounting IT
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold">Locations</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Suburbs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Melbourne
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sydney
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 py-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">Subscribe to Our Newsletter</h3>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="p-2 rounded-l-md text-black focus:outline-none"
                />
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex space-x-6">
              <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-white text-2xl">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-white text-2xl">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white text-2xl">
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
