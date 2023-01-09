import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
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
    field: "level",
    headerName: "Level",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "geo_area_expertise",
    headerName: "Geographic Area Expertise",
    width: 150,
    editable: true,
  },
  {
    field: "sensor_type",
    headerName: "Sensor Type",
    width: 150,
    editable: true,
  },
  {
    field: "imagery_type",
    headerName: "Imagery Type",
    width: 150,
    editable: true,
  },
  {
    field: "orbat_expertise",
    headerName: "ORBAT Expertise",
    width: 150,
    editable: true,
  },
];

const PED_Cell = () => {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://127.0.0.1:8090/api/collections/ped_cell/records"
      );
      const data = await response.json();
      const newData = data["items"].map((entry) => {
        return {
          id: entry["id"],
          country: entry["country"],
          site_location: entry["site_location"],
          level: entry["level"],
          geo_area_expertise: entry["geo_area_expertise"],
          sensor_type: entry["sensor_type"],
          imagery_type: entry["imagery_type"],
          orbat_expertise: entry["orbat_expertise"],
        };
      })
      console.log(newData)
      setRows(newData);
    }
    fetchData();

  }, []);

  const handleSelect = (selectionModel, details) => {
    alert(selectionModel);
    console.log(details);
  };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <div>PED Cells:</div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
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

export default PED_Cell;