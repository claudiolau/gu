export const Capitalize = (s: string) => {
  if (s) return s[0].toUpperCase() + s.slice(1);
  return "Loading Resource...";
};
