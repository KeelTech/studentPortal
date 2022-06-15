import { css } from '@emotion/css';

import Header from '@/components/Header';
import SignupWidget from '@/components/SignupWidget';

const container = css`
    background: #f3f2ef;

`
const Signup = ()=>{

    return(
        <div className={container}>  
            <Header/>
            <SignupWidget/>
        </div>
    )
}

export default Signup;