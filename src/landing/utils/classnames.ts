export function cn(...args: Array<any>) {
  return args.filter((cls) => !!cls).join(" ");
}
