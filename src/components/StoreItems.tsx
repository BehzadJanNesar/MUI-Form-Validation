import { Card, CardContent, CardMedia, Typography, Button, Box, Grid, Stack } from "@mui/material";
import Vector from "../../Public/Images/Vector.svg";
import CardImage from "../../Public/Images/CardImage.svg";
import OpenIcon from "../../Public/Images/openIcon.svg";
import ClockIcon from "../../Public/Images/clock-watch-svgrepo-com 4.svg";
import CallIcon from "../../Public/Images/callIcon.svg";
import Group from "../../Public/Images/Group.svg";
import MapIcon from "../../Public/Images/MapIcon.svg";

interface ItemStoreProps {
   title: string;
   subtitle: string;
   data1: string;
   data2: string;
   rate: string;
   phone_number: string;
   repair_service: string;
   price: string;
}

export default function ItemStore({
   title,
   subtitle,
   data1,
   data2,
   phone_number,
   rate,
   repair_service,
   price,
}: ItemStoreProps) {
   return (
      <Card sx={{ mt: 3, marginInline: "auto", padding: "30px", boxShadow: "unset" }}>
         <CardMedia
            component="img"
            width="360px"
            height="180px"
            image={CardImage}
            alt="Bruce's Tire & Auto Service"
            sx={{ borderRadius: "5px" }}
         />
         <CardContent sx={{ padding: 0, marginTop: "10px", borderBottom: "1px solid #6C6C6C4A" }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={0.5}>
               <Typography variant="h3" component="div">
                  {title}
               </Typography>
               <Box component="div" display="flex" alignItems="center" gap={0.5}>
                  <Typography component="p" variant="h3" color="#424242" className="font-[18px]">
                     {rate}
                  </Typography>
                  <Box component="img" src={Vector} sx={{ paddingBottom: "5px" }} />
               </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
               {subtitle}
            </Typography>
            <Grid container spacing={1} alignItems="center" mb={0.5}>
               <Grid sx={{ display: "flex", alignItems: "center" }} item>
                  <Box component="img" src={ClockIcon} />
               </Grid>
               <Grid item>
                  <Typography variant="body2" color="text.secondary">
                     {data1}
                  </Typography>
               </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center" mb={0.5}>
               <Grid sx={{ display: "flex", alignItems: "center" }} item>
                  <Box component="img" src={OpenIcon} />
               </Grid>
               <Grid item>
                  <Typography variant="body2" color="text.secondary">
                     {data2}
                  </Typography>
               </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center" mb={0.5}>
               <Grid sx={{ display: "flex", alignItems: "center" }} item>
                  <Box component="img" src={CallIcon} />
               </Grid>
               <Grid item>
                  <Typography variant="body2" color="text.secondary">
                     {phone_number ? phone_number : "شماره همراه ندارد"}
                  </Typography>
               </Grid>
            </Grid>
            <Grid container mt={3}>
               <Typography variant="h3" color="primary" mb={0.5}>
                  {repair_service}
               </Typography>
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
                     <Typography color="primary">{price}</Typography>
                     <Typography component="p" color="primary">
                        هزار تومان
                     </Typography>
                  </Grid>
               </Grid>
            </Grid>
            <Stack direction={"row-reverse"} spacing={1} sx={{ mt: 3 }}>
               <Button sx={{ flex: 2 }} variant="outlined" color="primary" fullWidth>
                  <Box component="img" src={MapIcon} />
               </Button>
               <Button sx={{ flex: 10 }} variant="contained" color="primary" fullWidth>
                  بیشتر...
               </Button>
            </Stack>
         </CardContent>
      </Card>
   );
}
