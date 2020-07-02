import React,{useState} from 'react'
import RenderSingleComment from './RenderSingleComment/RenderSingleComment.component';
const Comments = () => {
    const [visibleComments, setVisibleComments] = useState(4);
    const comments = [
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
        {
            name: 'Mysticial',
            comment: "@SachinVerma It does, but when the array is that large, an even bigger factor likely comes into play - memory bandwidth. Memory is not flat. Accessing memory is very slow, and there is a limited amount of bandwidth. To over-simplify things, there's only so many bytes that can be transferred between CPU and memory in a fixed amount of time. Simple code like the one in this question will probably hit that limit even if it's slowed down by mispredictions. This doesn't happen with an array of 32768 (128KB) because it fits into the L2 cache of the CPU.",
            date: 'Jan 24 \'18 at 16:31',
            votes: 17,
            cohort: 14

        },
    ]
    const handleLoadMoreClick = () => {
        setVisibleComments(prevState => prevState + 4)
    };
    return(

        <div>
        {comments.slice(0, visibleComments).map((element, key) =>
            <RenderSingleComment key={key} comment={element} />
            )}

        <div style={{ display: visibleComments === comments.length && 'none' }} className="load-more-comments">
            <a onClick={() => visibleComments !== comments.length && handleLoadMoreClick()}>show <span className="bold">{comments.length - visibleComments}</span> more comments</a>
        </div>
    </div>
    )
}



export default Comments
