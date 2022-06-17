import MainHeader from '@/components/MainHeader';
import LoginWidget from '@/components/LoginWidget';

const HomeView = ({ afterLoginRedirection }) => {

    return (
        <>
            <MainHeader />
            <LoginWidget afterLoginRedirection={afterLoginRedirection} />

            <section class="colorSection">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-12">
                            <div class="explrHeding">
                                <h2>Explore topics you <br />are interested in
                                </h2>
                            </div>
                        </div>
                        <div class="col-md-7 col-12">
                            <div class="topicSection">
                                <h4>CONTENT TOPICS </h4>
                                <div class="allTopicsBtn">
                                    <button class="btns">Retirement
                                    </button>
                                    <button>
                                        Salary and Compensation
                                    </button>
                                    <button>Remote</button>
                                    <button>Work From Home</button>
                                    <button>Starting a job</button>
                                    <button class="btns">Retirement
                                    </button>
                                    <button>Remote</button>
                                    <button>Work From Home</button>
                                    <button>Starting a job</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="SecColorSlider">
                <div class="container">
                    <div class="selSliderMain">
                        <div class="row">
                            <div class="col-md-7 col-12">
                                <div class="slidText">
                                    <h3>Let the right people know<br /> you’re open to work</h3>
                                    <p>With the Open To Work feature, you can privately tell recruiters or publicly share with
                                        the LinkedIn community that you are looking for new job opportunities.</p>
                                </div>
                            </div>
                            <div class="col-md-5 col-12">
                                <div class="slideImg">
                                    <img class="img-fluid"
                                        src="https://static-exp2.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="connectCont">
                <div class="container">
                    <div class="connctMain">
                        <div class="row">
                            <div class="col-md-6 col-12">
                                <div class="contcData">
                                    <img class="img-fluid"
                                        src="https://static-exp2.licdn.com/aero-v1/sc/h/b1fxwht7hdbeusleja7ciftsj" />
                                    <div class="cntcText">
                                        <p>Connect with people who can help
                                        </p>
                                        <button>Find People You Know</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12">
                                <div class="contcData">
                                    <img class="img-fluid"
                                        src="https://static-exp2.licdn.com/aero-v1/sc/h/dkfub4sc7jgzg3o31flfr91rv" />
                                    <div class="cntcText">
                                        <p>Learn the skills you need to succeed need help
                                        </p>
                                        <button class="selectcnt">Choose a topic to learn about</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="p-relative min-height">
                <div class="container">
                    <div class="movieBlock">
                        <div class="row">
                            <div class="col-md-5 col-12">
                                <div class="vidBlock">
                                    <iframe height="315" src="https://www.youtube.com/embed/qbjyqxOzNn8"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                </div>
                            </div>
                            <div class="col-md-7 col-12">
                                <div class="moviText">
                                    <p>In it to chase my dream </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div class="container">
                    <div class="footPart">
                        <div class="logoFoot">
                            <img class="img-fluid" src="https://staging.getkeel.com/assets/images/common/keelIcon.svg" />
                        </div>
                        <div class="footRight">
                            <div class="row">
                                <div class="col-md-3 col-12">
                                    <div class="listFoot">
                                        <h4>Heading</h4>
                                        <ul>
                                            <li>List Data</li>
                                            <li>List Data</li>
                                            <li>List Data</li>
                                            <li>List Data</li>
                                            <li>List Data</li>
                                            <li>List Data</li>
                                            <li>List Data</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-3 col-12">
                                    <div class="listFoot">
                                        <h4>Heading</h4>
                                        <ul>
                                            <li>List Data</li>
                                            <li>Data List Data</li>
                                            <li>Data List Data</li>
                                            <li>List Data</li>
                                            <li>Data List Data</li>
                                            <li>List Data</li>
                                            <li>List Data</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-3 col-12">
                                    <div class="listFoot">
                                        <h4>Heading</h4>
                                        <ul>
                                            <li>List Data Data</li>
                                            <li>List Data Data</li>
                                            <li>List Data Data</li>
                                            <li>List Data</li>
                                            <li>List Data</li>
                                            <li>List Data Data</li>
                                            <li>List Data</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-3 col-12">
                                    <div class="listFoot">
                                        <h4>Heading</h4>
                                        <ul>
                                            <li>List Data</li>
                                            <li>List Data DataData</li>
                                            <li>List Data</li>
                                            <li>List Data DataData</li>
                                            <li>List Data DataData</li>
                                            <li>List Data</li>
                                            <li>List Data</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='subFooter'>
                    <div className='container'>
                        <ul>
                            <li>
                                <img class="img-fluid" src="https://staging.getkeel.com/assets/images/common/keelIcon.svg" />
                            </li>
                            <li>
                                <p>About</p>
                            </li>
                            <li>
                                <p>Accessibility</p>
                            </li>
                            <li><p>Privacy Policy</p></li>
                            <li><p>Connect</p></li>
                            <li><p>Blog</p></li>
                            <li><p>Community</p></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default HomeView