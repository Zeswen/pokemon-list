export const capitalize = (word: string): string => {
  const firstChar = word.charAt(0);
  return firstChar.toUpperCase() + word.slice(1);
};
