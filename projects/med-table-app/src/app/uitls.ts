export const urlAddQueryParam = (url: string, query: string): string => {
  const [key, value] = query.replace('?', '').split('=');
  const urlBuilder = new URL(url);
  urlBuilder.searchParams.set(key, value);
  return urlBuilder.toString();
};
