import {styled} from '@mui/material/styles'
import {Box, Grid, Paper, Card} from '@mui/material'

/*
const= styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  */

function Dashboard(){
    return (
        <Box
            sx={{ml:30}}>
            <Grid container spacing={2}
                    sx={{
                        width:1
                    }}
                    >
                <Grid item xs={4}>
                    xs=8
                </Grid>
                <Grid item xs={4}>
                    xs=4
                </Grid>
                <Grid item xs={4}>
                    xs=4
                </Grid>
                <Grid item xs={8}>
                    xs=8
                </Grid>
            </Grid>
        </Box>
        )
    }
export default Dashboard;