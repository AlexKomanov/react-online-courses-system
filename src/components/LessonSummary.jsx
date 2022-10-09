import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const LessonSummary = (props) => {
    return (
        
<Card sx={{ maxWidth: 500, m: 'auto', mt: 3, mb: 3}}>
            <CardMedia
                component="img"
                height="100"
                image={`${props.course.courseAvatar}`}
            />
            <CardContent >

                <Typography gutterBottom variant="h5" component="div" fontFamily="serif" fontWeight="600">
                    <Link to={`/courses/${props.courseId}/lessons/${props.lesson.id}`} underline="none" color="inherit">
                    {props.lesson.id}. {props.lesson.title}
                    </Link>
                </Typography>

                <Typography variant="h6" color="text.secondary" component="div" fontFamily="serif" >
                    <Link to={`/courses/${props.courseId}/lessons/${props.lesson.id}`}  underline="none" color="inherit">
                    {props.lesson.description}
                    </Link>
                </Typography>
            </CardContent>

        </Card>
            
  

    
    )
}

export default LessonSummary