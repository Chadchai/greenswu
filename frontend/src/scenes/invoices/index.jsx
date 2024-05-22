import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = (probs) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id",width: 30, headerName: "ID" },
    {
      field: "name",
      minWidth: 200,
      headerName: "รายการ",
      flex: 1,
      cellClassName: "name-column--cell",
    
    },
    {
      field: "Jan24",
      headerName: "Jan-24",
      flex: 1,
    },
    {
      field: "Feb24",
      headerName: "Feb-24",
      flex: 1,
    },
    {
      field: "Mar24",
      headerName: "Mar-24",
      flex: 1,
    },
    {
      field: "Apr24",
      headerName: "Apr-24",
      flex: 1,
    },
    {
      field: "May24",
      headerName: "May-24",
      flex: 1,
    },
    {
      field: "Jun24",
      headerName: "Jun-24",
      flex: 1,
    },
    {
      field: "Jul24",
      headerName: "Jul-24",
      flex: 1,
    },
    {
      field: "Aug24",
      headerName: "Aug-24",
      flex: 1,
    },
    {
      field: "Sep24",
      headerName: "Sep-24",
      flex: 1,
    },
    {
      field: "Oct24",
      headerName: "Oct-24",
      flex: 1,
    },
    {
      field: "Nov24",
      headerName: "Nov-24",
      flex: 1,
    },
    {
      field: "Dec24",
      headerName: "Dec-24",
      flex: 1,
    },
   
   
  ];

  return (
    <Box m="20px">
      <Header title={probs.title} subtitle="การเผาไหม้และการใช้สารเคมี" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
