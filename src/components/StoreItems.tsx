import {
   Card,
   CardContent,
   CardMedia,
   Typography,
   Button,
   Box,
   Grid,
   Stack,
   Skeleton,
} from "@mui/material";
import Vector from "../../Public/Images/Vector.svg";
import OpenIcon from "../../Public/Images/openIcon.svg";
import ClockIcon from "../../Public/Images/clock-watch-svgrepo-com 4.svg";
import CallIcon from "../../Public/Images/callIcon.svg";
import Group from "../../Public/Images/Group.svg";
import MapIcon from "../../Public/Images/MapIcon.svg";

interface ItemStoreProps {
   img: string;
   title: string;
   address: string;
   openTime: string;
   sunestTime: string;
   rate: string;
   phone_number: string;
   repair_service: string;
   price: string;
   loading: boolean;
}

export default function ItemStore({
   img,
   title,
   address,
   openTime,
   sunestTime,
   phone_number,
   rate,
   repair_service,
   price,
   loading,
}: ItemStoreProps) {
   return (
      <Card sx={{ mt: 3, marginInline: "auto", padding: "30px", boxShadow: "unset" }}>
         {loading ? (
            <Skeleton
               sx={{ borderRadius: "5px", backgroundColor: "#f1f1f1" }}
               animation="wave"
               variant="rectangular"
               width="100%"
               height={180}
            />
         ) : (
            <CardMedia
               component="img"
               width="360px"
               height="180px"
               image={img}
               alt="Bruce's Tire & Auto Service"
               sx={{ borderRadius: "5px" }}
            />
         )}
         <CardContent sx={{ padding: 0, marginTop: "10px", borderBottom: "1px solid #6C6C6C4A" }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={0.5}>
               {loading ? (
                  <Skeleton
                     sx={{ borderRadius: "5px", backgroundColor: "#f1f1f1" }}
                     animation="wave"
                     height={20}
                     width="70%"
                     style={{ marginBottom: "4px" }}
                  />
               ) : (
                  <Typography variant="h3" component="div">
                     {title}
                  </Typography>
               )}
               {loading ? (
                  <Skeleton
                     sx={{ borderRadius: "5px", backgroundColor: "#f1f1f1" }}
                     animation="wave"
                     height={20}
                     width="20%"
                     style={{ marginBottom: "4px" }}
                  />
               ) : (
                  <Box component="div" display="flex" alignItems="center" gap={0.5}>
                     <Typography component="p" variant="h3" color="#424242" className="font-[18px]">
                        {rate}
                     </Typography>
                     <Box component="img" src={Vector} sx={{ paddingBottom: "5px" }} />
                  </Box>
               )}
            </Box>
            {loading ? (
               <Skeleton
                  sx={{ borderRadius: "5px", backgroundColor: "#f1f1f1" }}
                  animation="wave"
                  height={20}
                  width="70%"
                  style={{ marginBottom: "4px" }}
               />
            ) : (
               <Typography variant="body2" color="text.secondary" mb={0.5}>
                  {address}
               </Typography>
            )}
            {loading ? (
               <Skeleton
                  sx={{ borderRadius: "5px", backgroundColor: "#f1f1f1" }}
                  animation="wave"
                  height={20}
                  width="70%"
                  style={{ marginBottom: "4px" }}
               />
            ) : (
               <Grid container spacing={1} alignItems="center" mb={0.5}>
                  <Grid sx={{ display: "flex", alignItems: "center" }} item>
                     <Box component="img" src={ClockIcon} />
                  </Grid>
                  <Grid item>
                     <Typography variant="body2" color="text.secondary">
                        {openTime}
                     </Typography>
                  </Grid>
               </Grid>
            )}
            {loading ? (
               <Skeleton
                  sx={{ borderRadius: "5px", backgroundColor: "#f1f1f1" }}
                  animation="wave"
                  height={20}
                  width="70%"
                  style={{ marginBottom: "4px" }}
               />
            ) : (
               <Grid container spacing={1} alignItems="center" mb={0.5}>
                  <Grid sx={{ display: "flex", alignItems: "center" }} item>
                     <Box component="img" src={OpenIcon} />
                  </Grid>
                  <Grid item>
                     <Typography variant="body2" color="text.secondary">
                        {sunestTime}
                     </Typography>
                  </Grid>
               </Grid>
            )}
            {loading ? (
               <Skeleton
                  sx={{ borderRadius: "5px", backgroundColor: "#f1f1f1" }}
                  animation="wave"
                  height={20}
                  width="70%"
                  style={{ marginBottom: "4px" }}
               />
            ) : (
               <Grid container spacing={1} alignItems="center" mb={0.5}>
                  <Grid sx={{ display: "flex", alignItems: "center" }} item>
                     <Box component="img" src={CallIcon} />
                  </Grid>
                  <Grid item>
                     <Typography variant="body2" color="text.secondary">
                        {phone_number ? phone_number : "شماره همراهی ثبت نشده است"}
                     </Typography>
                  </Grid>
               </Grid>
            )}
            {/* <Grid container mt={3}>
               <Grid container display="flex" alignItems="center" justifyContent="space-between">
                  <Grid display="flex" alignItems="center" gap={1}>
                     <Box component="img" src={Group} />
                     <Typography color="#424242" variant="h4">
                        هزینه سرویس
                     </Typography>
                  </Grid>
                  <Grid
                     component="div"
                     gap={1}
                     display="flex"
                     alignItems="center"
                     justifyContent="center">
                     <Typography color="primary">{convertToIranianPrice(price)}</Typography>
                     <Typography component="p" color="primary">
                        هزار تومان
                     </Typography>
                  </Grid>
               </Grid>
            </Grid> */}
            <Stack direction={"row-reverse"} spacing={1} sx={{ mt: 3 }}>
               {loading ? (
                  <Skeleton
                     sx={{ borderRadius: "5px", backgroundColor: "#f1f1f1" }}
                     animation="wave"
                     height={60}
                     width="30%"
                     style={{ marginBottom: "4px" }}
                  />
               ) : (
                  <Button sx={{ flex: 2 }} variant="outlined" color="primary" fullWidth>
                     <Box component="img" src={MapIcon} />
                  </Button>
               )}
               {loading ? (
                  <Skeleton
                     sx={{ borderRadius: "5px", backgroundColor: "#f1f1f1" }}
                     animation="wave"
                     height={60}
                     width="90%"
                     style={{ marginBottom: "4px" }}
                  />
               ) : (
                  <Button sx={{ flex: 10 }} variant="contained" color="primary" fullWidth>
                     بیشتر...
                  </Button>
               )}
            </Stack>
         </CardContent>
      </Card>
   );
}
