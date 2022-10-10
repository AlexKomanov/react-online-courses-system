import React from 'react'
import { useNavigate } from 'react-router-dom'

const CompleteAndContinueButton = (props) => {

  const lessonId = props.lessonId;
  const navigate = useNavigate()
  const completeAndContinue = () => {
    navigate(`/courses/${props.courseId}/lessons/${props.lessonId}`)
  }
  const completeAndFinish = () => {
    navigate(`/courses/${props.courseId}`)
  }

  return (
    lessonId !== 1
      ? <button className='button primary' onClick={completeAndContinue}>Complete and Continue</button>
      : <button className='button primary' onClick={completeAndFinish}>FINISH COURSE</button>
  )
}

export default CompleteAndContinueButton