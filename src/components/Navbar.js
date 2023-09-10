import { Drawer, Divider, List, ListItem} from "@mui/material"
import { Link } from 'react-router-dom';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';

let drawerWidth = 240

function Navbar(){
    return (
      <Drawer
        PaperProps= {{
          sx: {
            width:drawerWidth
          }
        }}
        variant = "permanent"
        anchor = "left"
        >
        <QueryStatsOutlinedIcon />
        Defi Wallet
       <Divider />
       <List>
        <ListItem key="Dashboard">
          <Link to ={`/`}>
            Dashboard
          </Link>
        </ListItem>

        <ListItem key="Markets">
          <Link to={`/Markets`}>
          Markets
          </Link>
        </ListItem>
        <ListItem key="My Accounts">
          <Link to={`/Wallets`}>
            My Accounts
          </Link>
        </ListItem>
       </List>
      </Drawer>
    )
}
export default Navbar;