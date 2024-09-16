export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-8 pb-16">
      <div className="grid grid-cols-3 container mx-auto">
        <div className="border-e">
          <p className="grid-cols-subgrid col-span-1 pb-4 font-bold">Links</p>
          <ul className="list-disc pl-4">
            <li>
              <a
                href="https://github.com/jordanmartinwebdev"
                className="text-background pb-2"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/jordanmartinwebdev"
                className="text-background pb-2"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="grid-cols-subgrid col-span-2 pl-4">
          <p>
            Made with{" "}
            <a href="https://nextjs.org/" className="text-background">
              Next.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
