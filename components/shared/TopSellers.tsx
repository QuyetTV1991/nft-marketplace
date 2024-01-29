import Scroll from "./Scroll";
import CreatorCard from "./cards/CreatorCard";
import { creatorList } from "@/contants/dummy";

const TopSellers = () => {
  return (
    <div>
      <h1 className="ml-4 font-poppins text-2xl font-semibold text-nft-black-1 dark:text-white xs:ml-0 minlg:text-4xl">
        Best Creators
      </h1>

      <div className="relative mt-3 flex max-w-full flex-1">
        <div className="no-scrollbar flex w-max select-none flex-row overflow-x-scroll">
          {creatorList.map((item, index) => (
            <CreatorCard
              key={index}
              rank={item.rank}
              imgUrl={item.creatorImage}
              name={item.creatorName}
              eths={item.creatorEths}
            />
          ))}
          <Scroll />
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
