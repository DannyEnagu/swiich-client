export function limitString (str: string, limit: number): string {
  return str.length > limit ? `${str.slice(0, limit)}...` : str;
};

export function capitalize (strParam: string): string {
    // convert position string to TitleCase
    // e.g. top-start => TopStart
    return strParam.split('-').map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }).join('');
};