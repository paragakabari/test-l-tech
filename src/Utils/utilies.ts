export const shortenName = (name: string): string => {
  if (!name) return "";

  const words = name.split(/[\s&]+/);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  const abbreviation = words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return abbreviation;
};
