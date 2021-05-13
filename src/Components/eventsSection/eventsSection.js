import React, { useState } from 'react'
import './eventsSection.css'

export default function EventsSection() {
    const Images = [
        'assets/event-img-one.jpg',
        'assets/event-img-two.jpg',
        'assets/event-img-three.jpg',
        'assets/event-img-four.jpg',
    ]
    const [selectedImg, setSelectedImg] = useState(Images[0])
    return (
        <>
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
                                        <div className="card feed-update-card">
                                            <div className="row no-gutters">
                                                <div
                                                    className="col-sm-5"
                                                    style={{
                                                        backgroundColor:
                                                            '#315288',
                                                    }}
                                                ></div>
                                                <div className="col-sm-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            Alice Liddel
                                                        </h5>
                                                        <p className="card-text">
                                                            Alice is a freelance
                                                            web designer and
                                                            developer based in
                                                            London. She is
                                                            specialized in
                                                            HTML5, CSS3,
                                                            JavaScript,
                                                            Bootstrap, etc.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card feed-update-card">
                                            <div className="row no-gutters">
                                                <div
                                                    className="col-sm-5"
                                                    style={{
                                                        backgroundColor:
                                                            '#fcb912',
                                                    }}
                                                ></div>
                                                <div className="col-sm-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            Alice Liddel
                                                        </h5>
                                                        <p className="card-text">
                                                            Alice is a freelance
                                                            web designer and
                                                            developer based in
                                                            London. She is
                                                            specialized in
                                                            HTML5, CSS3,
                                                            JavaScript,
                                                            Bootstrap, etc.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card feed-update-card">
                                            <div className="row no-gutters">
                                                <div
                                                    className="col-sm-5"
                                                    style={{
                                                        backgroundColor:
                                                            '#4aaee2',
                                                    }}
                                                ></div>
                                                <div className="col-sm-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            Alice Liddel
                                                        </h5>
                                                        <p className="card-text">
                                                            Alice is a freelance
                                                            web designer and
                                                            developer based in
                                                            London. She is
                                                            specialized in
                                                            HTML5, CSS3,
                                                            JavaScript,
                                                            Bootstrap, etc.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card feed-update-card">
                                            <div className="row no-gutters">
                                                <div
                                                    className="col-sm-5"
                                                    style={{
                                                        backgroundColor:
                                                            '#038a45',
                                                    }}
                                                ></div>
                                                <div className="col-sm-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            Alice Liddel
                                                        </h5>
                                                        <p className="card-text">
                                                            Alice is a freelance
                                                            web designer and
                                                            developer based in
                                                            London. She is
                                                            specialized in
                                                            HTML5, CSS3,
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
                                                            selectedImg === img
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
                                        <div className="card feed-update-card">
                                            <div className="row no-gutters">
                                                <div
                                                    className="col-sm-5"
                                                    style={{
                                                        backgroundColor:
                                                            '#315288',
                                                    }}
                                                ></div>
                                                <div className="col-sm-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            Alice Liddel
                                                        </h5>
                                                        <p className="card-text">
                                                            Alice is a freelance
                                                            web designer and
                                                            developer based in
                                                            London. She is
                                                            specialized in
                                                            HTML5, CSS3,
                                                            JavaScript,
                                                            Bootstrap, etc.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card feed-update-card">
                                            <div className="row no-gutters">
                                                <div
                                                    className="col-sm-5"
                                                    style={{
                                                        backgroundColor:
                                                            '#fcb912',
                                                    }}
                                                ></div>
                                                <div className="col-sm-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            Alice Liddel
                                                        </h5>
                                                        <p className="card-text">
                                                            Alice is a freelance
                                                            web designer and
                                                            developer based in
                                                            London. She is
                                                            specialized in
                                                            HTML5, CSS3,
                                                            JavaScript,
                                                            Bootstrap, etc.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card feed-update-card">
                                            <div className="row no-gutters">
                                                <div
                                                    className="col-sm-5"
                                                    style={{
                                                        backgroundColor:
                                                            '#4aaee2',
                                                    }}
                                                ></div>
                                                <div className="col-sm-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            Alice Liddel
                                                        </h5>
                                                        <p className="card-text">
                                                            Alice is a freelance
                                                            web designer and
                                                            developer based in
                                                            London. She is
                                                            specialized in
                                                            HTML5, CSS3,
                                                            JavaScript,
                                                            Bootstrap, etc.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card feed-update-card">
                                            <div className="row no-gutters">
                                                <div
                                                    className="col-sm-5"
                                                    style={{
                                                        backgroundColor:
                                                            '#038a45',
                                                    }}
                                                ></div>
                                                <div className="col-sm-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            Alice Liddel
                                                        </h5>
                                                        <p className="card-text">
                                                            Alice is a freelance
                                                            web designer and
                                                            developer based in
                                                            London. She is
                                                            specialized in
                                                            HTML5, CSS3,
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
        </>
    )
}
