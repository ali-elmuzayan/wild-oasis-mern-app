import toast from "react-hot-toast";
import CabinTable from "./CabinTable";

const Cabins = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">All cabins</h2>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-600 transition-colors duration-200"
          onClick={() =>
            toast.success("Cabin added successfully", { duration: 1000 })
          }
        >
          Add new cabin
        </button>
      </div>
      <div>
        <CabinTable />
      </div>
    </div>
  );
};

export default Cabins;
