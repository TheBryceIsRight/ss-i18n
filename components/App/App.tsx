import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';


const App: React.FC = () => {
    return (
      <React.Fragment>
      <Grid container spacing={5} direction='column' alignItems='center' justify='center' >
        <Grid item>
        <Skeleton variant="rect" width={700} height={400} />
        </Grid>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' >
        <Grid item>
        <Skeleton variant="rect" width={180} height={200} />
        </Grid>
        <Grid item>
        <Skeleton variant="rect" width={180} height={200} />
        </Grid>
        <Grid item>
        <Skeleton variant="rect" width={180} height={200} />
        </Grid>
        <Grid item>
        <Skeleton variant="rect" width={180} height={200} />
        </Grid>
        <Grid item>
        <Skeleton variant="rect" width={180} height={200} />
        </Grid>
      </Grid>
      <br/>
      <br/>
      <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' >
        <Grid item>
        <Skeleton variant="rect" width={300} height={600} />
        </Grid>
        <Grid item>
        <Skeleton variant="rect" width={300} height={600} />
        </Grid>
        <Grid item>
        <Skeleton variant="rect" width={300} height={600} />
        </Grid>
      </Grid>
      </React.Fragment>
      
    );
  }
  
  export default App;