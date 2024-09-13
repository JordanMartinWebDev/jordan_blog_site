export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-12 bg-white text-black relative shadow-sm">
      <div className="flex items-center">
        <a href="/" className="text-lg font-bold ml-16">
          Jordan Martin
        </a>
      </div>
      <div className="flex items-center mr-16 gap-8">
        <a href="/pages/blog" className="text-lg font-bold">
          Blog
        </a>
        <a href="/pages/projects" className="text-lg font-bold">
          Projects
        </a>
        <a href="/pages/about" className="text-lg font-bold">
          About
        </a>
        <a href="/pages/contact" className="text-lg font-bold">
          Contact
        </a>
      </div>
    </div>
  );
}
