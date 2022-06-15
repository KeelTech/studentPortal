import { useState } from 'react';
import { useRouter } from 'next/router'

import { loginUser } from '@/actions/index.js';
import LoadingWidget from '@/components/LoadingWidget';
import CustomToaster from '@/components/CustomToaster';
import { validateEmail } from '@/helpers/utils.js';

const LoginWidget = ({ afterLoginRedirection })=>{
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [showLoader, setLoader] = useState(false);

    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const { isVisible, isError, isSuccess, msg } = toasterInfo;

    const [passwordInfo, setPasswordInfo] = useState({
        password: '',
        passwordVisible: false,
    })
    const { password, passwordVisible } = passwordInfo;

    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    }

    const togglePassword  = (type, value)=>{
        setPasswordInfo((val)=>{
            return {
                ...val,
                [type]: value
            }
        })
    }

    const handleSubmitClick = ()=>{
        if(!validateEmail(email)){
            showToaster(false, 'Please enter valid email id');
            return;
        }
        if(!password){
            showToaster(false, 'Please enter valid password');
            return;
        }
        setLoader(true);
        loginUser({email, password}, (error, resp)=>{
            setLoader(false);
            if(resp){
                afterLoginRedirection();
            }else{
                showToaster(false, 'Failed to Login Plz try after some time');
            }
        });
        
    }

    const handleEnterKeyPress = (e, val)=>{
        const target = e;
        if(target.key=='Enter'){
            target.preventDefault();
            if(val=="password"){
                if(validateEmail(email)){
                    document.getElementById(val).focus();
                }else{
                    showToaster(false, 'Please enter valid email id');
                }
            }else if(val==="confirmPassword"){
                handleSubmitClick();
            }
        }
    }

    const showToaster = (isSucess=false, errorMsg='')=>{
        setToasterInfo({
            isVisible: true,
            isError: !isSucess,
            isSuccess: isSucess,
            msg: errorMsg
        })
        setTimeout(() => {
            setToasterInfo({
                isVisible: false,
                isError: false,
                isSuccess: false,
                msg:''
            })
        }, 4000);
    }

    const handlePasswordChange = (e, type)=>{
        setPasswordInfo((val)=>{
            return {...val, [type]: e.target.value}
        })
    }

    return (
    <section>
        {
            showLoader && <LoadingWidget/>
        }
        {
            isVisible?<CustomToaster isVisible={isVisible} isError={isError} isSuccess={isSuccess} msg={msg}/>:null
        }
        <div class="container">
            <div class="row loginRow">
                <div class="col-md-6 col-12">
                    <div class="loginSection">
                        <div class="headingLog">
                            <h1>Welcome to your<br /> professional community
                            </h1>
                        </div>
                        <div class="formSection">
                            <div class="inputForm">
                                <input className={`npt ${email?"dataFill":""}`} type="text" value={email} onChange={handleEmailChange} onKeyPress={(e)=>handleEnterKeyPress(e,'password')} autoComplete="new-password"/>
                                <label>Email or phone number</label>
                            </div>
                            <div class="inputForm inpuBtn">
                                <input className={`npt ${password?"dataFill":""}`} type={passwordVisible?"text":"password"} id="password" value={password} onChange={(e)=>handlePasswordChange(e, 'password')} onKeyPress={(e)=>handleEnterKeyPress(e, 'confirmPassword')} autoComplete="new-password"/>
                                <label>Password</label>
                                <button onClick={()=>togglePassword('passwordVisible', !passwordVisible)}>{passwordVisible?"Hide":"Show"}</button>
                            </div>
                            <button class="frgBtn">Forgot password?</button>
                            <button class="mainBtn" onClick={handleSubmitClick}>Sign in</button>
                        </div>

                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="sgnImg">
                        <img class="img-fluid"
                            src="https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAAEVvdO3Jm6iVQXG5SP9qTlx0OQ.jpg" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default LoginWidget;