import React from 'react'
import Comments from '../Comments/Comments.component'
import VotingSystem from '../VotingSystem/VotingSystem.component'
import Highlight from 'react-highlight.js'

const Answer = () => {
    const code1 =`this.setState(prevState =&gt;{"{"}{"\n"}return{"{"}{"\n"}...prevState,{"\n"}counter : prevState.counter +1{"\n"}{"}"}{"\n"}{"}"}){"\n"}this.setState({"{"}counter : 2{"}"}){"\n"}{"\n"}{"                            "}

    `
    const code2 =`
    *?php

// Our custom error handler
function nettuts_error_handler($number, $message, $file, $line, $vars){
	$email = "
		<p*/}An error ($number) occurred on line{"\n"}{"\t"}{"\t"}<strong>$line</strong> and in the <strong>file: $file.</strong>{"\n"}{"\t"}{"\t"}<p> $message </p>";{"\n"}{"\n"}{"\t"}$email .= "<pre>" . print_r($vars, 1) . "</pre>";
                $headers = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
                // Email the error to someone...
                error_log($email, 1, 'you@youremail.com', $headers);
                // Make sure that you decide how to respond to errors (on the user's side)
                // Either echo an error message, or kill the entire project. Up to you...
                // The code below ensures that we only "die" if the error was more than
                // just a NOTICE.
                if ( ($number !== E_NOTICE) &amp;&amp; ($number &lt; 2048) ) {'{'} die("There was an error. Please try
                again later."); {'}'} {'}'} // We should use our custom function to handle errors.
                set_error_handler('nettuts_error_handler'); // Trigger an error... (var doesn't
                exist) echo $somevarthatdoesnotexist;

`
    return (
            <div className="main-answer-wrapper">
                <div className="answer-title">
                    <p className="title">Answers</p>
                </div>
                <div className="answer-item">
                    <div className="answer-actions">
                        <VotingSystem voteType="answer" />
                    </div>
                    <div className="answer-content">
                        <div className="answer-details-container">
                            <div className="p user-typed-answer">Both signatures can be used, the only difference is that if you need to
                            change
                            your state based
                            on the previous state you should use this.setState(function) which will provide for you
                            a
                            snapshot(prevState) from the previous state. But if the change does not rely on any
                            other
            previous value, than a shorter version is recommended <span className="code-snippet">this.setState({'{'}prop: newValue{'}'})</span>

                              <Highlight language='javascript'>{code1}

                              </Highlight>
            After this you could clone the repo on your clients as it is supposed to work, but I
            found
            that some clients (namely git-gui) will fail to clone a repo that is completely empty.
            To
            work around this you need to run cd <span className="code-snippet">
                                    &lt;<code>your_project</code>&gt;
            </span>.git &amp;&amp; touch &amp;&amp; git add &amp;&amp;
            git commit &amp;&amp; git push origin master. (Note that you might need to configure your
            username
            and email for that machine's git if you hadn't done so in the past. The actual commands
            to
            run will be in the error message you get so I'll just omit them.)
            <Highlight language='php'>{code2}
            </Highlight>
            </div>
                            <div className="answer-more-details">
                                <div className="answer-user-details">
                                    <div className="answer-user-name">
                                        <a className="user-name" href="#">Alex Macharia <span>(14)</span></a>
                                    </div>
                                    <div className="date">4 years 6 months ago</div>
                                </div>
                                <div className="answer-options-button">
                                    <svg width={30} height={30} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 10H18V8H0V10ZM0 14H18V12H0V14ZM0 6H18V4H0V6ZM0 0V2H18V0H0Z" fill="#58741C" />
                                    </svg>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="question-comments-wrapper">
                               <Comments/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Answer
