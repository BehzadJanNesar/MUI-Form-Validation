import StoreItems from "../data/StroreItems.json";
import ItemStore from "../components/StoreItems";
import { useMemo } from "react";

export default function Store() {
   const memo = useMemo(() => {
      return StoreItems.map((item, index) => <ItemStore {...item} key={index} />);
   }, [StoreItems.length]);
   return <div style={{ margin: "auto", width: "100%" }}>{memo}</div>;
}
