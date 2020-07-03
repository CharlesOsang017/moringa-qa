import React, { useState } from 'react'
import './PostQuestion.styles.scss'
import CustomTextArea from '../CustomTextArea/CustomTextArea'

const PostQuestion = () => {
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)
    const [tags, setTags] = useState(null)
    return (
        <div className="PQC">
            <div className="post-question-container">
                <div className="post-question-main-title">Ask your Question</div>
                
                <div className="post-question-wrapper">
                    <div className="post-input-wrapper">
                        <div className="post-question-title">Title of your question</div>
                        <div className="post-question-title-description">
                        When people read the title they should be able to get enough information to understand if they want to click into the topic to read more or not. Choose a title which is short but descriptive. Moderators may edit your title if we think you have a really good topic that others should be able to find more easily.                            </div>
                        <div className="post-question-input">
                            <input type="text" name="post-title" />
                            </div>
                    </div>
                    <div className="post-input-wrapper">
                        <div className="post-question-title">Question details</div>
                        <div className="post-question-title-description">
                        Write a really good post - make sure you include all the details people need to respond and write clearly so people understand what you are saying.                             
                        </div>
                        <div className="post-question-input-textarea-wrapper">
                            <CustomTextArea/>
                            </div>
                    </div>
                    <div className="post-input-wrapper">
                        <div className="post-question-title">Tags</div>
                        <div className="post-question-title-description">
                        Tags are keywords to help others to find your topic more easily. Aim for 1-3 tags on a topic and try to use tags you have seen on other posts if they are applicable                            </div>
                        <div className="post-question-input">
                        <input type="text" name="question-tags" />
                            </div>
                    </div>
                </div>
                <div className="post-question-submit-button"><p>Post your question</p></div>
            </div>
            
        </div>
    )
}

export default PostQuestion
