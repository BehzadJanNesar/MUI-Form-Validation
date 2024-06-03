import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function XDataGrid() {
   const columns: GridColDef<(typeof rows)[number]>[] = [
      {
         field: "id",
         headerName: "ID",
         width: 90,
      },
      {
         field: "full_name",
         headerName: "نام و نام خانوادگی",
         width: 160,
      },
      {
         field: "phone_number",
         headerName: "شماره تلفن همراه",
         width: 160,
         editable: true,
         type: "number",
      },
      {
         field: "age",
         headerName: "سن",
         width: 90,
         editable: true,
         type: "number",
      },
   ];

   const rows = [
      { id: 1, full_name: "بهزاد جان نثار", phone_number: "09037180223", age: 22 },
      { id: 2, full_name: "علیرضا جودت", phone_number: "09359227339", age: 22 },
      { id: 3, full_name: "مهران گلستانی", phone_number: "09125787836", age: 25 },
      { id: 4, full_name: "محسن جودت", phone_number: "09012777253", age: 28 },
      { id: 5, full_name: "علیرضا", phone_number: "09125787852", age: 12 },
      { id: 6, full_name: "نرگس", phone_number: "031254689", age: 25 },
      { id: 7, full_name: "مهدیار", phone_number: "091236547", age: 36 },
      { id: 8, full_name: "عباس", phone_number: "091236547", age: 17 },
      { id: 9, full_name: "حسین", phone_number: "09361365254", age: 20 },
      { id: 10, full_name: "امیر", phone_number: "09361236547", age: 14 },
   ];

   return (
      <DataGrid
         columns={columns}
         rows={rows}
         initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
         pageSizeOptions={[5]}
         checkboxSelection
         disableRowSelectionOnClick
      />
   );
}
