const Box = ({ additionalClass }) => {
  return (
    <div
      className={`w-40 h-40 bg-blue-700 rounded-lg shadow-md ${additionalClass}`}
    ></div>
  );
};

export default Box;
