import {styled} from '@mui/material/styles'
import {Box, Grid, Paper } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

function Dashboard(){
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2} direction="row" xs={12} md={4}>
                <Grid Item>
                    <Item>Item 1</Item>
                </Grid>
                <Grid Item>
                    Item 2
                </Grid>
            </Grid>
        </Box>
        )
    }
export default Dashboard;