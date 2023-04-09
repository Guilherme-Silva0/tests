const Button = ({ children, type, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 disabled:bg-slate-600 disabled:cursor-default shadow-md cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
