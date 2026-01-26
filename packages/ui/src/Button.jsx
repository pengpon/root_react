
export function Button ({ children, className }) {
  return (
    <button
      className={className}
    >
      我是共用的 Button
      {children}
    </button>
  );
};
