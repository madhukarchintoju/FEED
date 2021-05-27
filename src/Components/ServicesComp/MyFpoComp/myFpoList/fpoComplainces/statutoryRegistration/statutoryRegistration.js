import React from 'react'
import './statutoryRegistration.css'

export default function StatutoryRegistration() {
    return (
        <>
            <div className="statutory-compliance-wrap"
                style={{
                    backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/statutory-compliances-bg.jpg")`,
                    backgroundSize:"Cover"
                }}
            >
                <div className="text-center pt-2">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/statutaory-registrations-card.png`}
                        alt=""
                    />
                </div>
                <div className="row justify-content-around m-0 mt-2 text-center">
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/statutaory-registrations-fpo-regi.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/statutaory-registrations-fpc-regi.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/statutaory-registrations-gst-regi.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/statutaory-registrations-iec-regi.png`}
                            alt=""
                        />
                    </div>
                </div>
                <div className="row justify-content-around m-0 mt-2 text-center">
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/statutaory-registrations-msme-regi.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/statutaory-registrations-pan-regi.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/statutaory-registrations-fssai-regi.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/statutaory-registrations-iso-regi.png`}
                            alt=""
                        />
                    </div>
                </div>
                <div className="row justify-content-around m-0 mt-2 text-center">
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/statutaory-registrations-shops-est.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/statutaory-registrations-trade-lice.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/statutaory-registrations-labour-licen.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/statutaory-registrations-oth-regi.png`}
                            alt=""
                        />
                    </div>
                </div>
                <div className="row justify-content-around m-0 mt-3 pb-4 text-center">
                    <button className="btn btn-warning">CONNECT TO FEED</button>
                </div>
            </div>
        </>
    )
}
