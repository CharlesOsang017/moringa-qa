import React,{useState} from 'react'

const VotingSystem  = ({ voteType, votes }) => {
    const [userVoted, setUserVoted] = useState(false);
    const [voteCount, setVoteCount] = useState(votes ? votes : 999);
    if (voteType === "question" || voteType === "answer") {
        return (
            <div className="voting-system">
                <div
                    onClick={
                        () => {
                            !userVoted && setVoteCount(voteCount + 1);
                            setUserVoted(true)
                        }
                    }
                    className="upvote-button">
                    <svg width="35" height="30" viewBox="0 0 35 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 29.5768L17.5 0.431427L35 29.5768H0Z" fill="#58741C" />
                    </svg>
                </div>
                <div className="vote-count">
                    <p className="p">
                        {voteCount.toString().length > 3 ? ((voteCount - (voteCount % 1000)) / 1000) + "k" : voteCount}
                    </p>
                </div>
                <div onClick={
                    () => {
                        !userVoted && setVoteCount(voteCount - 1);
                        setUserVoted(true)
                    }
                } className="downvote-button">
                    <svg width="35" height="30" viewBox="0 0 35 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M35 0.031098L17.5 29.1764L3.19481e-05 0.031098L35 0.031098Z" fill="#58741C" />
                    </svg>
                </div>
            </div>)

    } else if (voteType === "comment") {
        return (
            <div className="voting-section">
                <div
                    onClick={
                        () => {
                            !userVoted && setVoteCount(voteCount + 1);
                            setUserVoted(true)
                        }
                    }
                    className="comment-upvote">
                    <svg width="27" height="14" viewBox="0 0 27 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.427734 13.0345L13.4622 0L26.4967 13.0345H0.427734Z"
                            fill="#58741C" />
                    </svg>
                </div>
                <div className="comment-vote-system-count">
                    <p className="p">{voteCount.toString().length > 3 ? ((voteCount - (voteCount % 1000)) / 1000) + "k" : voteCount}</p>
                </div>
                <div
                    onClick={
                        () => {
                            !userVoted && setVoteCount(voteCount - 1);
                            setUserVoted(true)
                        }
                    }
                    className="comment-downvote">
                    <svg width="27" height="14" viewBox="0 0 27 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.4966 0.965523L13.4621 14L0.427629 0.965523L26.4966 0.965523Z"
                            fill="#58741C" />
                    </svg>
                </div>
            </div>
        )
    }
};
export default VotingSystem;
