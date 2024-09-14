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
        "shadow-sm"
      )}
    >
      <div
        className={makeClassName(
          "flex",
          "justify-between",
          "container",
          "mx-auto"
        )}
      >
        <div className={makeClassName("flex", "items-center")}>
          <a href="/" className={makeClassName("flex", "text-lg", "font-bold")}>
            <BracketWrapper size="lg" nav={true}>
              JMWD
            </BracketWrapper>
          </a>
        </div>
        <div className={makeClassName("flex", "items-center", "gap-8")}>
          <a
            href="/pages/blog"
            className={makeClassName("text-lg", "font-bold")}
          >
            Blog
          </a>
          <a
            href="/pages/projects"
            className={makeClassName("text-lg", "font-bold")}
          >
            Projects
          </a>
          <a
            href="/pages/about"
            className={makeClassName("text-lg", "font-bold")}
          >
            About
          </a>
          <a
            href="/pages/contact"
            className={makeClassName("text-lg", "font-bold")}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
