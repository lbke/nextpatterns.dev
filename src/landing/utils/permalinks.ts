import { trim } from "@/landing/utils/utils";
import { SITE } from "@landing/config/SITE";

export const trimSlash = (s: string) => trim(trim(s, "/"));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join("/");
  return "/" + paths;
};

const BASE_PATHNAME = SITE.site || "/";

/** */
export const getCanonical = (path = ""): string | URL => {
  const url = String(new URL(path, SITE.site));
  if (path && url.endsWith("/")) {
    return url.slice(0, -1);
  }
  return url;
};

/** */
export const getPermalink = (slug = "", type = "page"): string => {
  let permalink: string;

  if (
    slug.startsWith("https://") ||
    slug.startsWith("http://") ||
    slug.startsWith("://") ||
    slug.startsWith("#") ||
    slug.startsWith("javascript:")
  ) {
    return slug;
  }

  switch (type) {
    case "home":
      permalink = getHomePermalink();
      break;

    case "asset":
      permalink = getAsset(slug);
      break;

    case "post":
      permalink = createPath(trimSlash(slug));
      break;

    case "page":
    default:
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

/** */
export const getHomePermalink = (): string => getPermalink("/");

/** */

/** */
export const getAsset = (path: string): string =>
  "/" +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join("/");

/** */
const definitivePermalink = (permalink: string): string =>
  createPath(BASE_PATHNAME, permalink);

/** */
export const applyGetPermalinks = (
  menu:
    | Array<any>
    | { [key: "href" | string]: { type: string; url: string } }
    | string
): any => {
  if (Array.isArray(menu)) {
    return menu.map((item) => applyGetPermalinks(item));
  } else if (typeof menu === "object" && menu !== null) {
    const obj: any = {};
    for (const key in menu) {
      if (key === "href") {
        if (typeof menu[key] === "string") {
          obj[key] = getPermalink(menu[key]);
        } else if (typeof menu[key] === "object") {
          if (menu[key].type === "home") {
            obj[key] = getHomePermalink();
          } else if (menu[key].type === "asset") {
            obj[key] = getAsset(menu[key].url);
          } else if (menu[key].url) {
            obj[key] = getPermalink(menu[key].url, menu[key].type);
          }
        }
      } else {
        // @ts-ignore
        obj[key] = applyGetPermalinks(menu[key]);
      }
    }
    return obj;
  }
  return menu;
};
