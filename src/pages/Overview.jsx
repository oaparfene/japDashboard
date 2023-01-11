import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PropTypes } from "prop-types";

const WorkLoadSymbol = (props) => {
  switch (props.row.workload) {
    case "1":
      return (
        <Box
          sx={{
            bgcolor: "green",
            borderRadius: "16px",
            height: "32px",
            width: "32px",
          }}
        ></Box>
      );
    case "2":
      return (
        <Box
          sx={{
            bgcolor: "#ffc107",
            borderRadius: "16px",
            height: "32px",
            width: "32px",
          }}
        ></Box>
      );
    case "3":
      return (
        <Box
          sx={{
            bgcolor: "red",
            borderRadius: "16px",
            height: "32px",
            width: "32px",
          }}
        ></Box>
      );
    default:
      return <></>;
  }
};

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "country",
    headerName: "Country",
    width: 150,
    editable: true,
  },
  {
    field: "site_location",
    headerName: "Site Location",
    width: 150,
    editable: true,
  },
  {
    field: "workload",
    headerName: "Workload",
    width: 50,
    renderCell: WorkLoadSymbol,
  },
  {
    field: "level",
    headerName: "Level",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "tasks",
    headerName: "Tasks",
    width: 150,
    editable: true,
  },
];

const Overview = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://127.0.0.1:8090/api/collections/ped_cell/records"
      );
      const data = await response.json();
      console.log(data);
      const newData = data["items"].map((entry) => {
        return {
          id: entry["id"],
          country: entry["country"],
          site_location: entry["site_location"],
          workload: entry["workload"],
          level: entry["level"],
          tasks: entry["ped_tasks"],
        };
      });
      console.log(newData);
      setRows(newData);
    };
    fetchData();
  }, []);

  const handleSelect = (selectionModel, details) => {
    alert(selectionModel);
    console.log(details);
  };

  return (
    <Box sx={{ height: 660, width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              PED Cells:
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
            <label style={{color: "black"}}>9: </label>
            <label style={{color: "green"}}>2, </label>
            <label style={{color: "#ffc107"}}>3, </label>
            <label style={{color: "red"}}>4 </label>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              PED Tasks:
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              <label style={{color: "black"}}>8</label>
            </Typography>
          </CardContent>
        </Card>
        
      </div>
      <br />
      <div>Overview:</div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        onSelectionModelChange={handleSelect}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};

export default Overview;
