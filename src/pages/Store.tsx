import StoreItems from "../data/StroreItems.json";
import ItemStore from "../components/StoreItems";
import { Container, Stack } from "@mui/material";

export default function Store() {
   return (
      <div className="grid" style={{ margin: "auto", width: "100%" }}>
         {StoreItems.map((item, index) => (
            <ItemStore {...item} key={index} />
         ))}
      </div>
   );
}
