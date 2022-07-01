import React, { useEffect } from "react";
import "./../Banner/Modal.css";
import arrow from "./arrow.svg";
import ftx from "./ftx.svg";
import kucoin from "./kucoin.svg";
import huobi from "./huobi.svg";
import gate from "./gate.svg";
import transak from "./transak.svg";
import uniswap from "./uniswap.svg";
import saddle from "./saddle.svg";
import close from "./close.svg";

const Modal = ({ show, onHide, type }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        return;
      } else {
        document.body.style.paddingRight = "16px";
      }
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0";
    }
  }, [show]);
  return (
    show && (
      <>
        <div className="modal-mask" />
        <div className="dialog-mask">
          <div className="modal-container-default">
            <div
              style={{
                textAlign: "right",
                width: "100%",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              <img
                style={{ cursor: "pointer" }}
                src={close}
                onClick={() => onHide()}
              />
            </div>
            {type === "SPA" ? (
              <div className="modal-content-default">
                <div className="sub_title">With Fiat</div>
                <div className="assets_group">
                  <div className="assets-row">
                    <div style={{ display: "flex" }}>
                      <img className="asset-icon" src={transak} />
                      <div className="title">Transak</div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img className="arrow_img" src={arrow} />
                      <a
                        className="buy"
                        href="https://global.transak.com/?apiKey=6f11a8a6-81e6-4639-915c-13bac6fba229&cryptoCurrencyList=USDS,ETH,USDC,SPA&defaultNetwork=arbitrum&networks=ethereum,arbitrum&defaultCryptoCurrency=SPA"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sub_title">Centralised Exchange</div>
                <div className="assets_group">
                  <div className="assets-row" style={{ marginBottom: "20px" }}>
                    <div style={{ display: "flex" }}>
                      <img className="asset-icon" src={ftx} />
                      <div className="title">FTX</div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img className="arrow_img" src={arrow} />
                      <a
                        className="buy"
                        href="https://ftx.com/trade/SPA/USD"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                  <div className="assets-row" style={{ marginBottom: "20px" }}>
                    <div style={{ display: "flex" }}>
                      <img className="asset-icon" src={gate} />
                      <div className="title">Gate.io</div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img className="arrow_img" src={arrow} />
                      <a
                        className="buy"
                        href="https://www.gate.io/cn/trade/SPA_USDT/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                  <div className="assets-row" style={{ marginBottom: "20px" }}>
                    <div style={{ display: "flex" }}>
                      <img className="asset-icon" src={huobi} />
                      <div className="title">Huobi</div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img className="arrow_img" src={arrow} />
                      <a
                        className="buy"
                        href="https://www.huobi.com/exchange/spa_usdt"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                  <div className="assets-row">
                    <div style={{ display: "flex" }}>
                      <img className="asset-icon" src={kucoin} />
                      <div className="title">Kucoin</div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img className="arrow_img" src={arrow} />
                      <a
                        className="buy"
                        href="https://www.kucoin.com/trade/SPA-USDT"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sub_title">Decentralised Exchange</div>
                <div className="assets_group">
                  <div className="assets-row">
                    <div style={{ display: "flex" }}>
                      <img className="asset-icon" src={uniswap} />
                      <div className="title">Uniswap Arbitrum</div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img className="arrow_img" src={arrow} />
                      <a
                        className="buy"
                        href="https://app.uniswap.org/#/swap?chain=arbitrum&inputCurrency=0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8&outputCurrency=0x5575552988A3A80504bBaeB1311674fCFd40aD4B"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="modal-content-default">
                <div className="sub_title">With Fiat</div>
                <div className="assets_group">
                  <div className="assets-row">
                    <div style={{ display: "flex" }}>
                      <img className="asset-icon" src={transak} />
                      <div className="title">Transak</div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img className="arrow_img" src={arrow} />
                      <a
                        className="buy"
                        href="https://global.transak.com/?apiKey=6f11a8a6-81e6-4639-915c-13bac6fba229&cryptoCurrencyList=USDS,ETH,USDC,SPA&defaultNetwork=arbitrum&networks=ethereum,arbitrum&defaultCryptoCurrency=USDS"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sub_title">Decentralised Exchange</div>
                <div className="assets_group">
                  <div className="assets-row">
                    <div style={{ display: "flex" }}>
                      <img className="asset-icon" src={uniswap} />
                      <div className="title">Uniswap Arbitrum</div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img className="arrow_img" src={arrow} />
                      <a
                        className="buy"
                        href="https://app.uniswap.org/#/swap?chain=arbitrum&inputCurrency=0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8&outputCurrency=0xD74f5255D557944cf7Dd0E45FF521520002D5748"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                  <div className="assets-row" style={{ marginTop: "20px" }}>
                    <div style={{ display: "flex" }}>
                      <img className="asset-icon" src={saddle} />
                      <div className="title">Saddle</div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img className="arrow_img" src={arrow} />
                      <a
                        className="buy"
                        href="https://saddle.exchange/#/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    )
  );
};
export default Modal;
