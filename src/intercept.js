export const interceptor = async () => {
  const { fetch: originalFetch } = window;
  window.fetch = async (...args) => {
    let [resource, config] = args;
    const URLcutOff = "https://dummyjson.com";
    const trailing = resource.slice(URLcutOff.length);
    console.log(trailing);
    if (trailing.startsWith("/posts")) {
      resource = `https://dummyjson.com/quotes?limit=5`;
    }
    const response = await originalFetch(resource, config);
    return response;
  };
};
