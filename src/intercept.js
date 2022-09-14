export const interceptor = async () => {
  const { fetch: originalFetch } = window;
  window.fetch = async (...args) => {
    let [resource, config] = args;
    const URLcutOff = "https://dummyjson.com";
    // const leading = resource.slice(0, URLcutOff.length);
    const trailing = resource.slice(URLcutOff.length);
    console.log(trailing);
    if (trailing.startsWith("/posts")) {
      // console.log("Quotes");
      resource = `https://dummyjson.com/carts?limit=1`;
    }
    if (trailing.startsWith("/quotes")) {
      // console.log("Posts");
      resource = `https://dummyjson.com/todos?limit=5`;
    }
    const response = await originalFetch(resource, config);
    return response;
  };
};
