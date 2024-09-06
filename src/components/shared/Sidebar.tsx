"use client"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useState } from 'react';
import { Collapse } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 320, bgcolor: '#22313f', padding: 2, height: '100%' }}>
            <List component="nav" aria-label="main mailbox folders" className='space-y-1'>
                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    sx={{
                        color: selectedIndex === 0 ? '#fff' : '#C0C0C0', // Active/Inactive text color
                        bgcolor: selectedIndex === 0 ? '#34495e !important' : 'inherit', // Active background color
                        '&:hover': {
                            bgcolor: '#1E3A8A', // Hover color
                        },
                        borderRadius: 5
                    }}
                >
                    <ListItemIcon>
                        <InboxIcon sx={{ color: selectedIndex === 0 ? '#fff' : '#C0C0C0' }} /> {/* Change icon color */}
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItemButton>

                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                    sx={{
                        color: selectedIndex === 1 ? '#fff' : '#C0C0C0',
                        bgcolor: selectedIndex === 1 ? '#34495e !important' : 'inherit',
                        '&:hover': {
                            bgcolor: '#1E3A8A',
                        },
                        borderRadius: 5
                    }}
                >
                    <ListItemIcon>
                        <DraftsIcon sx={{ color: selectedIndex === 1 ? '#fff' : '#C0C0C0' }} />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>

                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => {
                        handleClick();
                        handleListItemClick(event, 2);
                    }}
                    sx={{
                        color: selectedIndex === 2 ? '#fff' : '#C0C0C0',
                        bgcolor: selectedIndex === 2 ? '#34495e !important' : 'inherit',
                        '&:hover': {
                            bgcolor: '#1E3A8A',
                        },
                        borderRadius: 5
                    }}
                >
                    <ListItemIcon>
                        <InboxIcon sx={{ color: selectedIndex === 2 ? '#fff' : '#C0C0C0' }} />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: '#C0C0C0', '&:hover': { bgcolor: '#1E3A8A', color: '#fff' } }}>
                            <ListItemIcon>
                                <StarBorder sx={{ color: '#C0C0C0' }} />,
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <Divider sx={{ bgcolor: 'white' }} />
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                    sx={{
                        color: selectedIndex === 3 ? '#fff' : '#C0C0C0',
                        bgcolor: selectedIndex === 3 ? '#34495e !important' : 'inherit',
                        '&:hover': {
                            bgcolor: '#1E3A8A',
                        },
                        borderRadius: 5
                    }}
                >
                    <ListItemText primary="Trash" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                    sx={{
                        color: selectedIndex === 4 ? '#fff' : '#C0C0C0',
                        bgcolor: selectedIndex === 4 ? '#34495e !important' : 'inherit',
                        '&:hover': {
                            bgcolor: '#1E3A8A',
                        },
                        borderRadius: 5
                    }}
                >
                    <ListItemText primary="Spam" />
                </ListItemButton>
            </List>
        </Box>
    );
};

export default Sidebar;
