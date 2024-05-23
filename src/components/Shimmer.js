const Shimmer = () => {
  const prototype = Array.from("prototypeTest");
  return prototype.map((data, index) => (
    <div
      key={index}
      className="flex w-52 h-64 flex-col m-5 rounded-xl shadow overflow-hidden gap-5">
      <div className="w-52 h-36 rounded-lg bg-[#dee2e6]"></div>
      <div className="flex flex-col gap-5 px-2">
        <div className="w-28 h-5 bg-[#e9ecef] rounded-md"></div>
        <div className="w-24 h-5 bg-[#e9ecef] rounded-md"></div>
      </div>
    </div>
  ));
};
export default Shimmer;
