import { useState } from 'react';

import STORAGE from '@/helpers/storage/storage.js';
import NonLoginHomeView from '@/components/NonLoginHomeView';
import LoginHomeView from '@/components/HomeView';
import { getServerCookie } from '@/helpers/utils.js';

const HomeView = ({ data })=>{
    const { isLogin } = data;
    const [showLoginView, setLoginView] = useState(isLogin)
    const afterLoginRedirection = ()=>{
        if(STORAGE.checkAuth()){
            setLoginView(true);
        }
    }

    return <>
        {!showLoginView?<NonLoginHomeView afterLoginRedirection={afterLoginRedirection}/>:<LoginHomeView/>}
    </>
}

export async function getServerSideProps(context) {
    
    const cookieInfo = context?.req?.headers?.cookie;
    let isLogin = Boolean(getServerCookie('studytokenauth', cookieInfo))

    return {
        props: {
            data: {
                isLogin
            },
        }
    }
}

export default HomeView;