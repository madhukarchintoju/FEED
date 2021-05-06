import React, {useState} from 'react';
import './home.css';
import { Link } from 'react-router-dom';



function Home () {

    const Images =[
        "assets/event-img-one.jpg",
        "assets/event-img-two.jpg",
        "assets/event-img-three.jpg",
        "assets/event-img-four.jpg"
    ]
    const [selectedImg, setSelectedImg] = useState(Images[0]);
    return (
        <>
            <div className="container-fluid p-0">
                {/* <div className="row m-0 sticky-top header-top">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-12 col-xs-12 feed-logo">
                                <img src="assets/feed.png" className="feed-logo-img"/>
                            </div>
                            <div className="col-lg-10 col-md-8 col-sm-12 col-xs-12">
                                <div className="row orange-stripe" style={{backgroundImage:`URL("/assets/orange-stripe.png")`}}>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="row nav-orange p-2" style={{borderBottomLeftRadius:"50px"}}>
                                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 my-auto text-white contact-num">
                                                <img src="assets/phone.svg" width="25"/> <span>+91 9293858689</span>
                                            </div>
                                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 my-auto text-white contact-mail">
                                                <img src="assets/email.svg" width="25"/> <span>info@feedorg.com</span>
                                            </div>
                                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col">
                                                <form>
                                                    <select class="lng-select form-control">
                                                    <option value="">Language</option>
                                                    <option value="">English</option>
                                                        <option value="">Telugu</option>
                                                        <option value="">Tamil</option>
                                                        <option value="">Hindi</option>
                                                        <option value="">Marati</option>
                                                    </select>
                                                </form>
                                            </div>
                                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col">
                                                <button class="btn btn-primary download-btn form-control"><i class="fa fa-download" aria-hidden="true"></i> Downloads</button>
                                            </div>
                                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 search-bar">
                                                <form class="form-inline">
                                                    <div class="form-group has-search">
                                                        <input type="text" class="form-control" placeholder="Search"/>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 my-auto header-social-icons">
                                                <a href=""><img src="assets/facebook.svg" width="30"/></a>
                                                <a href=""><img src="assets/instagram.svg" width="30"/></a>
                                                <a href=""><img src="assets/twitter.svg" width="30"/></a>
                                                <a href=""><img src="assets/linkedin.svg" width="30"/></a>
                                                <a href=""><img src="assets/youtube.svg" width="30"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <h3 className="m-2 title text-center">FARM TO FOREIGN EXPORTS ENTERPRENEURSHIP DEVELOPMENT MULTI STATE COOPERATIVE SOCIETY LTD.</h3>
                                        <h6 className="reg-no text-right m-0">REG.No: MSCS/CR/1295/2020</h6>
                                    </div>
                                </div>
                                <div className="row green-stripe" style={{backgroundImage:`URL("/assets/green-stripe.png")`}}>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <nav class="navbar navbar-expand-lg nav-list">
                                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                <i class="fa fa-bars" aria-hidden="true"></i>
                                            </button>
                                            <div class="collapse navbar-collapse" id="navbarNav">
                                                <ul class="navbar-nav">
                                                    <li class="nav-item active">
                                                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">About Us</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Services</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#eventsUpdates">Events</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#howFeedWorks">How Feed Works</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">FPO</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Exports</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Contact Us</a>
                                                    </li>
                                                </ul>
                                                <button class="login-btn">LOGIN</button>
                                                <button class="register-btn">REGISTER</button>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <section class="carousel-section p-0">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/assets/village-famer.jpg" class="d-block w-100 img-fluid" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/assets/cow.jpg" class="d-block w-100 img-fluid" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/assets/transportation-logistics.jpg" class="d-block w-100 img-fluid" alt="..."/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
                                            <h1 className="aboutus-title">About Us</h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 aboutus-content">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 objective-content-wrap">
                                            <h3 className="objective-title">Objective</h3>
                                            <p className="objective-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="row" style={{backgroundColor:"#b6bbfc"}}>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div class="card vision-card text-center">
                                                        <div class="card-header">
                                                            <img src="assets/vision.png" alt="vision-icon"/>
                                                            <span className="vision-title">Vision</span>
                                                        </div>
                                                        <div class="card-body p-2">
                                                            <p className="card-text vision-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div class="card mission-card text-center">
                                                        <div class="card-header">
                                                            <img src="assets/mission.png" alt="mission-icon"/>
                                                            <span className="mission-title">Mission</span>
                                                        </div>
                                                        <div class="card-body p-2">
                                                            <p class="card-text mission-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
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
                                    <h3 className="section-heading text-center">FEED Services</h3>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <img src="assets/rocket-one.png" className="img-fluid feed-service-img" alt=""/>
                                </div>
                                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                            <Link className="nav-link" to="/myfpo">
                                                <div class="text-center services-card m-2">
                                                    <div className="services-card-header" style={{backgroundColor:"#fbba14"}}>

                                                    </div>
                                                    <div class="card-body card-img P-0">
                                                        <img src="assets/fpo-icon.jpg" width="100" alt=""/>
                                                        <h4 class="card-title my-auto" style={{color:"#fbba14"}}>MY FPO</h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                            <Link className="nav-link" to="/myfarm">
                                                <div class="text-center services-card m-2">
                                                    <div className="services-card-header" style={{backgroundColor:"#79b247"}}>

                                                    </div>
                                                    <div class="card-body card-img">
                                                        <img src="assets/farm-icon.jpg" width="100" alt=""/>
                                                        <h4 class="card-title P-5 my-auto"  style={{position:"relative",color:"#79b247"}}>MY FARM </h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                            <div class="text-center services-card m-2">
                                                <div className="services-card-header" style={{backgroundColor:"#2f79e4"}}>

                                                </div>
                                                <div class="card-body card-img">
                                                    <img src="assets/my-business-icon.jpg" width="100" alt=""/>
                                                    <h4 class="card-title P-5 my-auto"  style={{position:"relative",height:"10px",top:"-50px",fontWeight:"bold",color:"#2f79e4"}}>MY BUSINESS</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                            <div class="text-center services-card m-2">
                                                <div className="services-card-header" style={{backgroundColor:"#f54900"}}>

                                                </div>
                                                <div class="card-body card-img">
                                                    <img src="assets/cart-icon.jpg" width="100" alt=""/>
                                                    <h4 class="card-title P-5 my-auto"  style={{color:"#f54900"}}>MY MARKET</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                            <div class="text-center services-card m-2" style={{borderRadius:"10px 10px 10px 10px"}}>
                                                <div className="services-card-header" style={{backgroundColor:"#832ad4"}}>

                                                </div>
                                                <div class="card-body card-img">
                                                    <img src="assets/product-icon.jpg" width="100" alt=""/>
                                                    <h4 class="card-title P-5 my-auto"  style={{color:"#832ad4"}}>MY PRODUCTS</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                            <div class="text-center services-card m-2">
                                                <div className="services-card-header" style={{backgroundColor:"#006a94"}}>

                                                </div>
                                                <div class="card-body card-img">
                                                    <img src="assets/52474.jpg" width="100" alt=""/>
                                                    <h4 class="card-title P-5 my-auto"  style={{color:"#006a94"}}>MY EXPORTS</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                            <div class="text-center services-card m-2">
                                                <div className="services-card-header" style={{backgroundColor:"#f11c18"}}>

                                                </div>
                                                <div class="card-body card-img">
                                                    <img src="assets/my-edu-icon.jpg" width="100" alt=""/>
                                                    <h4 class="card-title P-5 my-auto"  style={{color:"#f11c18"}}>MY EDUCATION</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                            <div class="text-center services-card m-2">
                                                <div className="services-card-header" style={{backgroundColor:"#312401"}}>

                                                </div>
                                                <div class="card-body card-img">
                                                    <img src="assets/tools-icon.jpg" width="100" alt=""/>
                                                    <h4 class="card-title P-5 my-auto"  style={{color:"#312401"}}>MY TOOLS</h4>
                                                </div>
                                            </div>
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
                                    <h3 className="section-heading text-center">Important Events Updates</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <h3 className="text-center text-success">Central/State Gov.Updates</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            {/* <div className="gov-updates">hello man</div> */}
                                            <div class="card gov-update-card">
                                                <div class="row no-gutters">
                                                    <div class="col-sm-5" style={{backgroundColor:"#315288"}}>
                                                        
                                                    </div>
                                                    <div class="col-sm-7">
                                                        <div class="card-body">
                                                            <h5 class="card-title">Alice Liddel</h5>
                                                            <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
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
                                                <img src={selectedImg} alt="selected" className="selected"/>
                                            </div>
                                            <div className="imgContainer">
                                                {Images.map((img,index) => (
                                                    <img 
                                                    style={{border:selectedImg===img ? "4px solid purple" : ""}}
                                                    key={index} 
                                                    src={img} 
                                                    alt="dog"
                                                    onClick={()=> setSelectedImg(img)}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <h3 className="text-center text-danger">FEED Updates</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="card feed-update-card">
                                                <div class="row no-gutters">
                                                    <div class="col-sm-5" style={{backgroundColor:"#315288"}}>
                                                        
                                                    </div>
                                                    <div class="col-sm-7">
                                                        <div class="card-body">
                                                            <h5 class="card-title">Alice Liddel</h5>
                                                            <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
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
                                                    <div class="col-sm-5" style={{backgroundColor:"#fcb912"}}>
                                                        
                                                    </div>
                                                    <div class="col-sm-7">
                                                        <div class="card-body">
                                                            <h5 class="card-title">Alice Liddel</h5>
                                                            <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card feed-update-card">
                                                <div class="row no-gutters">
                                                    <div class="col-sm-5" style={{backgroundColor:"#4aaee2"}}>
                                                        
                                                    </div>
                                                    <div class="col-sm-7">
                                                        <div class="card-body">
                                                            <h5 class="card-title">Alice Liddel</h5>
                                                            <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card feed-update-card">
                                                <div class="row no-gutters">
                                                    <div class="col-sm-5" style={{backgroundColor:"#038a45"}}>
                                                        
                                                    </div>
                                                    <div class="col-sm-7">
                                                        <div class="card-body">
                                                            <h5 class="card-title">Alice Liddel</h5>
                                                            <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
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
                                    <h3 className="section-heading text-center">How FEED Works</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto p-0">
                                <video width="100%" height="565" controls>
                                    <source src="assets/feed-video.mp4" type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                    
                {/* Testimonials */}


                {/* Partners */}
                <section class="mt-5">
                <div class="row Partners-section m-0">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto">
                                <h3 className="section-heading text-center">Partners</h3>
                            </div>
                        </div>
                        <marquee direction="left">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <img src="assets/feed.png" width="100" alt="partner-logo"/>
                                        </div>
                                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <img src="assets/nabard-logo.png" width="100" alt="partner-logo"/>
                                        </div>
                                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <img src="assets/feed.png" width="100" alt="partner-logo"/>
                                        </div>
                                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <img src="assets/nabard-logo.png" width="100" alt="partner-logo"/>
                                        </div>
                                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <img src="assets/feed.png" width="100" alt="partner-logo"/>
                                        </div>
                                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <img src="assets/nabard-logo.png" width="100" alt="partner-logo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </marquee>
                        {/* <OwlCarousel 
                            className="owl-theme" 
                            loop margin={10} 
                            nav>

                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 item">
                                            <img src="assets/feed.png" width="100" alt="partner-logo"/>
                                        </div>
                                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 item">
                                            <img src="assets/nabard-logo.png" width="100" alt="partner-logo"/>
                                        </div>
                                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 item">
                                            <img src="assets/feed.png" width="100" alt="partner-logo"/>
                                        </div>
                                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 item">
                                            <img src="assets/nabard-logo.png" width="100" alt="partner-logo"/>
                                        </div>
                                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 item">
                                            <img src="assets/feed.png" width="100" alt="partner-logo"/>
                                        </div>
                                        <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 item">
                                            <img src="assets/nabard-logo.png" width="100" alt="partner-logo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> */}
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
                                                    <input type="email" placeholder="Enter Email" className="form-control"/>
                                                </div>
                                                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                                    <button className="btn btn-danger">Subscribe</button>
                                                </div>
                                            </div>
                                        </form>
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
    );
}
export default Home;