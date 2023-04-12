import * as React from 'react';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';

export default function CustomToolTip({ title, placement, children }) {
  return (
    <div>
      <Grid container justifyContent={placement}>
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
