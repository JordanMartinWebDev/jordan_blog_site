import { makeClassName } from "@/utilities/utils";
import BracketWrapper from "../BracketWrapper/BracketWrapper";

export default function Navbar() {
  return (
    <div
      className={makeClassName(
        "flex",
        "justify-between",
        "items-center",
        "h-12",
        "bg-foreground",
        "text-background",
        "relative",
        "shadow-sm",
        "border-b-highlight",
        "border-b-4"
      )}
    >
      <div
        className={makeClassName(
          "flex",
          "justify-between",
          "container",
          "mx-auto",
          "border-b-highlight",
          "boerder-2"
        )}
      >
        <div className={makeClassName("flex", "items-center")}>
          <a
            href="/"
            className={makeClassName("flex", "text-lg", "font-bold", "navbar")}
          >
            <BracketWrapper size="lg" nav={true}>
              JMWD
            </BracketWrapper>
          </a>
        </div>
        <div className={makeClassName("flex", "items-center", "gap-8")}>
          <a
            href="/pages/blog"
            className={makeClassName("text-lg", "font-bold", "navbar")}
          >
            Blog
          </a>
          <a
            href="/pages/projects"
            className={makeClassName("text-lg", "font-bold", "navbar")}
          >
            Projects
          </a>
          <a
            href="/pages/about"
            className={makeClassName("text-lg", "font-bold", "navbar")}
          >
            About
          </a>
          <a
            href="/pages/contact"
            className={makeClassName("text-lg", "font-bold", "navbar")}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
