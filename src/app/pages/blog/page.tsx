import { makeClassName } from "@/utilities/utils";
import Image from "next/image";
import testingImage from "@/images/testImage.jpeg";

export default function Blog() {
  return (
    <div className="grid grid-cols-3 container mx-auto">
      <div className="grid-cols-subgrid col-span-1">
        <h4
          className={makeClassName(
            "bg-gradient-to-r from-highlight to-primary inline-block text-transparent bg-clip-text",
            "pb-4",
            "text-xl"
          )}
        >
          current = blog();
        </h4>
        <div className="sticky top-0 pt-2">
          <h3 className="font-bold underline pb-2 text-sm">FEATURED POSTS</h3>
          <ul className="w-1/2 space-y-2 text-sm">
            <li>
              <a href="">
                Featured Post #1: With a longer title that should wrap
              </a>
            </li>
            <li>
              <a href="">Featured Post #2</a>
            </li>
            <li>
              <a href="">Featured Post #3</a>
            </li>
            <li>
              <a href="">Featured Post #4</a>
            </li>
            <li>
              <a href="">Featured Post #5</a>
            </li>
          </ul>
          <h3 className="font-bold underline pb-2 text-sm pt-12">
            FILTER TAGS
          </h3>
          <div className="flex flex-wrap gap-1 w-1/2">
            <button className="bg-highlight p-1 text-xs">React</button>
            <button className="bg-highlight p-1 text-xs">Opinion</button>
            <button className="bg-highlight p-1 text-xs">Web</button>
            <button className="bg-highlight p-1 text-xs">Javascript</button>
            <button className="bg-highlight p-1 text-xs">Javascript</button>
            <button className="bg-highlight p-1 text-xs">Javascript</button>
            <button className="bg-highlight p-1 text-xs">Javascript</button>
          </div>
        </div>
      </div>
      <div className="grid-cols-subgrid col-span-2">
        <div className="flex pb-16">
          <Image
            src={testingImage}
            alt="Description"
            width={426}
            height={240}
          />
          <div className="pl-8">
            <h2 className="text-3xl">This is a Test Blog Title</h2>
            <h5 className="text-sm opacity-70 pt-2">Posted on 01/01/2021</h5>
            <p className="pt-4">
              This needs to be a longer description of the article that can wrap
              around if needed. For right now this is a test and placeholder for
              this element, and that's why it is so long.
            </p>
            <div className="flex gap-1 pt-8">
              <button className="bg-highlight p-1 text-xs">Opinion</button>
              <button className="bg-highlight p-1 text-xs">React</button>
            </div>
          </div>
        </div>
        <div className="flex pb-16">
          <Image
            src={testingImage}
            alt="Description"
            width={426}
            height={240}
          />
          <div className="pl-8">
            <h2 className="text-3xl">This is a Test Blog Title</h2>
            <h5 className="text-sm opacity-70 pt-2">Posted on 01/01/2021</h5>
            <p className="pt-4">
              This needs to be a longer description of the article that can wrap
              around if needed. For right now this is a test and placeholder for
              this element, and that's why it is so long.
            </p>
            <div className="flex gap-1 pt-8">
              <button className="bg-highlight p-1 text-xs">Opinion</button>
              <button className="bg-highlight p-1 text-xs">React</button>
            </div>
          </div>
        </div>
        <div className="flex pb-16">
          <Image
            src={testingImage}
            alt="Description"
            width={426}
            height={240}
          />
          <div className="pl-8">
            <h2 className="text-3xl">This is a Test Blog Title</h2>
            <h5 className="text-sm opacity-70 pt-2">Posted on 01/01/2021</h5>
            <p className="pt-4">
              This needs to be a longer description of the article that can wrap
              around if needed. For right now this is a test and placeholder for
              this element, and that's why it is so long.
            </p>
            <div className="flex gap-1 pt-8">
              <button className="bg-highlight p-1 text-xs">Opinion</button>
              <button className="bg-highlight p-1 text-xs">React</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
