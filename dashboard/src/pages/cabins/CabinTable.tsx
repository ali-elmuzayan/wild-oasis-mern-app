import ErrorElement from "../../components/common/ErrorElement";
import Loading from "../../components/common/Loading";
import useCabins from "../../hooks/useCabins";
import type { Cabin } from "../../types/Cabin";
import CabinRow from "./CabinRow";

const CabinTable = () => {
  const { cabins, isLoading, error } = useCabins();

  if (isLoading) return <Loading label="Loading cabins..." />;

  if (error) return <ErrorElement message={error.message} title="Unable to load cabins" />;
  return (
    <div className="" role="table">
      <header className=" bg-gray-200 grid grid-cols-6 gap-4 p-4 rounded-t-md">
        <p>Image</p>
        <p>Cabin</p>
        <p>Capacity</p>
        <p>Price</p>
        <p>Discount</p>
        <p>Actions</p>
      </header>
      <div>
        {cabins?.map((cabin: Cabin) => (
          <CabinRow key={cabin.id} cabin={cabin} />
        ))}
      </div>
    </div>
  );
};

export default CabinTable;
