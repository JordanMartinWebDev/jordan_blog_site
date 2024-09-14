import { makeClassName } from "@/utilities/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="w-1/2">
      <h4
        className={makeClassName(
          "bg-gradient-to-r from-highlight to-primary inline-block text-transparent bg-clip-text",
          "pb-16",
          "text-2xl"
        )}
      >
        current = intro();
      </h4>
      <h1 className={makeClassName("text-6xl")}>
        <strong>Hello, I'm Jordan.</strong>
      </h1>
      <h1 className={makeClassName("text-6xl", "pt-1", "pb-12")}>
        Full Stack Developer & Lifetime Learner.
      </h1>
      <p className={makeClassName("text-2xl")}>
        This is a blog to keep up with me and my projects. I'm always learning
        and I like to share what I learn on this blog. Check it out!
      </p>
      <ul>
        <li>
          <a href="./blog">
            <i className="fa-solid fa-file-invoice"></i>Check out what I've been
            learning
          </a>
        </li>
        <li>
          <a href="./projects">
            <i className="fa-solid fa-diagram-project"></i>Some of my projects
          </a>
        </li>
        <li>
          <a href="./about">
            <i className="fa-solid fa-person"></i>More about me
          </a>
        </li>
        <li>
          <a href="./contact">
            <FontAwesomeIcon icon={faEnvelope} size="2xl" className="flex" />
            Get in touch
          </a>
        </li>
      </ul>
    </div>
  );
}
