import React from "react";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

interface CommonTableProps<T> {
  data: T[];
  columns: GridColDef[];
  onRowClick?: (row: T) => void;
  selectedRowId?: number | null;
  pageSize?: number;
}

export default function CommonTable<T extends { id: number }>({
  data,
  columns,
  onRowClick,
  selectedRowId,
  pageSize = 5,
}: CommonTableProps<T>) {
  
  const handleRowClick: GridEventListener<"rowClick"> = (params) => {
    if (onRowClick) {
      const rowData = data.find((row) => row.id === params.id);
      if (rowData) {
        onRowClick(rowData);
      }
    }
  };

  return (
    <Paper sx={{ height: "auto", width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSizeOptions={[pageSize]}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize } },
        }}
        autoHeight
        onRowClick={handleRowClick}
        getRowClassName={(params) =>
          params.id === selectedRowId ? "selected-row" : ""
        }
        sx={{
          "& .selected-row": {
            backgroundColor: "#f0f4fc !important",
            cursor: "pointer",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#9EA7A9",
            color: "black",
            fontSize: "16px",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-cell": {
            borderRight: "1px solid #d3d3d3",
          },
          "& .MuiDataGrid-columnHeader": {
            borderRight: "1px solid #d3d3d3",
          },
          "& .MuiDataGrid-virtualScroller": {
            minHeight: data.length < pageSize ? `${data.length * 52}px` : "260px",
          },
        }}
      />
    </Paper>
  );
}
