import React, { useState } from 'react'
import './Questions.styles.scss'
import RenderSingleQuestion from './RenderSingleQuestion/RenderSingleQuestion.component'


const Questions = () => {
    return (

        <div className="questions-wrapper">
            <RenderSingleQuestion />
        </div>


    )

}
export default Questions
