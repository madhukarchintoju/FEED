import React from 'react'
import './myMarket.css'

const Members = () => {
  return (
    <>
      <div className="members">
        <div className="member">
          <div className="member-icon icon1">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-market/farmer.png`}
              alt="icon"
            />
          </div>
          <div className="content">
            <h3 className="text-center">FARMER</h3>
            <button type="button" className="buy-now">
              BUY NOW
            </button>
            <button type="button" className="sell-here">
              SELL HERE
            </button>
          </div>
          <div className="style-elem style-elem-1"></div>
        </div>
        <div className="member">
          <div className="member-icon icon2">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-market/fpo.png`}
              alt="icon"
            />
          </div>
          <div className="content">
            <h3 className="text-center">FPO</h3>
            <button type="button" className="buy-now">
              BUY NOW
            </button>
            <button type="button" className="sell-here">
              SELL HERE
            </button>
          </div>
          <div className="style-elem style-elem-2"></div>
        </div>
        <div className="member">
          <div className="member-icon icon3">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-market/trader.png`}
              alt="icon"
            />
          </div>
          <div className="content">
            <h3 className="text-center">TRADER</h3>
            <button type="button" className="buy-now">
              BUY NOW
            </button>
            <button type="button" className="sell-here">
              SELL HERE
            </button>
          </div>
          <div className="style-elem style-elem-3"></div>
        </div>
        <div className="member">
          <div className="member-icon icon4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-market/msme.png`}
              alt="icon"
            />
          </div>
          <div className="content">
            <h3 className="text-center">MSME</h3>
            <button type="button" className="buy-now">
              BUY NOW
            </button>
            <button type="button" className="sell-here">
              SELL HERE
            </button>
          </div>
          <div className="style-elem style-elem-4"></div>
        </div>
        <div className="member">
          <div className="member-icon icon5">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-market/exporter.png`}
              alt="icon"
            />
          </div>
          <div className="content">
            <h3 className="text-center">EXPORTER</h3>
            <button type="button" className="buy-now">
              BUY NOW
            </button>
            <button type="button" className="sell-here">
              SELL HERE
            </button>
          </div>
          <div className="style-elem style-elem-5"></div>
        </div>
      </div>
    </>
  )
}

export default Members
