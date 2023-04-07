const Button = ({ children, type }) => {
  return (
    <button
      type={type}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-md"
    >
      {children}
    </button>
  );
};

export default Button;
