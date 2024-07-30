import {
   Card,
   CardContent,
   CardMedia,
   Typography,
   Button,
   Box,
   Chip,
   Grid,
   Stack,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

interface ItemStoreProps {
   img: string;
   title: string;
   subtitle: string;
   label1: string;
   label2: string;
   data1: string;
   data2: string;
}

export default function ItemStore({
   img,
   title,
   subtitle,
   label1,
   label2,
   data1,
   data2,
}: ItemStoreProps) {
   return (
      <Card sx={{ width: 350, mt: 3, marginInline: "auto", padding: "10px" }}>
         <CardMedia
            component="img"
            width="140"
            height="150"
            image={img}
            alt="Bruce's Tire & Auto Service"
            sx={{ borderRadius: "5px" }}
         />
         <CardContent sx={{ padding: "16px 0" }}>
            <Typography variant="h4" component="div">
               {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               {subtitle}
            </Typography>
            <Box sx={{ mt: 2, mb: 2 }}>
               <Chip
                  icon={<CheckCircleIcon color="primary" />}
                  label={label1}
                  sx={{ mr: 1, bgcolor: "#e6f8ff" }}
               />
               <Chip
                  icon={<DirectionsCarIcon color="primary" />}
                  label={label2}
                  sx={{ bgcolor: "#e6f8ff" }}
               />
            </Box>
            <Grid container spacing={1} alignItems="center">
               <Grid sx={{ display: "flex", alignItems: "center" }} item>
                  <AccessTimeIcon color="action" />
               </Grid>
               <Grid item>
                  <Typography variant="body2" color="text.secondary">
                     {data1}
                  </Typography>
               </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary">
               {data2}
            </Typography>
            <Stack direction={"row-reverse"} spacing={1} sx={{ mt: 2 }}>
               <Button sx={{ flex: 9 }} variant="contained" color="primary" fullWidth>
                  بررسی در دسترس بودن
               </Button>
               <Button
                  sx={{ flex: 3 }}
                  variant="outlined"
                  color="primary"
                  startIcon={<PhoneIcon />}
                  fullWidth>
                  تماس
               </Button>
            </Stack>
         </CardContent>
      </Card>
   );
}
