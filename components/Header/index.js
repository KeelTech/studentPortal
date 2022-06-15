import {useRouter} from 'next/router';

import { container } from './style.js';

const Header = ()=>{
    const router = useRouter()
    return(
        <header className={container}>
            <div class="container">
                <div class="headMain">
                    <div class="logoKeel" onClick={()=>router.push('/')}>
                        <img class="img-fluid" src="https://staging.getkeel.com/assets/images/common/keelIcon.svg" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;