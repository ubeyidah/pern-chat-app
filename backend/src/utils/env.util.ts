export const env = (name: string) => {
  if (process.env[name] === undefined) {
    throw new Error(`Environment variable ${name} is not defined`);
  }
  return process.env[name];
};
