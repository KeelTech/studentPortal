import { css } from '@emotion/css';

export const container = css`

@media (min-width: 768px) {
    .col-md {
      /* -ms-flex-preferred-size: 0; */
      flex-basis: 0;
      /* -ms-flex-positive: 1; */
      flex-grow: 1;
      max-width: 100%;
    }
    .row-cols-md-1 > * {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .row-cols-md-2 > * {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .row-cols-md-3 > * {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .row-cols-md-4 > * {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .row-cols-md-5 > * {
      flex: 0 0 20%;
      max-width: 20%;
    }
    .row-cols-md-6 > * {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }
    .col-md-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-md-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-md-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-md-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-md-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-md-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-md-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  section.commonSection {
    padding: 22px 0px;
  }
  
  .d-content {
    padding: 0 40px;
  }
  
  @media (max-width: 992px) {
    .d-content {
      padding: 0px;
    }
  }
  header {
    border: 1px solid #e0e4e9;
    width: 100%;
  }
  header .navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0px;
  }
  header .navList {
    display: flex;
    gap: 65px;
  }
  @media (max-width: 792px) {
    header .navList {
      display: none;
    }
  }
  
  .educationColumLeft {
    position: -webkit-sticky;
    position: sticky;
    top: 15px;
  }
  .educationColumLeft .universtyBox {
    border-radius: 12px;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.02);
    background: #fff;
  }
  .educationColumLeft .universtyBox .universtyImg img {
    border-radius: 12px 12px 0 0px;
  }
  .educationColumLeft .universtyBox .univrstyInnerBox {
    padding-bottom: 40px;
  }
  .educationColumLeft .universtyBox .univrstyInnerBox .universtyInnerImg {
    border: 1px solid #efefef;
    padding: 5px;
    background: #fff;
    width: 120px;
    height: 110px;
    border-radius: 5px;
    position: relative;
    margin: -40px auto 15px;
  }
  .educationColumLeft .universtyBox .univrstyInnerBox .universtyInnerImg img {
    height: 100px;
    width: 100px;
  }
  .educationColumLeft .universtyBox .univrstyInnerBox .universtyDetail h1 {
    color: #002147;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .educationColumLeft .universtyBox .univrstyInnerBox .universtyDetail p {
    font-size: 16px;
    font-weight: 500;
    color: #002147;
  }
  .educationColumLeft .universtyBox .univrstyInnerBox .universtyDetail .univrstyLocation {
    font-size: 16px;
    font-weight: 400;
    color: #8594a7;
    margin-bottom: 5px;
  }
  .educationColumLeft .universtyBox .univrstyInnerBox .actionBtn {
    margin: auto;
    width: 90%;
    margin-top: 19px;
  }
  .educationColumLeft .universtyBox .univrstyInnerBox .actionBtn button {
    background: #0487f3;
    color: #fff;
    height: 48px;
    border: 1px solid #0487f3;
    padding: 20px;
    width: 100%;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
  }
  
  .slickList {
    padding-top: 20px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }
  .slickList .outsquareSection {
    background-image: url(images/green.svg);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 12px;
    width: 156px;
    min-height: 132px;
    border-radius: 8px;
  }
  .slickList .outsquareSection .calenderImg img {
    width: 40px;
    height: 35px;
    margin-top: 10px;
    margin-bottom: 16px;
  }
  .slickList .outsquareSection .calenderContent h2 {
    color: #002147;
    font-weight: 600;
    font-family: "Rubik";
    font-size: 13px;
    margin-bottom: 7px;
    padding-top: 5px;
  }
  .slickList .outsquareSection .calenderContent p {
    font-size: 11px;
    color: #002147;
  }
  .slickList .redBg {
    background-image: url(images/red.svg);
  }
  .slickList .yellowBg {
    background-image: url(images/yellow.svg);
  }
  .slickList .blueBg {
    background-image: url(images/blue.svg);
  }
  
  .videoList {
    display: flex;
    gap: 30px;
    overflow: auto;
    padding-bottom: 5px;
  }
  .videoList .videoContainer iframe {
    width: 379px;
    height: 254px;
    padding: 20px 0px;
    border: 1px solid black;
    background: black;
    border-radius: 15px;
    margin-top: 48px;
    cursor: pointer;
  }
  
  .factsSection {
    padding: 20px;
    background-color: #fff;
    border: 1px solid #f5f6f8;
    border-radius: 12px;
    margin-top: 40px;
  }
  .factsSection h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #002147;
    font-family: "Rubik";
  }
  .factsSection p {
    font-family: "Rubik";
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #8594a7;
    margin-top: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .factsSection p span {
    color: #0487f3;
    font-weight: 600;
  }
  
  .readMoreBtn button {
    color: #0487f3;
    background: none;
    border: none;
    cursor: pointer;
    margin-top: 17px;
    font-size: 16px;
    font-weight: 400;
    font-family: Rubik;
  }
  
  .browseSection h2 {
    color: #002147;
    font-weight: 500;
    font-size: 24px;
    font-family: "Rubik";
    margin-top: 40px;
  }
  .browseSection .browseContainer {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  .browseSection .browseContainer .d-width {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 40px;
    margin-bottom: 40px;
    width: 44%;
  }
  @media (max-width: 1200px) {
    .browseSection .browseContainer .d-width {
      width: 100%;
    }
  }
  .browseSection .browseContainer .mainBox {
    padding: 24px;
    border: 1px solid #f5f6f8;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.02);
    border-radius: 12px 12px 0 0;
    width: 100%;
    height: 100%;
  }
  .browseSection .browseContainer .box-2 button {
    color: #fff;
    padding: 10px;
    background: #0487f3;
    font-size: 14px;
    line-height: 20px;
    width: 100%;
    border-radius: 0 0 12px 12px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .browseSection .browseContainer .subjectContainer {
    display: flex;
    align-items: flex-end;
    gap: 20px;
    padding-bottom: 24px;
  }
  .browseSection .browseContainer .subjectContainer .subjectImg img {
    height: 60px;
    width: 60px;
  }
  .browseSection .browseContainer .subjectContainer .subjectTitle h2 {
    color: #002147;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 8px;
    font-family: "Rubik";
  }
  .browseSection .browseContainer .subjectContainer .subjectTitle p {
    font-weight: 400;
    font-size: 12px;
    color: #8594a7;
  }
  .browseSection .browseContainer .border {
    border: 1px solid #e0e4e9;
  }
  .browseSection .browseContainer .courseDetailList {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .browseSection .browseContainer .courseDetailList ul li h4 {
    font-family: "Rubik";
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #002147;
  }
  .browseSection .browseContainer .courseDetailList ul li p {
    font-family: "Rubik";
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    margin-bottom: 12px;
    color: #8594a7;
  }
  .browseSection .browseContainer .courseDescription {
    margin-top: 20px;
  }
  .browseSection .browseContainer .courseDescription p {
    font-size: 14px;
    font-weight: 400;
    font-family: "Rubik";
    line-height: 22px;
    color: #8594a7;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 420px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .viewAllCourseBtn button {
    border: none;
    width: 219px;
    height: 48px;
    background: #002147;
    border-radius: 24px;
    color: #fff;
    font-size: 16px;
    line-height: 17px;
    font-weight: 400;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  
  @media (max-width: 992px) {
    .viewAllCourseBtn button {
      width: 100%;
    }
  }
  .universtyRankingBtn button {
    background: #e1f1fe;
    color: #0487f3;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    margin-top: 22px;
    margin-bottom: 9px;
    font-size: 12px;
    font-weight: 400;
    font-family: "Rubik";
  }
  
  .rankingMainContainer {
    padding: 20px 0;
    background: #fff;
    border: 1px solid #f5f6f8;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.02);
    border-radius: 12px;
    margin-top: 23px;
    display: flex;
    flex-wrap: wrap;
    gap: 27px;
  }
  .rankingMainContainer .innerRanking {
    padding: 14px 70px;
    display: flex;
    align-items: center;
    gap: 40px;
  }
  .rankingMainContainer .innerRanking .star {
    width: 60px;
    height: 48px;
    border: 1px solid #fff5c2;
    border-radius: 8px;
    text-align: center;
    padding-top: 6px;
  }
  .rankingMainContainer .innerRanking .rankingDetail h3 {
    margin-bottom: 16px;
    color: #8594a7;
    font-size: 12px;
    line-height: 10px;
    font-weight: 400;
    font-family: "Rubik";
  }
  .rankingMainContainer .innerRanking .rankingDetail span {
    font-size: 12px;
    color: #002147;
    font-weight: 400;
    font-family: "Rubik";
  }
  
  .ruppessBtn {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 20px;
  }
  .ruppessBtn button {
    border: none;
    background: #f5f6f8;
    padding: 10px 18px;
    border-radius: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #8594a7;
    font-family: "Rubik";
  }
  .ruppessBtn .bluecolor {
    background: #e1f1fe;
    border-radius: 8px;
    color: #0487f3;
  }
  
  .table {
    margin-top: 15px;
    overflow: auto;
  }
  .table table {
    width: 100%;
    border-collapse: collapse;
  }
  .table table thead {
    background: #f5faff;
  }
  .table table tr th {
    color: #8594a7;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    padding: 10px;
    text-align: left;
    font-family: "Rubik";
  }
  .table table tr td {
    font-family: "Rubik";
    font-size: 16px;
    line-height: 24px;
    color: #002147;
    font-weight: 400;
    padding: 10px;
  }
  .table table tr:nth-child(even) {
    background: #f5faff;
  }
  
  .flex-start {
    justify-content: flex-start;
  }
  
  .admissionList ul li {
    margin: 3px 0px;
    color: #8594a7;
    font-family: "Rubik";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-left: 30px;
    position: relative;
  }
  .admissionList ul li::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 2px;
    border: 2px solid #8594a7;
    background: #8594a7;
    border-radius: 50px;
    top: 6px;
    left: -22px;
  }
  
  .similarContainer {
    display: flex;
    overflow: auto;
    width: 100%;
    padding-bottom: 20px;
    height: 100%;
  }
  
  .tab_card_wrapper {
    background-color: #fff;
    overflow: auto;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    width: 100%;
    border-radius: 12px;
    height: 100%;
    overflow: hidden;
  }
  .tab_card_wrapper .card_image img {
    cursor: pointer;
    -o-object-fit: cover;
       object-fit: cover;
    border-radius: 12px 12px 0 0;
    max-height: 174px;
    width: 100%;
    height: 100%;
  }
  .tab_card_wrapper .description_card {
    padding: 20px;
  }
  .tab_card_wrapper .description_card .card_title h4 {
    color: #002147;
    margin: 10px 0px;
    font-family: "Rubik";
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  .tab_card_wrapper .description_card .card_heading {
    font-family: "Rubik";
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #8594a7;
    font-weight: 400;
    margin-bottom: 30px;
  }
  .tab_card_wrapper .description_card .author_publish span {
    font-size: 12px;
    font-weight: 400;
    font-family: "Rubik";
  }
  
  .row-SE {
    display: flex;
    width: 100%;
    gap: 25px;
    overflow: auto;
    padding-bottom: 10px;
  }
  .row-SE .col-SE {
    width: 100%;
    min-width: 436px;
    margin-top: 30px;
  }
  
  @media (max-width: 767px) {
    .rankingMainContainer .innerRanking {
      padding: 0px 20px;
      gap: 50px;
    }
  }
`