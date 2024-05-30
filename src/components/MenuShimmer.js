const MenuShimmer = () => {
  const prototype = Array.from("prototypeTest");
  return prototype.map((data, index) => (
    <div
      className="flex w-3/5 flex-row  gap-10 pr-5 rounded-md items-center justify-between bg-[#F7F7F7]"
      key={index}>
      <div className="w-48 h-28 rounded-lg bg-[#dee2e6]"></div>
      <div className="flex flex-col w-1/2 gap-5">
        <div className="h-6 w-44 bg-[#e9ecef] rounded-md"></div>
        <div className="h-8 bg-[#e9ecef] rounded-md"></div>
      </div>
      <div className="w-24 h-5 bg-[#e9ecef] rounded-md"></div>
    </div>
  ));
};
export default MenuShimmer;
