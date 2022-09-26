import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const CourseSummary = (props) => {
    return (
        <>
        <Card sx={{ maxWidth: 600, m: 'auto', mt: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210210175213/JavaScriptTutorial.png"
            />
            <CardContent >

                <Typography gutterBottom variant="h5" component="div" fontFamily="serif" fontWeight="600">
                    <Link to={`/courses/${props.course.slug}`} underline="none" color="inherit">
                        {props.course.title}
                    </Link>
                </Typography>

                <Typography variant="h6" color="text.secondary" component="div" fontFamily="serif" >
                    <Link to={`/courses/${props.course.slug}`} underline="none" color="inherit">
                        {props.course.description}
                    </Link>
                </Typography>
            </CardContent>

        </Card>

        </>
    )
}

export default CourseSummary