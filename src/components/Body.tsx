import { Products } from './Products';
import { Grid } from '@mantine/core';

export default function Body(){
    return (
        <Grid>
          <Grid.Col lg={3}>
          <Grid.Col lg={1}>s</Grid.Col>
          <Grid.Col lg={1}>cf</Grid.Col>
          </Grid.Col>
          <Grid.Col lg={7}><Products /></Grid.Col>
        </Grid>
      );
}