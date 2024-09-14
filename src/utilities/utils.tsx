import { isEmpty, trim } from "lodash";

export const makeClassName = (...args: string[]): string => {
  const separator = " ";
  let ret = "";

  if (args.length > 0) {
    ret = args
      .map(trim)
      .filter((cls) => !isEmpty(cls))
      .join(separator);
  }
  return ret;
};
