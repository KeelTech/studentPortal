import { container } from './style.js';

const HomeView = ()=>{

    return(
    <div className={container}>
        <header>
            <div class="container">
                <div class="navBar">
                    <div class="logoMain">
                        <img class="img-fluid" src="images/logo-dark.svg" />
                    </div>
                    <ul class="navList">
                        <li><span>Study Abroad</span></li>
                        <li><span>Test Prep</span></li>
                        <li><span>Finance</span></li>
                        <li><span>Community</span></li>
                        <li><span>Products</span></li>
                    </ul>
                </div>
            </div>
        </header>
        <section class="commonSection">
            <div class="container">
                <div class="d-content">
                    <div class="row">
                        <div class="col-md-4 col-12">
                            <div class="educationColumLeft">
                                <div class="universtyBox">
                                    <div class="universtyImg">
                                        <img src="images/mcgilluniversity.png" alt="" class="img-fluid"/>
                                    </div>
                                    <div class="univrstyInnerBox">
                                        <div class="universtyInnerImg">
                                            <img class="img-fluid" src="images/mcgilluniversityInner.png" alt=""/>
                                        </div>
                                        <div class="universtyDetail">
                                            <h1 class="text-center">Mcgill University</h1>
                                            <p class="text-center univrstyLocation">Quebec, Canada</p>
                                            <p class="text-center">Public | Estd. 1821</p>
                                        </div>
                                        <div class="actionBtn">
                                            <button>Talk to an Expert for FREE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 col-12">
                            <div class="educationColumnRight">
                                <div class="slickList">
                                    <div class="outsquareSection">
                                        <div class="calenderImg">
                                            <img class="img-fluid" src="images/calendar.svg"/>
                                        </div>
                                        <div class="calenderContent">
                                            <h2>Fall and Winter</h2>
                                            <p>Intakes</p>
                                        </div>
                                    </div>
                                    <div class="outsquareSection redBg">
                                        <div class="calenderImg">
                                            <img class="img-fluid" src="images/stuteach.svg"/>
                                        </div>
                                        <div class="calenderContent">
                                            <h2>14:1</h2>
                                            <p> Student: Teacher Ratio </p>
                                        </div>
                                    </div>
                                    <div class="outsquareSection yellowBg">
                                        <div class="calenderImg">
                                            <img class="img-fluid" src="images/malefemale.svg"/>
                                        </div>
                                        <div class="calenderContent">
                                            <h2>30:70</h2>
                                            <p>Male: Female Ratio</p>
                                        </div>
                                    </div>
                                    <div class="outsquareSection blueBg">
                                        <div class="calenderImg">
                                            <img class="img-fluid" src="images/acceptance.svg"/>
                                        </div>
                                        <div class="calenderContent">
                                            <h2>46%</h2>
                                            <p> Acceptance Rate </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="videoList">
                                    <div class="videoContainer">
                                        <iframe src="https://www.youtube.com/embed/oBPCgAEY1A0"
                                            title="Around McGill in 80 seconds" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen></iframe>
                                    </div>
                                    <div class="videoContainer">
                                        <iframe width="972" height="547" src="https://www.youtube.com/embed/t1bvgi8qDq8" title="Campus Tour - McGill University (Downtown Campus)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div class="videoContainer">
                                        <iframe width="972" height="547" src="https://www.youtube.com/embed/r-1ZhLj7orw" title="Why I chose McGill University | Eliza, New York" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div class="videoContainer">
                                        <iframe width="972" height="547" src="https://www.youtube.com/embed/ahu5Scbs07E" title="Return to Campus trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>

                                <div class="factsSection ">
                                    <h2>History, Affiliations and Rankings</h2>
                                    <p><span>McGill University</span> was established in 1821 in <span>Montreal,
                                            Quebec</span>
                                        by a royal charter issued by<br/> King George IV. It is named after James McGill, a
                                        Scottish trader whose donation in 1813 established the university's predecessor, the
                                        University of McGill College (or simply, McGill College).<strong>In 1885, the name
                                            of
                                            the institution was changed to McGill University.&nbsp;</strong>Throughout the
                                        years, the University has made its mark throughout the world and its history. </p>
                                    <div class="readMoreBtn">
                                        <button>Read More</button>
                                    </div>
                                </div>

                                <div class="browseSection">
                                    <h2>Browse Courses</h2>
                                    <div class="browseContainer">
                                        <div class="d-width">
                                            <div class="mainBox">
                                                <div class="box-1">
                                                    <div class="subjectContainer">
                                                        <div class="subjectImg">
                                                            <img src="images/chemistry.png" alt="" class="img-fluid"/>
                                                        </div>
                                                        <div class="subjectTitle">
                                                            <h2>Bachelor of Science in Nursing</h2>
                                                            <p>Sciences</p>
                                                        </div>
                                                    </div>
                                                    <div class="border"></div>
                                                    <div class="courseDetailList">
                                                        <ul>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="border"></div>
                                                    <div class="courseDescription">
                                                        <p>McGill University’s faculty of medicine/Ingram school of
                                                            nursing offers 4 years fulltime undergraduate Bachelor of
                                                            Science (Nursing) program which offers innovative courses
                                                            that
                                                            develop fundamental nursing expertise and skills and opens
                                                            the
                                                            door to a variety of exciting career opportunities.</p>
                                                        <div class="readMoreBtn ">
                                                            <button class="mt-10">Read More</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="box-2">
                                                <button>Apply Now <img src="images/whitearrow.svg" alt=""
                                                        class="img-fluid"/></button>
                                            </div>
                                        </div>
                                        <div class="d-width">
                                            <div class="mainBox">
                                                <div class="box-1">
                                                    <div class="subjectContainer">
                                                        <div class="subjectImg">
                                                            <img src="images/chemistry.png" alt="" class="img-fluid"/>
                                                        </div>
                                                        <div class="subjectTitle">
                                                            <h2>Bachelor of Science in Nursing</h2>
                                                            <p>Sciences</p>
                                                        </div>
                                                    </div>
                                                    <div class="border"></div>
                                                    <div class="courseDetailList">
                                                        <ul>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="border"></div>
                                                    <div class="courseDescription">
                                                        <p>McGill University’s faculty of medicine/Ingram school of
                                                            nursing offers 4 years fulltime undergraduate Bachelor of
                                                            Science (Nursing) program which offers innovative courses
                                                            that
                                                            develop fundamental nursing expertise and skills and opens
                                                            the
                                                            door to a variety of exciting career opportunities.</p>
                                                        <div class="readMoreBtn ">
                                                            <button class="mt-10">Read More</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="box-2">
                                                <button>Apply Now <img src="images/whitearrow.svg" alt=""
                                                        class="img-fluid"/></button>
                                            </div>
                                        </div>
                                        <div class="d-width">
                                            <div class="mainBox">
                                                <div class="box-1">
                                                    <div class="subjectContainer">
                                                        <div class="subjectImg">
                                                            <img src="images/chemistry.png" alt="" class="img-fluid"/>
                                                        </div>
                                                        <div class="subjectTitle">
                                                            <h2>Bachelor of Science in Nursing</h2>
                                                            <p>Sciences</p>
                                                        </div>
                                                    </div>
                                                    <div class="border"></div>
                                                    <div class="courseDetailList">
                                                        <ul>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="border"></div>
                                                    <div class="courseDescription">
                                                        <p>McGill University’s faculty of medicine/Ingram school of
                                                            nursing offers 4 years fulltime undergraduate Bachelor of
                                                            Science (Nursing) program which offers innovative courses
                                                            that
                                                            develop fundamental nursing expertise and skills and opens
                                                            the
                                                            door to a variety of exciting career opportunities.</p>
                                                        <div class="readMoreBtn ">
                                                            <button class="mt-10">Read More</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="box-2">
                                                <button>Apply Now <img src="images/whitearrow.svg" alt=""
                                                        class="img-fluid"/></button>
                                            </div>
                                        </div>
                                        <div class="d-width">
                                            <div class="mainBox">
                                                <div class="box-1">
                                                    <div class="subjectContainer">
                                                        <div class="subjectImg">
                                                            <img src="images/chemistry.png" alt="" class="img-fluid"/>
                                                        </div>
                                                        <div class="subjectTitle">
                                                            <h2>Bachelor of Science in Nursing</h2>
                                                            <p>Sciences</p>
                                                        </div>
                                                    </div>
                                                    <div class="border"></div>
                                                    <div class="courseDetailList">
                                                        <ul>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                            <li>
                                                                <h4>CAD 17,597</h4>
                                                                <p>Fee</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="border"></div>
                                                    <div class="courseDescription">
                                                        <p>McGill University’s faculty of medicine/Ingram school of
                                                            nursing offers 4 years fulltime undergraduate Bachelor of
                                                            Science (Nursing) program which offers innovative courses
                                                            that
                                                            develop fundamental nursing expertise and skills and opens
                                                            the
                                                            door to a variety of exciting career opportunities.</p>
                                                        <div class="readMoreBtn ">
                                                            <button class="mt-10">Read More</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="box-2">
                                                <button>Apply Now <img src="images/whitearrow.svg" alt=""
                                                        class="img-fluid"/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="browseSection">
                                    <h2>Rankings</h2>
                                    <div class="universtyRankingBtn">
                                        <button>University Rankings</button>
                                    </div>
                                    <div class="rankingMainContainer">
                                        <div class="innerRanking">
                                            <div class="star">
                                                <img class="img-fluid" src="images/start.svg" alt=""/>
                                                <p>3.1</p>
                                            </div>
                                            <div class="rankingDetail">
                                                <h3>Global Ranking</h3>
                                                <span>QS-202</span>
                                            </div>
                                        </div>
                                        <div class="innerRanking">
                                            <div class="star">
                                                <img class="img-fluid" src="images/start.svg" alt=""/>
                                                <p>3.1</p>
                                            </div>
                                            <div class="rankingDetail">
                                                <h3>Global Ranking</h3>
                                                <span>QS-202</span>
                                            </div>
                                        </div>
                                        <div class="innerRanking">
                                            <div class="star">
                                                <img class="img-fluid" src="images/start.svg" alt=""/>
                                                <p>3.1</p>
                                            </div>
                                            <div class="rankingDetail">
                                                <h3>Global Ranking</h3>
                                                <span>QS-202</span>
                                            </div>
                                        </div>
                                        <div class="innerRanking">
                                            <div class="star">
                                                <img class="img-fluid" src="images/start.svg" alt=""/>
                                                <p>3.1</p>
                                            </div>
                                            <div class="rankingDetail">
                                                <h3>Global Ranking</h3>
                                                <span>QS-202</span>
                                            </div>
                                        </div>
                                        <div class="innerRanking">
                                            <div class="star">
                                                <img class="img-fluid" src="images/start.svg" alt=""/>
                                                <p>3.1</p>
                                            </div>
                                            <div class="rankingDetail">
                                                <h3>Global Ranking</h3>
                                                <span>QS-202</span>
                                            </div>
                                        </div>
                                        <div class="innerRanking">
                                            <div class="star">
                                                <img class="img-fluid" src="images/start.svg" alt=""/>
                                                <p>3.1</p>
                                            </div>
                                            <div class="rankingDetail">
                                                <h3>Global Ranking</h3>
                                                <span>QS-202</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="viewAllCourseBtn">
                                        <button>View All Courses <img src="images/whitearrow.svg" alt=""
                                                class="img-fluid"/></button>
                                    </div>
                                </div>
                                <div class="browseSection">
                                    <h2>Ranking Agencies</h2>
                                    <div class="ruppessBtn">
                                        <button>CAD</button>
                                        <button class="bluecolor">INR</button>
                                    </div>
                                    <div class="table" border="0">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Course</th>
                                                    <th>Duration</th>
                                                    <th>Fee/Year</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Bachelor of Science in Nursing</td>
                                                    <td>48 Months</td>
                                                    <td>₹1,035,935</td>
                                                </tr>
                                                <tr>
                                                    <td>BEng in Chemical Engineering</td>
                                                    <td>36 Months</td>
                                                    <td>₹2,687,768</td>
                                                </tr>
                                                <tr>
                                                    <td>BEng in Civil engineering</td>
                                                    <td>48 Months</td>
                                                    <td>₹2,687,768</td>
                                                </tr>
                                                <tr>
                                                    <td>BEng in Computer Engineering</td>
                                                    <td>48 Months</td>
                                                    <td>₹2,687,768</td>
                                                </tr>
                                                <tr>
                                                    <td>BEng in Electrical Engineering</td>
                                                    <td>48 Months</td>
                                                    <td>₹2,687,768</td>
                                                </tr>
                                                <tr>
                                                    <td>BEng in Mechanical engineering</td>
                                                    <td>48 Months</td>
                                                    <td>₹2,687,768</td>
                                                </tr>
                                                <tr>
                                                    <td>B.Sc. Honours in Computer Science</td>
                                                    <td>48 Months</td>
                                                    <td>₹2,687,768</td>
                                                </tr>
                                                <tr>
                                                    <td>BSc in Agricultural and Environmental Sciences</td>
                                                    <td>48 Months</td>
                                                    <td>₹2,687,768</td>
                                                </tr>
                                                <tr>
                                                    <td>Certificate in Management</td>
                                                    <td>13 Weeks Months</td>
                                                    <td>₹2,687,768</td>
                                                </tr>
                                                <tr>
                                                    <td>Certificate in Oral and Maxillofacial Surgery</td>
                                                    <td>48 Months</td>
                                                    <td>₹927,791</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="viewAllCourseBtn">
                                        <button>View All Courses <img src="images/whitearrow.svg" alt=""
                                                class="img-fluid"/></button>
                                    </div>
                                </div>

                                <div class="browseSection">
                                    <h2>Admission Requirements</h2>
                                    <div class="ruppessBtn flex-start mt-20 mb-20">

                                        <button class="bluecolor">Application</button>
                                        <button>Documents</button>
                                    </div>
                                    <div class="admissionList">
                                        <ul>
                                            <li>Visit the official website of the institution.</li>
                                            <li>Click on 'Apply Now' or 'Register Here'</li>
                                            <li>Complete filling your education history with all the qualifications.</li>
                                            <li>Fill in the details of your employment history.</li>
                                            <li>Fill in your personal statement.</li>
                                            <li>Submit the application form by paying the mentioned fees.</li>
                                        </ul>
                                    </div>
                                    <div class="viewAllCourseBtn">
                                        <button>View All Courses <img src="images/whitearrow.svg" alt=""
                                                class="img-fluid"/></button>
                                    </div>
                                </div>

                                <div class="browseSection">
                                    <h2>Similar Universities</h2>
                                    <div class="row-SE">
                                        <div class="col-SE">
                                            <div class="tab_card_wrapper">
                                                <div class="card_image">
                                                    <img src="images/dukeuniversity.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="description_card">
                                                    <div class="InnerCardDescription">
                                                        <div class="card_title">
                                                            <h4>Duke University</h4>
                                                        </div>
                                                        <div class="card_heading">Duke University, United States</div>
                                                        <div class="author_publish mb-0">
                                                            <span>Private |</span>
                                                            <span>Estd.1838 |</span>
                                                            <span>30+ Courses</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-SE">
                                            <div class="tab_card_wrapper">
                                                <div class="card_image">
                                                    <img src="images/californiaUniversity.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="description_card">
                                                    <div class="InnerCardDescription">
                                                        <div class="card_title">
                                                            <h4>University of California Berkeley</h4>
                                                        </div>
                                                        <div class="card_heading">University of California Berkeley, United States</div>
                                                        <div class="author_publish mb-0">
                                                            <span>Private |</span>
                                                            <span>Estd.1838 |</span>
                                                            <span>70+ Courses</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-SE">
                                            <div class="tab_card_wrapper">
                                                <div class="card_image">
                                                    <img src="images//washingtonuniversity.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="description_card">
                                                    <div class="InnerCardDescription">
                                                        <div class="card_title">
                                                            <h4>University of Washington</h4>
                                                        </div>
                                                        <div class="card_heading">University of Washington, United States</div>
                                                        <div class="author_publish mb-0">
                                                            <span>Private |</span>
                                                            <span>Estd.1861 |</span>
                                                            <span>20+ Courses</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-SE">
                                            <div class="tab_card_wrapper">
                                                <div class="card_image">
                                                    <img src="images/johnshopkinsuniversity.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="description_card">
                                                    <div class="InnerCardDescription">
                                                        <div class="card_title">
                                                            <h4>Johns Hopkins University</h4>
                                                        </div>
                                                        <div class="card_heading">Johns Hopkins University, United States</div>
                                                        <div class="author_publish mb-0">
                                                            <span>Private |</span>
                                                            <span>Estd.1870 |</span>
                                                            <span>70+ Courses</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-SE">
                                            <div class="tab_card_wrapper">
                                                <div class="card_image">
                                                    <img src="images/unimanchester.jpg" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="description_card">
                                                    <div class="InnerCardDescription">
                                                        <div class="card_title">
                                                            <h4>The University of Manchester</h4>
                                                        </div>
                                                        <div class="card_heading">The University of Manchester, United Kingdom</div>
                                                        <div class="author_publish mb-0">
                                                            <span>Private |</span>
                                                            <span>Estd.1821 |</span>
                                                            <span>1700+ Courses</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="browseSection">
                                    <h2>Related</h2>
                                    <div class="row-SE">
                                        <div class="col-SE">
                                            <div class="tab_card_wrapper">
                                                <div class="card_image">
                                                    <img src="images/medical.jpg" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="description_card">
                                                    <div class="InnerCardDescription">
                                                        <div class="card_title">
                                                            <h4>Medical Scholarships in Canada for International Students</h4>
                                                        </div>
                                                        <div class="card_heading">Medical Science is a fascinating area of study but is also v...</div>
                                                        <div class="author_publish mb-0">
                                                            <span>Tue, 23 Aug 2022</span>
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-SE">
                                            <div class="tab_card_wrapper">
                                                <div class="card_image">
                                                    <img src="images/Study-in-Canada-Without-IELTS.jpg" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="description_card">
                                                    <div class="InnerCardDescription">
                                                        <div class="card_title">
                                                            <h4>Study in Canada Without IELTS</h4>
                                                        </div>
                                                        <div class="card_heading">Are you aspiring to pursue your higher studies in any of the...</div>
                                                        <div class="author_publish mb-0">
                                                            <span>Tue, 23 Aug 2022</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="col-SE">
                                            <div class="tab_card_wrapper">
                                                <div class="card_image">
                                                    <img src="images/IELTS-6-Band-Universities-in-Canada-for-Masters.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="description_card">
                                                    <div class="InnerCardDescription">
                                                        <div class="card_title">
                                                            <h4>IELTS 6 Band Universities in Canada for Masters</h4>
                                                        </div>
                                                        <div class="card_heading">There are a few Canadian universities and colleges offering </div>
                                                        <div class="author_publish mb-0">
                                                            <span>Tue, 23 Aug 2022</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-SE">
                                            <div class="tab_card_wrapper">
                                                <div class="card_image">
                                                    <img src="images/MBBS-in-Canada.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="description_card">
                                                    <div class="InnerCardDescription">
                                                        <div class="card_title">
                                                            <h4>Is there an MBBS in Canada?</h4>
                                                        </div>
                                                        <div class="card_heading">Planning to study your MBBS in Canada? When you are planning...</div>
                                                        <div class="author_publish mb-0">
                                                            <span>Tue, 22 Aug 2022</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default HomeView