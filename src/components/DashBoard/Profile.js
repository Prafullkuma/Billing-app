import React,{useState} from 'react'
import {Button,Menu,MenuItem} from '@material-ui/core'

const Profile=({profile})=>{
      //Menu
      const [anchorEl, setAnchorEl] =useState(null);

      //Menu
      const handleClick=(event)=>{
        setAnchorEl(event.currentTarget);
      }

      const handleClose = () => {
        setAnchorEl(null);
      };
    return(
        <div style={{marginRight:'30px',float:'right'}}>
            <Button aria-controls="simple-menu" variant="contained" color="secondary" aria-haspopup="true" onClick={handleClick}>
                        View Profile
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                        <MenuItem>{profile.username}</MenuItem>
                        <MenuItem>{profile.address}</MenuItem>
                        <MenuItem>{profile.email}</MenuItem>
                        <MenuItem>{profile.businessName}</MenuItem>
                </Menu>
        </div>
    )
}
export default Profile