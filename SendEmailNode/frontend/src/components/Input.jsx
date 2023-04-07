const Input = ({ type, placeholder, id }) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="bg-gray-700 rounded-lg py-2 px-4 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue:600 focus:border-transparent w-full shadow-md"
    />
  );
};

export default Input;
