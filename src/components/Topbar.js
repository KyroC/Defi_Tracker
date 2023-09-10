import { Toolbar,AppBar } from "@mui/material";

let drawerWidth = 240

function Topbar(){
    return (
        <AppBar position="static" sx={{
            mt:0,
            ml:30,
            width: "calc(100vw - 240px)",
            background: '#FFFFFF',
        }}>
            <Toolbar
                sx={{
                   
                }}>
            </Toolbar>
        </AppBar>
    )
}
export default Topbar;