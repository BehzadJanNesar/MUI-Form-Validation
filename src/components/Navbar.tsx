import { AppBar, List, Typography } from "@mui/material";
import { Link } from "react-router-dom";
interface ObjectValue {
   name: string;
   path: string;
}
const navbarItems: ObjectValue[] = [
   {
      name: "صفحه‌اصلی",
      path: "./",
   },
   {
      name: "فروشگاه",
      path: "/store",
   },
   {
      name: "Login",
      path: "/login",
   },
];
export default function Navbar() {
   return (
      <AppBar component={"nav"} position="sticky">
         <List sx={{ display: "flex", width: 400, justifyContent: "space-around" }}>
            {navbarItems.map((item, index) => (
               <Link
                  style={{ color: "#fff", fontWeight: "500", textDecoration: "none" }}
                  to={item.path}
                  key={index}>
                  {item.name}
               </Link>
            ))}
         </List>
      </AppBar>
   );
}
