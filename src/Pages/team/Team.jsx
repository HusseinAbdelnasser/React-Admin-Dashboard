import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();

  // field ==> Reqird
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      flex: 0.3,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "NAME",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "EMAIL",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "AGE", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "PHONE",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "ACCESS",
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              my: "10px",
              width: "85px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}

            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
      <Box sx={{ height: 600,width: "90%", mx: "auto" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Team;