import React from 'react';
import "./Sidebar.css";
import { Button, IconButton } from '@mui/material';
import { Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@mui/icons-material';
import SidebarOption from './SidebarOption';
import { useDispatch } from "react-redux";
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
        <Button onClick={() => dispatch(openSendMessage())} className="sidebar__compose" startIcon={<Add fontSize="large" />}>Compose</Button>
        <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
        <SidebarOption Icon={Star} title="Starred" number={54} />
        <SidebarOption Icon={LabelImportant} title="Snoozed" number={54} />
        <SidebarOption Icon={NearMe} title="Important" number={54} />
        <SidebarOption Icon={Note} title="Drafts" number={54} />
        <SidebarOption Icon={ExpandMore} title="More" number={54} />

        <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
              <IconButton>
                <Person />
              </IconButton>
              <IconButton>
                <Duo />
              </IconButton>
              <IconButton>
                <Phone />
              </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar