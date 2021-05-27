import React from 'react'

export default function AnnualCompliances() {
    return (
        <>
            <div className="statutory-compliance-wrap"
                style={{
                    backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/annual-compliances-bg.jpg")`,
                    backgroundSize:"Cover"
                }}
            >
                <div className="text-center pt-2">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/annual-compliances-card.png`}
                        alt=""
                    />
                </div>
                <div className="row justify-content-around m-0 mt-2 text-center">
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/annual-compliances-income-tax.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/annual-compliances-gst-return.png`}
                            alt=""
                        />
                    </div>
                </div>
                <div className="row justify-content-around m-0 mt-2 text-center">
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/annual-compliances-prep-finan.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/annual-compliances-audit-rpt.png`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/annual-compliances-stock-check.png`}
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
