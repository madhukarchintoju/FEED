import React from 'react'
import './legalCompliances.css'

export default function LegalCompliances() {
    return (
        <>
            <div className="legal-compliance-wrap">
                <div className="text-center pt-2">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/legal-compliance-card.png`}
                        alt=""
                    />
                </div>
                <div className="row justify-content-around m-0 mt-2 text-center">
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/fpo-legal-compliances-gst-card.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/fpo-legal-compliances-filling-card.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/fpo-legal-compliances-tds-filling-card.png`}
                            alt=""
                        />
                    </div>
                </div>
                <div className="row justify-content-around m-0 mt-2 text-center">
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/fpo-legal-compliances-roc-card.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/fpo-legal-compliances-support-service-card.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/fpo-legal-compliances-audit-apoint-card.png`}
                            alt=""
                        />
                    </div>
                </div>
                <div className="row justify-content-around m-0 mt-2 text-center">
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/fpo-legal-compliances-mbm-card.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/fpo-legal-compliances-corp-gov-card.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/fpo-legal-compliances-stock-check-card.png`}
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
