import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import hospitalimg from '../Assets/hospital.jpg';
import { useState } from 'react';



function DonateCard() {
    const theme = useTheme();

    const [like, setLike] = useState(false)



    return (
        <div>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            PushpaGiri Hospital
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Mac Miller
                        </Typography>
                    </CardContent>
                    {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </Box> */}
                    <div className='p-2 w-100 d-flex justify-content-center align-items-center  ' >
                        <button className='btn btn-primary me-3'>Donate</button>
                        <div>
                            {
                                like === true ?
                                    <i onClick={() => setLike(false)} style={{ fontSize: 25,color:'#009cc34e' }} className="ri-heart-2-fill"> </i> :
                                     <i onClick={() => setLike(true)} style={{ fontSize: 25 }} className="ri-heart-2-line"></i>
                            }
                        </div>
                    </div>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={hospitalimg}
                    alt="Live from space album cover"
                />
            </Card>

        </div>

    )
}

export default DonateCard
