const getEnvironmentVariable = (
  environmentVariable: string
): string | undefined => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  return unvalidatedEnvironmentVariable;
};

export const config = {
  apiBaseUrl: getEnvironmentVariable("API_BASE_URL"),
};
