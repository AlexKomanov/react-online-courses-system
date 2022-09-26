import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const LessonSummary = (props) => {
    return (
        <section key={props.lesson.id} className="summary">
            <div>
                <div className='title'>
                    <h2>
                        <Link className="no-underline cursor-pointer" to={`/courses/${props.courseId}/lessons/${props.lesson.id}`}>
                            {props.lesson.id}. {props.lesson.title}
                        </Link>
                    </h2>
                </div>
                <p>
                    <Link className="no-underline cursor-pointer" to={`/courses/${props.courseId}/lessons/${props.lesson.id}`}>
                        {props.lesson.description}
                    </Link>
                </p>
            </div>

        </section>
    )
}

export default LessonSummary