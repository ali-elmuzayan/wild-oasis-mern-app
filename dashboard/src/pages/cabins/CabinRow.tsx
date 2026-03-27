import type { Cabin } from "../../types/Cabin";

const CabinRow = ({ cabin }: { cabin: Cabin }) => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4 border-b border-gray-200">
      <img src={cabin.image} alt={cabin.name} className="w-12 h-12" />
      <p>{cabin.name}</p>
      <p>{cabin.maxCapacity}</p>
      <p>{cabin.regularPrice}</p>
      <p>{cabin.discount}</p>
      <p>{cabin.discount}</p>
    </div>
  );
};

export default CabinRow;
