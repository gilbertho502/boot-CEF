const DOM = {
  find: (query, from = document) => {
    return from.querySelector(query);
  },
  create: (tag) => {
    return document.createElement(tag);
  },
};
export default DOM;
