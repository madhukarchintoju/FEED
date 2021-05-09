import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Home() {
    const Images = [
        'assets/event-img-one.jpg',
        'assets/event-img-two.jpg',
        'assets/event-img-three.jpg',
        'assets/event-img-four.jpg',
    ]
    const [selectedImg, setSelectedImg] = useState(Images[0])
    return (
        <>
            <div className="container-fluid p-0">
                <section class="carousel-section p-0">
                    <div
                        id="carouselExampleFade"
                        class="carousel slide carousel-fade"
                        data-ride="carousel"
                    >
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img
                                    src="/assets/village-famer.jpg"
                                    class="d-block w-100 img-fluid"
                                    alt="..."
                                />
                            </div>
                            <div class="carousel-item">
                                <img
                                    src="/assets/cow.jpg"
                                    class="d-block w-100 img-fluid"
                                    alt="..."
                                />
                            </div>
                            <div class="carousel-item">
                                <img
                                    src="/assets/transportation-logistics.jpg"
                                    class="d-block w-100 img-fluid"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <a
                            class="carousel-control-prev"
                            href="#carouselExampleFade"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a
                            class="carousel-control-next"
                            href="#carouselExampleFade"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </section>

                {/* About Objective Vission Mission */}
                <section id="aboutSection" className="aboutus-section">
                    <div className="row m-0">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-content-wrap">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <h1 className="aboutus-title">
                                                About Us
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 aboutus-content">
                                            <p>
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book standard
                                                dummy text ever since the 1500s,
                                                when an unknown printer took a
                                                galley of type and scrambled it
                                                to make a type specimen book
                                            </p>
                                            <p>
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book standard
                                                dummy text ever since the 1500s,
                                                when an unknown printer took a
                                                galley of type and scrambled it
                                                to make a type specimen book
                                            </p>
                                            <p>
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book standard
                                                dummy text ever since the 1500s,
                                                when an unknown printer took a
                                                galley of type and scrambled it
                                                to make a type specimen book
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 objective-content-wrap">
                                            <h3 className="objective-title">
                                                Objective
                                            </h3>
                                            <p className="objective-content">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged
                                                Lorem Ipsum has been the
                                                industry's standard dummy text
                                                ever since the 1500s, when an
                                                unknown printer took a galley of
                                                type and scrambled it to make a
                                                type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div
                                                className="row vision-mission-wrap"
                                                style={{
                                                    backgroundColor: '#b6bbfc',
                                                }}
                                            >
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div class="card vision-card text-center">
                                                        <div class="card-header">
                                                            <img
                                                                src="assets/vision.png"
                                                                alt="vision-icon"
                                                            />
                                                            <span className="vision-title">
                                                                Vision
                                                            </span>
                                                        </div>
                                                        <div class="card-body p-2">
                                                            <p className="card-text vision-content">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipiscing elit.
                                                                Nam eu sem
                                                                tempor, varius
                                                                quam at, luctus
                                                                dui. Mauris
                                                                magna metus,
                                                                dapibus nec
                                                                turpis vel,
                                                                semper malesuada
                                                                ante.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div class="card mission-card text-center">
                                                        <div class="card-header">
                                                            <img
                                                                src="assets/mission.png"
                                                                alt="mission-icon"
                                                            />
                                                            <span className="mission-title">
                                                                Mission
                                                            </span>
                                                        </div>
                                                        <div class="card-body p-2">
                                                            <p class="card-text mission-content">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipiscing elit.
                                                                Nam eu sem
                                                                tempor, varius
                                                                quam at, luctus
                                                                dui. Mauris
                                                                magna metus,
                                                                dapibus nec
                                                                turpis vel,
                                                                semper malesuada
                                                                ante.
                                                            </p>
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

                {/* FEED Services */}
                <section id="feedServices" className="feed-services-section">
                    <div className="row m-0">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto">
                                    <h3 className="section-heading text-center">
                                        FEED Services
                                    </h3>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <img
                                        src="assets/rocket-one.png"
                                        className="img-fluid feed-service-img"
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col p-0">
                                            <Link className="nav-link" to="/myfpo">
                                                <div class="text-center services-card m-2">
                                                    <div className="services-card-header" style={{backgroundColor:'#fbba14'}}></div>
                                                    <div class="card-body card-img">
                                                        <img src="assets/fpo-icon.jpg" alt=""/>
                                                        <h4 class="card-title my-auto" style={{color:'#fbba14'}}>MY FPO</h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col p-0">
                                            <Link className="nav-link" to="/myfarm">
                                                <div class="text-center services-card m-2">
                                                    <div className="services-card-header" style={{backgroundColor:'#79b247'}}></div>
                                                    <div class="card-body card-img">
                                                        <img src="assets/farm-icon.jpg" alt=""/>
                                                        <h4 class="card-title P-5 my-auto" style={{position:'relative',color:'#79b247'}}>
                                                            MY FARM
                                                        </h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col p-0">
                                            <Link className="nav-link" to="/mybusiness">
                                                <div class="text-center services-card m-2">
                                                    <div
                                                        className="services-card-header"
                                                        style={{
                                                            backgroundColor:
                                                                '#2f79e4',
                                                        }}
                                                    ></div>
                                                    <div class="card-body card-img">
                                                        <img
                                                            src="assets/my-business-icon.jpg"
                                                            alt=""
                                                        />
                                                        <h4
                                                            class="card-title P-5 my-auto"
                                                            style={{
                                                                color:
                                                                    '#2f79e4',
                                                            }}
                                                        >
                                                            MY BUSINESS
                                                        </h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col p-0">
                                            <Link
                                                className="nav-link"
                                                to="/mymarket"
                                            >
                                                <div class="text-center services-card m-2">
                                                    <div
                                                        className="services-card-header"
                                                        style={{
                                                            backgroundColor:
                                                                '#f54900',
                                                        }}
                                                    ></div>
                                                    <div class="card-body card-img">
                                                        <img
                                                            src="assets/cart-icon.jpg"
                                                            alt=""
                                                        />
                                                        <h4
                                                            class="card-title P-5 my-auto"
                                                            style={{
                                                                color:
                                                                    '#f54900',
                                                            }}
                                                        >
                                                            MY MARKET
                                                        </h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col p-0">
                                            <Link
                                                className="nav-link"
                                                to="/myproducts"
                                            >
                                                <div
                                                    class="text-center services-card m-2"
                                                    style={{
                                                        borderRadius:
                                                            '10px 10px 10px 10px',
                                                    }}
                                                >
                                                    <div
                                                        className="services-card-header"
                                                        style={{
                                                            backgroundColor:
                                                                '#832ad4',
                                                        }}
                                                    ></div>
                                                    <div class="card-body card-img">
                                                        <img
                                                            src="assets/product-icon.jpg"
                                                            alt=""
                                                        />
                                                        <h4
                                                            class="card-title P-5 my-auto"
                                                            style={{
                                                                color:
                                                                    '#832ad4',
                                                            }}
                                                        >
                                                            MY PRODUCTS
                                                        </h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col p-0">
                                            <Link
                                                className="nav-link"
                                                to="/myexport"
                                            >
                                                <div class="text-center services-card m-2">
                                                    <div
                                                        className="services-card-header"
                                                        style={{
                                                            backgroundColor:
                                                                '#006a94',
                                                        }}
                                                    ></div>
                                                    <div class="card-body card-img">
                                                        <img
                                                            src="assets/52474.jpg"
                                                            alt=""
                                                        />
                                                        <h4
                                                            class="card-title P-5 my-auto"
                                                            style={{
                                                                color:
                                                                    '#006a94',
                                                            }}
                                                        >
                                                            MY EXPORTS
                                                        </h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col p-0">
                                            <Link
                                                className="nav-link"
                                                to="/myeducation"
                                            >
                                                <div class="text-center services-card m-2">
                                                    <div
                                                        className="services-card-header"
                                                        style={{
                                                            backgroundColor:
                                                                '#f11c18',
                                                        }}
                                                    ></div>
                                                    <div class="card-body card-img">
                                                        <img
                                                            src="assets/my-edu-icon.jpg"
                                                            alt=""
                                                        />
                                                        <h4
                                                            class="card-title P-5 my-auto"
                                                            style={{
                                                                color:
                                                                    '#f11c18',
                                                            }}
                                                        >
                                                            MY EDUCATION
                                                        </h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col p-0">
                                            <Link
                                                className="nav-link"
                                                to="/mytools"
                                            >
                                                <div class="text-center services-card m-2">
                                                    <div
                                                        className="services-card-header"
                                                        style={{
                                                            backgroundColor:
                                                                '#312401',
                                                        }}
                                                    ></div>
                                                    <div class="card-body card-img">
                                                        <img
                                                            src="assets/tools-icon.jpg"
                                                            alt=""
                                                        />
                                                        <h4
                                                            class="card-title P-5 my-auto"
                                                            style={{
                                                                color:
                                                                    '#312401',
                                                            }}
                                                        >
                                                            MY TOOLS
                                                        </h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Events and updates */}
                <section id="eventsUpdates" className="events-section">
                    <div className="row m-0">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto">
                                    <h3 className="section-heading text-center">
                                        Important Events Updates
                                    </h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <h3 className="text-center text-success">
                                                Central/State Gov.Updates
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            {/* <div className="gov-updates">hello man</div> */}
                                            <div class="card gov-update-card">
                                                <div class="row no-gutters">
                                                    <div
                                                        class="col-sm-5"
                                                        style={{
                                                            backgroundColor:
                                                                '#315288',
                                                        }}
                                                    ></div>
                                                    <div class="col-sm-7">
                                                        <div class="card-body">
                                                            <h5 class="card-title">
                                                                Alice Liddel
                                                            </h5>
                                                            <p class="card-text">
                                                                Alice is a
                                                                freelance web
                                                                designer and
                                                                developer based
                                                                in London. She
                                                                is specialized
                                                                in HTML5, CSS3,
                                                                JavaScript,
                                                                Bootstrap, etc.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 event-images-wrap">
                                            <div className="selected-img-wrap">
                                                <img
                                                    src={selectedImg}
                                                    alt="selected"
                                                    className="selected"
                                                />
                                            </div>
                                            <div className="imgContainer">
                                                {Images.map((img, index) => (
                                                    <img
                                                        style={{
                                                            border:
                                                                selectedImg ===
                                                                img
                                                                    ? '4px solid purple'
                                                                    : '',
                                                        }}
                                                        key={index}
                                                        src={img}
                                                        alt="dog"
                                                        onClick={() =>
                                                            setSelectedImg(img)
                                                        }
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <h3 className="text-center text-danger">
                                                FEED Updates
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="card feed-update-card">
                                                <div class="row no-gutters">
                                                    <div
                                                        class="col-sm-5"
                                                        style={{
                                                            backgroundColor:
                                                                '#315288',
                                                        }}
                                                    ></div>
                                                    <div class="col-sm-7">
                                                        <div class="card-body">
                                                            <h5 class="card-title">
                                                                Alice Liddel
                                                            </h5>
                                                            <p class="card-text">
                                                                Alice is a
                                                                freelance web
                                                                designer and
                                                                developer based
                                                                in London. She
                                                                is specialized
                                                                in HTML5, CSS3,
                                                                JavaScript,
                                                                Bootstrap, etc.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div class="feed-update-card brd" style={{width:"400px",height:"120px"}}>
                                                <div class="row">
                                                    <div class="col-sm-5" style={{backgroundColor:"#315288"}}>
                                                        
                                                    </div>
                                                    <div class="col-sm-7">
                                                        <div class="">
                                                            <h5 class="">Alice Liddel</h5>
                                                            <p class="">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div class="card feed-update-card">
                                                <div class="row no-gutters">
                                                    <div
                                                        class="col-sm-5"
                                                        style={{
                                                            backgroundColor:
                                                                '#fcb912',
                                                        }}
                                                    ></div>
                                                    <div class="col-sm-7">
                                                        <div class="card-body">
                                                            <h5 class="card-title">
                                                                Alice Liddel
                                                            </h5>
                                                            <p class="card-text">
                                                                Alice is a
                                                                freelance web
                                                                designer and
                                                                developer based
                                                                in London. She
                                                                is specialized
                                                                in HTML5, CSS3,
                                                                JavaScript,
                                                                Bootstrap, etc.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card feed-update-card">
                                                <div class="row no-gutters">
                                                    <div
                                                        class="col-sm-5"
                                                        style={{
                                                            backgroundColor:
                                                                '#4aaee2',
                                                        }}
                                                    ></div>
                                                    <div class="col-sm-7">
                                                        <div class="card-body">
                                                            <h5 class="card-title">
                                                                Alice Liddel
                                                            </h5>
                                                            <p class="card-text">
                                                                Alice is a
                                                                freelance web
                                                                designer and
                                                                developer based
                                                                in London. She
                                                                is specialized
                                                                in HTML5, CSS3,
                                                                JavaScript,
                                                                Bootstrap, etc.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card feed-update-card">
                                                <div class="row no-gutters">
                                                    <div
                                                        class="col-sm-5"
                                                        style={{
                                                            backgroundColor:
                                                                '#038a45',
                                                        }}
                                                    ></div>
                                                    <div class="col-sm-7">
                                                        <div class="card-body">
                                                            <h5 class="card-title">
                                                                Alice Liddel
                                                            </h5>
                                                            <p class="card-text">
                                                                Alice is a
                                                                freelance web
                                                                designer and
                                                                developer based
                                                                in London. She
                                                                is specialized
                                                                in HTML5, CSS3,
                                                                JavaScript,
                                                                Bootstrap, etc.
                                                            </p>
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

                {/* How Feed Works */}
                <section id="howFeedWorks">
                    <div className="row m-0">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto">
                                    <h3 className="section-heading text-center">
                                        How FEED Works
                                    </h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto p-0">
                                    <video width="100%" height="565" controls className="feed-video">
                                        <source
                                            src="assets/feed-video.mp4"
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                 
                <section>
                    <div className="row m-0">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto">
                                    <h3 className="section-heading text-center">Testimonials</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 m-auto">
                                <Swiper spaceBetween={50}
                                loop={true}
                                Autoplay
                                navigation 
                                breakpoints= {
                                    {320 : {
                                      slidesPerView: 1,
                                      spaceBetween: 20
                                    }},
                                    {480 : {
                                      slidesPerView: 1,
                                      spaceBetween: 30
                                    }},
                                    {768 : {
                                      slidesPerView: 2,
                                      spaceBetween: 40
                                    }},
                                    {868 : {
                                        slidesPerView: 3,
                                        spaceBetween: 40
                                      }}
                                  }
                                onSlideChange={()=> console.log('slide change')} onSwiper={swiper=> console.log(swiper)}>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide>
                                                <div class="custom-swiper-slide">
                                                    <div class="testimonialBox">
                                                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                                                        <div class="content">
                                                            <p>loremipsum lorem ipsum loremipsum lorem ipsum loremipsum lorem ipsum loremipsum lorem ipsum loremipsum lorem ipsum</p>
                                                            <div class="details">
                                                                <div class="imgBx">
                                                                    <img src="/assets/man-icon.png" alt="user-icon"/>
                                                                    <span>Narayana</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide>
                                                <div class="custom-swiper-slide">
                                                    <div class="testimonialBox">
                                                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                                                        <div class="content">
                                                            <p>loremipsum lorem ipsum loremipsum lorem ipsum loremipsum lorem ipsum loremipsum lorem ipsum loremipsum lorem ipsum</p>
                                                            <div class="details">
                                                                <div class="imgBx">
                                                                    <img src="/assets/female-icon.png" alt="user-icon"/>
                                                                    <span>Kumari</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide>
                                                <div class="custom-swiper-slide">
                                                    <div class="testimonialBox">
                                                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                                                        <div class="content">
                                                            <p>loremipsum lorem ipsum loremipsum lorem ipsum loremipsum lorem ipsum loremipsum lorem ipsum loremipsum lorem ipsum</p>
                                                            <div class="details">
                                                                <div class="imgBx">
                                                                    <img src="/assets/man-icon.png" alt="user-icon"/>
                                                                    <span>Venkatesh</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide>
                                                <div class="custom-swiper-slide">
                                                    <div class="testimonialBox">
                                                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                                                        <div class="content">
                                                            <p>loremipsum lorem ipsum loremipsum lorem ipsum loremipsum lorem ipsum loremipsum lorem ipsum loremipsum lorem ipsum</p>
                                                            <div class="details">
                                                                <div class="imgBx">
                                                                    <img src="/assets/man-icon.png" alt="user-icon"/>
                                                                    <span>Narayana</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    </div> 
                                </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners */}
                <section class="mt-5">
                    <div class="row Partners-section m-0">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto">
                                    <h3 className="section-heading text-center">
                                        Partners
                                    </h3>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 m-auto">
                                <Swiper spaceBetween={50}
                                    loop={true}
                                    Autoplay={100}
                                    navigation 
                                    breakpoints= {
                                        {320 : {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                        }},
                                        {480 : {
                                        slidesPerView: 3,
                                        spaceBetween: 30
                                        }},
                                        {768 : {
                                        slidesPerView: 2,
                                        spaceBetween: 40
                                        }},
                                        {868 : {
                                            slidesPerView: 5,
                                            spaceBetween: 40
                                        }}
                                    }
                                >
                                    <div className="row">
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide>
                                                <img
                                                        src="assets/feed.png"
                                                        width="100"
                                                        alt="partner-logo"
                                                />
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide>
                                                <img
                                                        src="assets/nabard-logo.png"
                                                        width="100"
                                                        alt="partner-logo"
                                                />
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide>
                                                <img
                                                        src="assets/feed.png"
                                                        width="100"
                                                        alt="partner-logo"
                                                />
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide>
                                                <img
                                                        src="assets/nabard-logo.png"
                                                        width="100"
                                                        alt="partner-logo"
                                                />
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide>
                                                <img
                                                        src="assets/feed.png"
                                                        width="100"
                                                        alt="partner-logo"
                                                />
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide>
                                                <img
                                                        src="assets/nabard-logo.png"
                                                        width="100"
                                                        alt="partner-logo"
                                                />
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide>
                                                <img
                                                        src="assets/feed.png"
                                                        width="100"
                                                        alt="partner-logo"
                                                />
                                            </SwiperSlide>
                                        </div>
                                    </div>
                                  </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="newsletter-section-wrap">
                    <div className="row m-0">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 newsletter-section">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                            <h2>Newsletter Signup</h2>
                                        </div>
                                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
                                                        <input
                                                            type="email"
                                                            placeholder="Enter Email"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                                        <button className="btn btn-danger">
                                                            Subscribe
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <p style={{ fontWeight: 'bold' }}>
                                                GET THE LATEST UPDATES ON AGRI
                                            </p>
                                            <p>
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book. It has
                                                survived not only five
                                                centuries,
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                {/* <footer className="footer-section">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 footer-section-newsletter">
                               <div className="row">
                                   <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                        <h2>Newsletter Signup</h2>
                                   </div>
                                   <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
                                                    <input type="email" placeholder="Enter Email" className="form-control"/>
                                                </div>
                                                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                                    <button className="btn btn-danger">Subscribe</button>
                                                </div>
                                            </div>
                                        </form>
                                   </div>
                                   <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">

                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <p style={{fontWeight:"bold"}}>GET THE LATEST UPDATES ON AGRI</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 footer-section-links">
                                        <div className="row">
                                            <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                                <h6>QUICK LINKS</h6>
                                                <ul>
                                                    <li><a href="">Home</a></li>
                                                    <li><a href="">About Us</a></li>
                                                    <li><a href="">Services</a></li>
                                                    <li><a href="">Events</a></li>
                                                    <li><a href="">How FEED Works</a></li>
                                                    <li><a href="">FPO</a></li>
                                                    <li><a href="">Exports</a></li>
                                                    <li><a href="">Contact Us</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                                <h6>ABOUT US</h6>
                                                <ul>
                                                    <li><a href="">Our Story</a></li>
                                                    <li><a href="">Mission & Vission</a></li>
                                                    <li><a href="">Our Team</a></li>
                                                    <li><a href="">Founder Message</a></li>
                                                    <li><a href="">Press & Media</a></li>
                                                    <li><a href="">FAQ's</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                                <h6>SERVICES</h6>
                                                <ul>
                                                    <li><a href="">Buying</a></li>
                                                    <li><a href="">Selling</a></li>
                                                    <li><a href="">Financing</a></li>
                                                    <li><a href="">Crop Advisory</a></li>
                                                    <li><a href="">Input Sales</a></li>
                                                    <li><a href="">Quality Testing</a></li>
                                                    <li><a href="">Goods & Settlement</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                                <h6>CAREERS</h6>
                                                <ul>
                                                    <li><a href="">Why Feed</a></li>
                                                    <li><a href="">people philosophy</a></li>
                                                    <li><a href="">Career Opportunities</a></li>
                                                    <li><a href="">Join Us</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                                <h6>NEED HELP?</h6>
                                                <ul>
                                                    <li><a href="">Suggestions</a></li>
                                                    <li><a href="">Sample Works</a></li>
                                                    <li><a href="">Works</a></li>
                                                    <li><a href="">Queries</a></li>
                                                    <li><a href="">Complaints</a></li>
                                                    <li><a href="">FAQ's</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                                <h6>FEED INSIGHTS</h6>
                                                <ul>
                                                    <li><a href="">Suggestions</a></li>
                                                    <li><a href="">Sample Works</a></li>
                                                    <li><a href="">Works</a></li>
                                                    <li><a href="">Queries</a></li>
                                                    <li><a href="">Complaints</a></li>
                                                    <li><a href="">FAQ's</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <img src="assets/iphone.png" width="100%"/>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <img src="assets/btn-playstore.png" width="100%"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>                            
                </div>
                <div className="row conditions-row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 text-white" style={{display:"flex",justifyContent:"space-between",color:"white!important"}}>
                                <div><a href="" style={{color:"white"}}>Terms & Conditions</a> </div>
                                <div><a href="" style={{color:"white"}}>Privacy Policy</a></div>
                                <div><a href="" style={{color:"white"}}>Disclaimer</a></div>
                                
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 text-center">
                                &copy; 2021-2022 FEED ORG. All Rights Reserved
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">

                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}
            </div>
        </>
    )
}
export default Home
