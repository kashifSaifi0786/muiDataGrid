import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";

const columns = [
  { field: "name", headerName: "Name", width: 150 },
  { field: "username", headerName: "Username", width: 110 },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "address",
    headerName: "Address",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 190,
    valueGetter: (params) =>
      `${params.row.address.suite || ""} ${params.row.address.street || ""}`,
  },
  {
    field: "city",
    headerName: "City",
    width: 140,
    valueGetter: (params) => `${params.row.address.city || ""} `,
  },
  { field: "phone", headerName: "Phone", width: 170 },
  { field: "website", headerName: "Website", width: 110 },
  {
    field: "company",
    headerName: "Company",
    valueGetter: (params) => `${params.row.company.name || ""} `,
    width: 150,
  },
];

export default function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
