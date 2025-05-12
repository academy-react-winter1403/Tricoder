const Button = ({ text, submit, children }) => {
  return (
    <div className="mt-3">
      <button
        type="submit"
        className=" text-[10px] px-9 py-[11px] rounded-3xl bg-[#2196F3] text-white font-yekan-500"
      >
        {children}{" "}
      </button>
    </div>
  );
};

export { Button };
