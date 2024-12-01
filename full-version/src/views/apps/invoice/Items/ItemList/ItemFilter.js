'use client';

import PropTypes from 'prop-types';
import * as React from 'react';
import Link from 'next/link';

// material-ui
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

// assets
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterListTwoTone';
import PrintIcon from '@mui/icons-material/PrintTwoTone';
import FileCopyIcon from '@mui/icons-material/FileCopyTwoTone';
import AddIcon from '@mui/icons-material/AddTwoTone';

// ==============================|| ITEMS LIST - FILTER ||============================== //

const ItemFilter = ({ products, setRows }) => {
  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    const newString = event?.target.value;
    setSearch(newString || '');

    if (newString) {
      const newRows = products?.filter((row) => {
        let matches = true;

        const properties = ['id', 'name', 'brand', 'categories', 'description', 'discount', 'gender', 'rating'];
        let containsQuery = false;

        properties.forEach((property) => {
          if (row[property].toString().toLowerCase().includes(newString.toString().toLowerCase())) {
            containsQuery = true;
          }
        });

        if (!containsQuery) {
          matches = false;
        }
        return matches;
      });
      setRows(newRows);
    } else {
      setRows(products);
    }
  };

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" spacing={2}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          )
        }}
        onChange={handleSearch}
        placeholder="Search items"
        value={search}
        size="small"
        sx={{ width: { xs: 1, sm: 'auto' } }}
      />
      <Stack direction="row" alignItems="center" spacing={1.25}>
        <Tooltip title="Copy">
          <IconButton size="large">
            <FileCopyIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Print">
          <IconButton size="large">
            <PrintIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Filter">
          <IconButton size="large">
            <FilterListIcon />
          </IconButton>
        </Tooltip>

        {/* items add & dialog */}
        <Tooltip title="Add Item">
          <Link href="/apps/invoice/items/add-item">
            <Fab color="primary" size="small" sx={{ boxShadow: 'none', width: 32, height: 32, minHeight: 32 }}>
              <AddIcon fontSize="small" />
            </Fab>
          </Link>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

ItemFilter.propTypes = {
  products: PropTypes.array,
  setRows: PropTypes.func
};

export default ItemFilter;
