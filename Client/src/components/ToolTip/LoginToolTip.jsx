import * as React from 'react';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';

export default function LoginToolTip({ children }) {
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip
            disableFocusListener
            title={
              <Typography>Click this button to access FunStack</Typography>
            }
          >
            {children}
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}
