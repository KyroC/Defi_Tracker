import {styled} from '@mui/material/styles'
import {Box, Grid, Paper, Card, CardActions, CardContent, Typography} from '@mui/material'

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
            sx={{
                ml:30,
                pt:3,
                px:2,
            }}>
            <Typography variant="h4">
                My Portfolio
            </Typography>
            <Grid 
              container 
              justifyContent="space-around"
              spacing={5}
              sx={{
                  width:1,
                  textAlign: 'center',
                  alignItems:'center',
              }}
                    >
                <Grid item xs={4}>
                    <Card >
                        <CardContent>
                            Portfolio Value:
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                    <CardContent>
                        Portfolio breakdown based on Coins held (Sort by highest)
                    </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 1 }}>
                        <CardContent>
                            Hollow Piechart showing how much value help in each asset
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Typography variant="h4">
                BTC Market
            </Typography>
            <Grid 
              container 
              justifyContent="space-around"
              spacing={5}
              sx={{
                  width:1,
                  textAlign: 'center',
                  alignItems:'center',
              }}
                    >
                <Grid item xs={4}>
                    <Card >
                        <CardContent>
                            Overview of BTC market 
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                    <CardContent>
                       Last 24 hrs/Last week/Last month
                    </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 1 }}>
                        <CardContent>
                           Some valuable data(Total shorts, big whale movements)
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        )
    }
export default Dashboard;