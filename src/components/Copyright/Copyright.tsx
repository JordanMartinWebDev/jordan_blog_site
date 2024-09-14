import { makeClassName } from "@/utilities/utils";

export default function Copyright() {
  return (
    <div
      className={makeClassName(
        "bg-foreground",
        "text-background",
        "h-12",
        "flex",
        "justify-center",
        "items-center"
      )}
    >
      <p className="text-sm">© 2024 Jordan Martin</p>
    </div>
  );
}
