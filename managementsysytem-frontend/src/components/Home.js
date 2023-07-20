import * as React from 'react';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

import '../styles/style.css';
import basketball from '../styles/images/basketball.jpeg';
import badminton from '../styles/images/badminton.jpeg';
import cricket from '../styles/images/cricket.jpeg';
import football from '../styles/images/football.jpeg'

export default function Home() {
    return (
        <>
            <div className='four d-flex align-items-center'>
                <div className="container my-5">
                    <div className='d-flex justify-content-center'>
                        <Link to="/equipment">
                            <Card className='mx-2 my-2' sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={cricket}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography className='text-center fw-bold' gutterBottom variant="h5" component="div">
                                            Cricket
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>

                        <Card className='mx-2 my-2' sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={football}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography className='text-center fw-bold' gutterBottom variant="h5" component="div">
                                        Football
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='d-flex justify-content-center'>

                        <Card className='mx-2 my-2' sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={basketball}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography className='text-center fw-bold' gutterBottom variant="h5" component="div">
                                        Basketball
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card className='mx-2 my-2' sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={badminton}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography className='text-center fw-bold' gutterBottom variant="h5" component="div">
                                        Badminton
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

const itemData = [
    {
        img: basketball,
        title: 'Breakfast',
    },
    {
        img: football,
        title: 'Burger',
    },
    {
        img: cricket,
        title: 'Camera',
    },
    {
        img: badminton,
        title: 'Coffee',
    },
];