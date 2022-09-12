import React from 'react'
import { Link } from 'react-router-dom'

const CourseSummary = (props) => {
  return (
    <section key={props.course.id} className="summary">
        <div>
            <div className='title'>
                <h2>
                    <Link className='no-underline cursor-pointer' to={`/courses/${props.course.slug}`}>
                        {props.course.title}
                    </Link>
                </h2>
            </div>
            <p>
            <Link className='no-underline cursor-pointer' to={`/courses/${props.course.slug}`}>
                        {props.course.description}
                    </Link>
            </p>
        </div>

    </section>
  )
}

export default CourseSummary