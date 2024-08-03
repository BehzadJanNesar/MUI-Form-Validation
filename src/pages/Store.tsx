import StoreItems from "../data/StroreItems.json";
import ItemStore from "../components/StoreItems";
import { useMemo } from "react";

export default function Store() {
   const loading = false;
   const memo = useMemo(() => {
      return StoreItems.CardDetails.map((item, index) => (
         <ItemStore loading={loading} {...item} key={index} />
      ));
   }, [StoreItems.CardDetails.length]);
   return <div style={{ margin: "auto", width: "100%" }}>{memo}</div>;
}
