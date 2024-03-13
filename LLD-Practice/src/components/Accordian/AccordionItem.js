const AccordionItem = ({ data, isOpen, setIndex }) => {
  return (
    <div className="border border-black">
      <div className="flex justify-between p-2 font-bold bg-gray-700">
        <span>{data.title}</span>
        <span
          className="cursor-pointer"
          onClick={() => {
            isOpen = !isOpen;
            setIndex();
          }}
        >
          ⬇️
        </span>
      </div>
      {isOpen && <div className="p-2">{data.body}</div>}
    </div>
  );
};

export default AccordionItem;
