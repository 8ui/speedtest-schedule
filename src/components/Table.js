import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'date',
    headerName: 'Date',
    type: 'dateTime',
    width: 200,
  },
  {
    field: 'download',
    headerName: 'Download',
    type: 'number',
    width: 130,
  },
  {
    field: 'upload',
    headerName: 'Upload',
    type: 'number',
    width: 130,
  },
  {
    field: 'ping',
    headerName: 'Ping',
    type: 'number',
    width: 130,
  },
];

export default function DataTable({ data }) {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid showToolbar density="compact" rows={data} columns={columns} />
    </div>
  );
}
