import React from 'react'
import VotingSystem from '../../VotingSystem/VotingSystem.component'
import Comments from '../../Comments/Comments.component'
import Answers from '../../Answers/Answers.component'
import PostAnswer from '../../PostAnswer/PostAnswer.component'

const RenderSingleQuestion = () => {
    return (
        <div className="question-item">
            <div className="question-header">
                <div className="user-wrapper">
                    <div className="user-image">
                        <svg width={53} height={53} viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5 0C11.872 0 0 11.872 0 26.5C0 41.128 11.872 53 26.5 53C41.128 53 53 41.128 53 26.5C53 11.872 41.128 0 26.5 0ZM26.5 7.95C30.899 7.95 34.45 11.501 34.45 15.9C34.45 20.299 30.899 23.85 26.5 23.85C22.101 23.85 18.55 20.299 18.55 15.9C18.55 11.501 22.101 7.95 26.5 7.95ZM26.5 45.58C19.875 45.58 14.0185 42.188 10.6 37.047C10.6795 31.7735 21.2 28.885 26.5 28.885C31.7735 28.885 42.3205 31.7735 42.4 37.047C38.9815 42.188 33.125 45.58 26.5 45.58Z" fill="#FE5B00" />
                        </svg>
                    </div>
                    <div className="user-details">
                        <p className="user-name">John Doe <span>(14)</span></p>
                        <p className="user-upvotes">
                            <span>
                                <svg width={13} height={14} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 7L1.06424 8.23375L5.28347 3.35125V14H6.79304V3.35125L11.0047 8.2425L12.0765 7L6.03825 0L0 7Z" fill="black" />
                                </svg>
                            </span>4.8k
        </p>
                    </div>
                </div>
                <div className="question-header-details">
                    <p className="title">What's the difference between Apache's Mesos and Google's Kubernetes</p>
                    <div className="question-data">
                        <div className="date-asked">
                            <p className="p"><span>Asked: </span>5 years, 7 months ago</p>
                        </div>
                        <div className="view-count">
                            <p className="p"><span>Viewed: </span>5 years, 7 months ago</p>
                        </div>
                    </div>
                </div>
                <div className="question-options">
                    <svg width={12} height={47} viewBox="0 0 12 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.232422 41.125V39.8857C0.232422 39.8551 0.247721 39.8245 0.27832 39.7939L0.324219 39.6104C0.507812 38.2946 1.08919 37.1701 2.06836 36.2368C3.04753 35.3035 4.17969 34.8063 5.46484 34.7451C6.90299 34.6227 8.17285 34.9364 9.27441 35.686C10.376 36.4357 11.1257 37.4837 11.5234 38.8301C11.554 38.8607 11.577 38.9066 11.5923 38.9678C11.6076 39.029 11.6229 39.0825 11.6382 39.1284C11.6535 39.1743 11.6611 39.2202 11.6611 39.2661C11.6611 39.312 11.6688 39.3656 11.6841 39.4268C11.6994 39.488 11.7147 39.5415 11.73 39.5874C11.7453 39.6333 11.7606 39.6868 11.7759 39.748C11.7912 39.8092 11.7988 39.8551 11.7988 39.8857V41.125L11.7759 41.2397L11.707 41.4004C11.5234 42.5938 11.0262 43.6265 10.2153 44.4985C9.40446 45.3706 8.40234 45.929 7.20898 46.1738C7.11719 46.2044 6.99479 46.235 6.8418 46.2656C6.75 46.2962 6.6888 46.3115 6.6582 46.3115H5.32715C5.23535 46.2809 5.17415 46.2503 5.14355 46.2197C3.9502 46.0361 2.93278 45.5465 2.09131 44.751C1.24984 43.9554 0.691406 42.9762 0.416016 41.8135C0.385417 41.7217 0.347168 41.5993 0.30127 41.4463C0.255371 41.2933 0.232422 41.1862 0.232422 41.125ZM11.7988 5.875V7.11426L11.7759 7.229L11.707 7.38965C11.5234 8.7054 10.9344 9.82992 9.93994 10.7632C8.94548 11.6965 7.80566 12.1937 6.52051 12.2549C5.57194 12.3161 4.68457 12.186 3.8584 11.8647C3.03223 11.5435 2.32845 11.0615 1.74707 10.4189C1.16569 9.77637 0.737305 9.01139 0.461914 8.12402C0.461914 8.03223 0.385417 7.69564 0.232422 7.11426V5.875C0.232422 5.8444 0.247721 5.7985 0.27832 5.7373L0.324219 5.59961C0.752604 3.24349 2.12956 1.68294 4.45508 0.917969C4.57747 0.88737 4.75342 0.841471 4.98291 0.780273C5.2124 0.719076 5.34245 0.688477 5.37305 0.688477H6.6582L6.7041 0.734375C6.7959 0.764974 6.8571 0.780273 6.8877 0.780273C8.08105 0.963867 9.10612 1.45345 9.96289 2.24902C10.8197 3.0446 11.3857 4.03906 11.6611 5.23242C11.6917 5.35482 11.7376 5.55371 11.7988 5.8291V5.875ZM11.7988 22.8574V24.1426L11.7529 24.2573L11.707 24.418C11.4928 25.7337 10.8885 26.8582 9.89404 27.7915C8.89958 28.7248 7.75977 29.222 6.47461 29.2832C5.00586 29.3444 3.71305 28.9772 2.59619 28.1816C1.47933 27.3861 0.752604 26.3151 0.416016 24.9688C0.385417 24.7852 0.324219 24.5098 0.232422 24.1426V22.8574L0.27832 22.7427L0.324219 22.582C0.507812 21.2663 1.10449 20.1418 2.11426 19.2085C3.12402 18.2752 4.27148 17.778 5.55664 17.7168C7.02539 17.6556 8.3182 18.0228 9.43506 18.8184C10.5519 19.6139 11.2786 20.6849 11.6152 22.0312C11.6458 22.2148 11.707 22.4902 11.7988 22.8574Z" fill="black" />
                    </svg>
                </div>
            </div>
            <div className="divider" />
            <div className="main-question-wrapper">
                <div className="voting-section">
                    <VotingSystem voteType="question" />
                </div>
                <div className="question-section">
                    <div className="question">
                        <p className="p">What exactly is the difference between Apache's Mesos and Google's Kubernetes? I
                        understand both
                        are
                        server cluster management software. Can anyone elaborate where the main differences are -
                        when
                        would
                        which framework be preferred?
                        Why would you want to use Kubernetes on top of Mesosphere?
        </p>
                    </div>
                    <div className="tags-wrapper">
                        <span className="tag">javascript</span>
                        <span className="tag">angular</span>
                        <span className="tag">reactjs</span>
                    </div>
                    <div className="divider" />
                    <div className="question-comments-wrapper">
                        <Comments />
                    </div>
                </div>
            </div>
            <div className="divider" />
                <Answers/>
            <div className="post-answer">
                <p className="title">Your answer</p>
                <div className="divider" />
                <div className="editor-wrapper">
                    <PostAnswer/>
                    <div className="submit-button">
                        <button className="button-primary">Submit Answer</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RenderSingleQuestion
