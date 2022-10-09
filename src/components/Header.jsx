import React from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" color='primary' >

                <Toolbar>
                    <ComputerOutlinedIcon size="large" color='inherit' sx={{ mr: 2 }} />

                    <Typography variant="h6" component="div"
                        sx={{
                            mr: 2, fontFamily: 'serif', fontSize: { md: 23, xs: 16 },
                            fontWeight: 600, letterSpacing: '.2rem',
                            flexGrow: 1, color: 'inherit',

                        }} >
                        <Link href="/" underline="none" color="inherit">
                            Geek of Automation
                        </Link>
                    </Typography>

                    <IconButton color='inherit' size="large" sx={{ mr: 0.5 }} href="https://github.com/AlexKomanov/react-online-courses-system" target="_blank">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton color='inherit' size="large" sx={{ mr: 0.5 }} href="https://www.youtube.com/channel/UCtkgFDoX3_VaJJ9Aj0EEZxg" target="_blank">
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton color='inherit' size="large" sx={{ mr: 0.5 }} href="https://www.facebook.com/akomanov" target="_blank">
                        <FacebookOutlinedIcon />
                    </IconButton>
                    <IconButton color='inherit' size="large" sx={{ mr: 0.5 }} href="https://www.linkedin.com/in/alexander-komanov-88b138158/" target="_blank">
                        <LinkedInIcon />
                    </IconButton>


                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Header