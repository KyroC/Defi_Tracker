import { Drawer, Divider, List, ListItem} from "@mui/material"
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <DeleteIcon />
       <Divider />
       <List>
       <ListItem key="Dashboard">
          Dashboard
        </ListItem>
        <ListItem key="Markets">
          <Link to={`/Markets`}>
          Markets
          </Link>
        </ListItem>
        <ListItem key="My Accounts">
          My Accounts
        </ListItem>
       </List>
      </Drawer>
    )
}
export default Navbar;