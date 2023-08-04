const Error = ({children}) => {
  return (
    <div className="p-3 text-white text-center uppercase font-semibold bg-red-800
          rounded-md">
      {children}
    </div>
  );
}

export default Error;