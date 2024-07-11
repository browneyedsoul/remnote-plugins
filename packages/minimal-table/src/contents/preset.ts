export const [TABLE, WIDTH] = ["table", "width"];

export const createTableItem = (name: string, code: string, hidden: boolean, onlyProgrammaticModifying: boolean) => {
  return {
    name,
    code,
    hidden,
    onlyProgrammaticModifying,
  };
};