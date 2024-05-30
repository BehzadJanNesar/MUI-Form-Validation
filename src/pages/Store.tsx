import StoreItems from "../data/StroreItems.json";
import ItemStore from "../components/StoreItems";

export default function Store() {
   return (
      <div className="grid">
         {StoreItems.map((item, index) => (
            <ItemStore {...item} key={index} />
         ))}
      </div>
   );
}
