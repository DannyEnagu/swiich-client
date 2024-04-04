export function limitString (str: string, limit: number): string {
  return str.length > limit ? `${str.slice(0, limit)}...` : str;
};