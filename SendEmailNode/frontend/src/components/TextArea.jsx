const TextArea = ({ id, placeholder }) => {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      className="bg-gray-700 rounded-lg py-2 px-4 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue:600 focus:border-transparent resize-none h-36 w-full shadow-md"
    ></textarea>
  );
};

export default TextArea;
