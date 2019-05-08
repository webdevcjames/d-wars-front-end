export const callAPI = (uri: string): Promise<string> => 
  fetch(uri)
    .then((res: Response): Promise<string> => res.text())
    .catch((err: string): string => err)