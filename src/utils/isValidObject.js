export const isValidObject = (value) => {
  return value !== null && typeof value === "object" && !Array.isArray(value);
};
