import * as React from 'react';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';

export default function CustomToolTip({ title, children }) {
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip
            disableFocusListener
            title={<Typography>{title}</Typography>}
          >
            {children}
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}
