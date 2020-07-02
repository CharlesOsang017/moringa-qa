import React from 'react';
import * as firebase from 'firebase';
import './Login.styles.scss';


const ButtonComponent =({backgroundColor,text,icon, onButtonClick})=>(
    <div onClick={onButtonClick} className="social-button" style={{backgroundColor,color:backgroundColor==='#FCFCFC' ? 'black':'white'}}><span>{icon}</span><p>{text}</p></div>


);

const Login = ()=>{
const [currentUser,setUser]=React.useState(null);
const [userInputDetails,setUserInputDetails]=React.useState({
    username:'',
    password:''
});
const [emailIsInValid,setEmailIsInValid]=React.useState(false);
const config = {
    apiKey: "AIzaSyAOceiYHGnZIWla0vcd1QG8BIf2tif8upI",
    authDomain: "moringa-qa.firebaseapp.com",
    databaseURL: "https://moringa-qa.firebaseio.com",
    projectId: "moringa-qa",
    storageBucket: "moringa-qa.appspot.com",
    messagingSenderId: "572067118483",
    appId: "1:572067118483:web:9722c36fdf776c28087c66"
};
!firebase.apps.length? firebase.initializeApp(config).firestore(): firebase.app().firestore();
const auth = firebase.auth();
const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
const signInWithGoogle = ()=>auth.signInWithPopup(provider).then(function(result) {

    var token = result.credential.accessToken;
    var user = result.user;
    setUser(user);
    console.log(user);

}).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    // ...
});


