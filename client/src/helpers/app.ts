export const call = (uri: string, callback: (res: string) => any): Promise<string> => 
  fetch(uri)
    .then((res: Response): Promise<string> => res.text())
    .then((res: string): any => callback(res))
    .catch((err: string): string => err)
