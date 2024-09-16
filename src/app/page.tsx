import { makeClassName } from "@/utilities/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faEnvelope,
  faFileInvoice,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { TransitionLink } from "@/utilities/TransitionLink";

export default function Home() {
  return (
    <div className="w-1/2">
      <h4
        className={makeClassName(
          "bg-gradient-to-r from-highlight to-primary inline-block text-transparent bg-clip-text",
          "pb-16",
          "text-xl"
        )}
      >
        current = intro();
      </h4>
      <h1 className="text-6xl pt-8">
        <strong>Hello, I'm Jordan.</strong>
      </h1>
      <h1 className={makeClassName("text-6xl", "pt-1", "pb-12")}>
        Full Stack Developer & Lifetime Learner.
      </h1>
      <h3 className="text-2xl w-4/5">
        This is a blog to keep up with me and my projects. I'm always learning
        and I like to share what I learn on this blog.{" "}
        <strong>Check it out!</strong>
      </h3>

      <ul className={makeClassName("flex-col", "pt-8", "text-2xl")}>
        <li className={makeClassName("pb-4")}>
          <FontAwesomeIcon
            icon={faFileInvoice}
            className={makeClassName(
              "text-primary",
              "flex",
              "justify-start",
              "items-center",
              "w-1/12"
            )}
          />
          <TransitionLink href="/pages/blog" className="underline">
            Check out what I've been learning
          </TransitionLink>
        </li>
        <li className={makeClassName("pb-4")}>
          <FontAwesomeIcon
            icon={faDiagramProject}
            className={makeClassName(
              "text-primary",
              "flex",
              "justify-start",
              "items-center",
              "w-1/12"
            )}
          />
          <TransitionLink href="/pages/projects" className="underline">
            Some of my projects
          </TransitionLink>
        </li>
        <li className={makeClassName("pb-4")}>
          <FontAwesomeIcon
            icon={faPerson}
            className={makeClassName(
              "text-primary",
              "flex",
              "justify-start",
              "items-center",
              "w-1/12"
            )}
          />
          <TransitionLink href="/pages/about" className="underline">
            More about me
          </TransitionLink>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={makeClassName(
              "text-primary",
              "flex",
              "justify-start",
              "items-center",
              "w-1/12"
            )}
          />
          <TransitionLink href="/pages/contact" className="underline">
            Get in touch
          </TransitionLink>
        </li>
      </ul>
    </div>
  );
}
