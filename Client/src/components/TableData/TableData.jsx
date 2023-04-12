import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Button } from '@mui/material';
import CustomToolTip from '../ToolTip/CustomToolTip';
import { DetailsModal } from './DetailsModal';

const columns = [
  {
    field: 'avatar',
    headerName: '',
    width: 100,
    renderCell: (params) => (
      <Avatar alt={params.row.firstName} src={params.row.avatar} />
    ),
  },

  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'email', headerName: 'Email', width: 250 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  { field: 'location', headerName: 'Location', width: 250 },
  { field: 'phoneNumber', headerName: 'Phone', width: 150 },
];

const firstNames = [
  'Olivia',
  'Liam',
  'Emma',
  'Noah',
  'Ava',
  'William',
  'Sophia',
  'James',
  'Isabella',
  'Benjamin',
  'Mia',
  'Lucas',
  'Charlotte',
  'Henry',
  'Amelia',
  'Alexander',
  'Evelyn',
  'Michael',
  'Abigail',
  'Ethan',
  'Elizabeth',
  'Daniel',
  'Harper',
  'Matthew',
  'Ella',
  'Aiden',
  'Grace',
  'Owen',
  'Chloe',
  'David',
  'Victoria',
];
const lastNames = [
  'Smith',
  'Johnson',
  'Brown',
  'Lee',
  'Jones',
  'Miller',
  'Davis',
  'Garcia',
  'Rodriguez',
  'Martinez',
  'Hernandez',
  'Lopez',
  'Jackson',
  'Adams',
  'Baker',
  'Perez',
  'Moore',
  'Bailey',
  'Williams',
  'Wilson',
  'Anderson',
  'Thomas',
  'Taylor',
  'Martin',
  'Thompson',
  'Allen',
  'Clark',
  'Robinson',
  'Walker',
  'White',
];

const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];
const getRandomAge = () => Math.floor(Math.random() * 9) + 3;
const getRandomLocation = () =>
  `${Math.floor(Math.random() * 10000) + 100} ${getRandomElement([
    'Main',
    'Broadway',
    'St-Laurent',
    'St-Hubert',
  ])} Street, ${getRandomElement(['Montreal', 'Laval'])}, QC`;
const getRandomPhoneNumber = () =>
  `${getRandomElement(['514', '450'])}-${
    Math.floor(Math.random() * 900) + 100
  }-${Math.floor(Math.random() * 9000) + 1000}`;
const getRandomEmail = (firstName, lastName) =>
  `${firstName.toLowerCase()}${lastName.toLowerCase()}@${getRandomElement([
    'gmail',
    'funstack',
    'outlook',
  ])}.com`;
const getRandomAvatar = (id) => `https://i.pravatar.cc/150?img=${id}`;

const students = [];

for (let i = 0; i < 30; i++) {
  const id = i + 1;
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  const age = getRandomAge();
  const location = getRandomLocation();
  const phoneNumber = getRandomPhoneNumber();
  const email = getRandomEmail(firstName, lastName);
  const avatar = getRandomAvatar(id);

  students.push({
    id,
    firstName,
    lastName,
    age,
    location,
    phoneNumber,
    email,
    avatar,
  });
}

export default function TableData() {
  const [filter, setFilter] = useState('');

  const [selectedData, setSelectedData] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleRowClick = (rowData) => {
    setSelectedData(rowData);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedData('');
    setModalOpen(false);
  };

  const filteredRows = students.filter(
    (row) =>
      row.firstName.toLowerCase().includes(filter.toLowerCase()) ||
      row.lastName.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div style={{ height: 400, width: '80%' }}>
      <CustomToolTip title="Find your friends">
        <TextField
          label="Search"
          variant="outlined"
          value={filter}
          onChange={handleFilterChange}
          style={{ marginBottom: 16 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </CustomToolTip>

      <DataGrid
        sx={{ border: 2, borderColor: 'divider' }}
        rows={filteredRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        onRowClick={(rowData) => handleRowClick(rowData.row)}
      />
      <DetailsModal
        open={modalOpen}
        handleClose={handleModalClose}
        selectedData={selectedData}
      />
    </div>
  );
}