const socialLoginButtons =[
    {
        text:'Sign in with Google',
        icon:<svg width="30" height="30" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.7023 19.6646H41.1248V19.5833H23.4998V27.4167H34.5674C32.9527 31.9766 28.614 35.25 23.4998 35.25C17.0109 35.25 11.7498 29.9889 11.7498 23.5C11.7498 17.0111 17.0109 11.75 23.4998 11.75C26.4951 11.75 29.2201 12.8799 31.295 14.7257L36.8341 9.18653C33.3365 5.92689 28.6581 3.91666 23.4998 3.91666C12.6849 3.91666 3.9165 12.6851 3.9165 23.5C3.9165 34.3149 12.6849 43.0833 23.4998 43.0833C34.3147 43.0833 43.0832 34.3149 43.0832 23.5C43.0832 22.1869 42.948 20.9052 42.7023 19.6646Z" fill="#FFC107"/>
            <path d="M6.17432 14.3849L12.6084 19.1035C14.3494 14.7932 18.5657 11.75 23.4997 11.75C26.495 11.75 29.22 12.8799 31.2948 14.7257L36.834 9.18653C33.3364 5.92689 28.6579 3.91666 23.4997 3.91666C15.9777 3.91666 9.45452 8.1633 6.17432 14.3849Z" fill="#FF3D00"/>
            <path d="M23.5 43.0833C28.5584 43.0833 33.1546 41.1475 36.6296 37.9995L30.5686 32.8706C28.5364 34.4161 26.0531 35.252 23.5 35.25C18.4064 35.25 14.0814 32.0021 12.452 27.4695L6.06592 32.3899C9.30696 38.7319 15.8889 43.0833 23.5 43.0833Z" fill="#4CAF50"/>
            <path d="M42.7024 19.6646H41.125V19.5833H23.5V27.4167H34.5675C33.7952 29.5869 32.4039 31.4833 30.5657 32.8716L30.5686 32.8697L36.6296 37.9985C36.2008 38.3882 43.0833 33.2917 43.0833 23.5C43.0833 22.1869 42.9482 20.9052 42.7024 19.6646Z" fill="#1976D2"/>
        </svg>
        ,
        backgroundColor:'#FCFCFC'
    },
    {
        text:'Sign in with Facebook',
        icon:<svg width="30" height="30" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.9501 2.35001H7.0501C4.4651 2.35001 2.3501 4.46501 2.3501 7.05001V39.95C2.3501 42.5374 4.4651 44.65 7.0501 44.65H23.5001V28.2H18.8001V22.3838H23.5001V17.5663C23.5001 12.4809 26.3483 8.90886 32.3502 8.90886L36.5872 8.91356V15.0353H33.7743C31.4384 15.0353 30.5501 16.7884 30.5501 18.4146V22.3861H36.5849L35.2501 28.2H30.5501V44.65H39.9501C42.5351 44.65 44.6501 42.5374 44.6501 39.95V7.05001C44.6501 4.46501 42.5351 2.35001 39.9501 2.35001Z" fill="white"/>
        </svg>
        ,
        backgroundColor:'#3B5998'
    },
    {
        text:'Sign in with Twitter',
        icon:<svg width="30" height="30" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.4478 15.6608C38.4733 16.0035 38.4733 16.3443 38.4733 16.685C38.4733 27.1131 30.5361 39.1295 16.0308 39.1295C11.5618 39.1295 7.41017 37.835 3.9165 35.5868C4.551 35.6593 5.162 35.6848 5.82196 35.6848C9.37241 35.6933 12.8223 34.5061 15.6156 32.3145C13.9695 32.2847 12.3737 31.7416 11.0512 30.761C9.72864 29.7804 8.74533 28.4113 8.23855 26.8448C8.72617 26.9173 9.21575 26.9663 9.72884 26.9663C10.4358 26.9663 11.1467 26.8683 11.8066 26.698C10.0202 26.3373 8.41376 25.3689 7.26059 23.9576C6.10742 22.5463 5.47865 20.7792 5.48121 18.9567V18.8588C6.53284 19.4443 7.75288 19.8105 9.04538 19.8595C7.96259 19.1399 7.07475 18.1636 6.46104 17.0175C5.84734 15.8714 5.52687 14.5913 5.52821 13.2912C5.52821 11.8264 5.91792 10.483 6.60138 9.31188C8.58348 11.75 11.0556 13.7447 13.8577 15.1666C16.6597 16.5886 19.7292 17.4061 22.8673 17.5663C22.7459 16.9788 22.6715 16.3697 22.6715 15.7587C22.6709 14.7227 22.8746 13.6967 23.2709 12.7394C23.6671 11.7822 24.2481 10.9124 24.9807 10.1798C25.7133 9.4472 26.5831 8.86618 27.5403 8.46995C28.4976 8.07371 29.5236 7.87003 30.5596 7.87055C32.8313 7.87055 34.8817 8.8223 36.323 10.3615C38.089 10.02 39.7825 9.37537 41.3285 8.45609C40.7399 10.2789 39.5068 11.8246 37.8603 12.8036C39.4265 12.6249 40.9573 12.2131 42.4017 11.5816C41.3229 13.1543 39.9861 14.5335 38.4478 15.6608Z" fill="white"/>
        </svg>
        ,
        backgroundColor:'#00ACEE'
    },
    {
        text:'Sign in with Github',
        icon:<svg width="30" height="30" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.5002 1.95835C17.8474 1.90091 12.403 4.0902 8.36368 8.04509C4.32433 12 2.0205 17.3968 1.9585 23.0496C1.98028 27.5169 3.41734 31.8623 6.06329 35.4618C8.70923 39.0613 12.4279 41.7295 16.6852 43.0834C17.7622 43.2792 18.1539 42.6329 18.1539 42.065V38.4813C12.1614 39.7542 10.8885 35.6613 10.8885 35.6613C10.4896 34.3764 9.64149 33.2781 8.49933 32.5671C6.541 31.2746 8.656 31.2942 8.656 31.2942C9.3329 31.3847 9.98053 31.6273 10.5503 32.0037C11.1201 32.3802 11.5973 32.8808 11.946 33.4679C12.5537 34.5218 13.5509 35.2948 14.7229 35.6208C15.895 35.9468 17.1481 35.7996 18.2127 35.2108C18.3221 34.1384 18.8078 33.1394 19.5835 32.3909C14.8052 31.8621 9.79183 30.0604 9.79183 21.9725C9.7491 19.8628 10.5286 17.8191 11.9656 16.2738C11.3112 14.4624 11.3884 12.4674 12.181 10.7121C12.181 10.7121 14.0022 10.1442 18.056 12.8663C21.5847 11.9259 25.2981 11.9259 28.8268 12.8663C32.9393 10.1442 34.7018 10.7121 34.7018 10.7121C35.4944 12.4674 35.5717 14.4624 34.9172 16.2738C36.3876 17.7908 37.2094 19.8207 37.2085 21.9333C37.2085 30.0408 32.156 31.8229 27.4168 32.3517C27.9358 32.8555 28.3366 33.468 28.5906 34.1453C28.8445 34.8225 28.9453 35.5476 28.8856 36.2683V42.0454C28.8856 42.7309 29.2772 43.2792 30.3543 43.0638C34.5995 41.7016 38.3057 39.0327 40.9434 35.4383C43.5812 31.8439 45.0156 27.5079 45.0418 23.0496C44.9798 17.3968 42.676 12 38.6366 8.04509C34.5973 4.0902 29.153 1.90091 23.5002 1.95835Z" fill="white"/>
        </svg>
        ,
        backgroundColor:'#000000'
    },
];
const handleUserInputUsername =username=>{
   let copiedUserState = JSON.parse(JSON.stringify(userInputDetails));
   copiedUserState.username = username;
   setUserInputDetails(copiedUserState);
};
const handleUserInputPassword =password=>{
    let copiedUserState = JSON.parse(JSON.stringify(userInputDetails));
    copiedUserState.password = password;
    setUserInputDetails(copiedUserState);
};
const validateEmailAddress = ()=>{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(userInputDetails.username)){
        setEmailIsInValid(true)
    } ;
};
const validatePassword = ()=>{

}
return(
    <div className="container">
        <div className="wrapper">
            <div className="login-header">
                <img className="logo" src="/images/logo.png" alt=""/>
                <div className="title">Sign in to continue</div>
            </div>
            <div className="input-wrapper">
                <div className="input-item-wrapper">
                    <input onBlur={()=>validateEmailAddress()} onChange={event => handleUserInputUsername(event.target.value)} type="email" className={`input-item ${emailIsInValid && 'input-danger'}`} value={userInputDetails.username} placeholder="Email Address"/>
                    {emailIsInValid && <div style={{paddingBottom:'20px',color:'rgba(116,31,31,0.72)',fontSize:'12px',textAlign:'center'}}>Please enter a valid email address</div>}
                </div>
                <div className="input-item-wrapper">
                    <input onChange={event => handleUserInputPassword(event.target.value)} type="password" value={userInputDetails.password} className="input-item" placeholder="Password"/>
                </div>
                <div className="input-item-wrapper">
                    <button onClick={()=>console.log(userInputDetails)} type="submit" className="input-button">Login</button>
                </div>
                <div className="forgot-password">
                    <a href="#" className="link">forgot password?</a>
                </div>
            </div>
        </div>
        <div className="divider-wrapper">
            <div className="horizontal-divider"/>
            <div className="divider-text-wrapper">
                <div className="divider-text">OR</div>
            </div>

        </div>
        <div className="social-button-wrapper">
            {socialLoginButtons.map((element,index)=>
            <ButtonComponent onButtonClick={()=>signInWithGoogle()} text={element.text} key={element.text} icon={element.icon} backgroundColor={element.backgroundColor}/>
            )}
        </div>
    </div>
)
};
export default Login;
