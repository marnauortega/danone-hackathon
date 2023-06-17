export default {
  block: {
    big: ({ children }) => <p className="h5">{children}</p>,
    caps: ({ children }) => <p className="h6-normal">{children}</p>,
    small: ({ children }) => <p className="p-small">{children}</p>,
  },
};
