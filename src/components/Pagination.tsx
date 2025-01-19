const Pagination = () => {
  return (
    <div className="flex flex-row items-center justify-between text-gray-400 py-4">
      <button disabled className="bg-slate-200 rounded-md py-2 px-4 text-xs disabled:opacity-50 disabled:cursor-not-allowed">
        Prev
      </button>
      <div className="flex flex-row text-sm">
        <button className="rounded-sm bg-lamaSky px-1 ">1</button>
        <button className="px-2 rounded-md">2</button>
        <button className="px-2 rounded-md">3</button>
        ...
        <button className="px-2 rounded-md">10</button>
      </div>
      <button
        
        className="bg-gray-200 rounded-md py-2 px-4 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
