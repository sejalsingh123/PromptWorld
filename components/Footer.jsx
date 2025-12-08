export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 bg-white/60 backdrop-blur-md mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            className="w-8 h-8"
          />
          <p className="text-gray-700 font-semibold">
            PromptWorld © {new Date().getFullYear()}
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex gap-6 text-gray-600 text-sm">
          <a href="#" className="hover:text-black transition">About</a>
          <a href="#" className="hover:text-black transition">Privacy</a>
          <a href="#" className="hover:text-black transition">Terms</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-600 text-xl">
          <a href="#" className="hover:text-black transition">
            <i className="ri-github-fill"></i>
          </a>
          <a href="#" className="hover:text-black transition">
            <i className="ri-twitter-x-fill"></i>
          </a>
          <a href="#" className="hover:text-black transition">
            <i className="ri-instagram-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
