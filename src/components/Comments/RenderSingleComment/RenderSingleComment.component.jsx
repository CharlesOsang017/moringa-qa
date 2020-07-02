import React from 'react'
import VotingSystem from '../../VotingSystem/VotingSystem.component'

const RenderSingleComment = ({comment })=> {
    return (
            <div>
                <div className="question-comment">
                    <div className="comment-actions">
                        <div id="comment-voting-section" className="comment-vote-system">
                            <VotingSystem voteType="comment" votes={comment.votes} />
                        </div>

                    </div>
                    <div className="comment-section">
                        <div className="comment-main">
                            <div className="comment-string">
                                <p className="p">{comment.comment}</p>
                            </div>
                            <div className="comment-details">
                                <div className="comment-user"><a href="#" className="link">~ {comment.name}
                                    <span>({comment.cohort})</span></a></div>
                                <div className="comment-date">
                                    <span>{comment.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="divider" />
            </div>
    )
}

export default RenderSingleComment
