import { Avatar, Divider, ListItemIcon, MenuItem, MenuList, Paper, Typography, Popover } from "@mui/material";
import { useState } from "react";

import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function AccountMenu() {

    const [show, setShow] = useState(false);

    const [node, setNode]  = useState(null)

    function handleClose(params) {
        setShow(!show)
    }

    return(
        <>
            <Avatar alt="" src="" sx={{cursor: "pointer", marginRight: 1}} onClick={(e) => {setShow(!show); setNode(e.currentTarget)}}/>
            
            <MenuContent show={show} anchorEl={node} handleClose={handleClose}/>
        </>
    )
}

function MenuContent({show, anchorEl, handleClose}) {

    return(
        <>
            <Popover

                open={show}

                anchorEl={anchorEl}

                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}

                onClose={handleClose}
            >
                <MenuList>

                <MenuItem >
                    <Avatar sx={{width: 35, height: 35, marginRight: 1}}/>
                    <Typography sx={{color: "black"}}>
                        Minha conta
                    </Typography>
                </MenuItem>

                    <Divider />

                    <MenuItem >
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Configurações
                    </MenuItem>

                    <MenuItem >
                        <ListItemIcon>
                            <Logout fontSize="small" sx={{color: "red"}}/>
                        </ListItemIcon>
                        <Typography sx={{color: "red"}}>
                            Sair
                        </Typography>
                    </MenuItem>

                </MenuList>
            </Popover>
        </>
    )
}