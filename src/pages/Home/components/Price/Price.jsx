import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Price = () => {
  const [tab, setTab] = useState(1);
  return (
    <section className="price">
      <h2 className="title price__title">Price plans</h2>
      <p className="desc price__desc">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>

      <div className="price__list">
        {/* first section */}
        <div className="price__item">
          <div className="price__item-silver">silver</div>
          <div className="price__item-block">
            <div className="price__item-price">$0.00</div>
            <div className="price__item-hour">/hour</div>
          </div>
          <p className="price__item-desc">
            For most businesses that want to optimize web queries
          </p>
          <div className="price__item-ui position">
            <div className="price__item-svg">
              <img src="/assets/Price/сheck+.svg" alt="сheck" />
            </div>
            <div className="price__item-text">UI Design</div>
          </div>

          <div className="price__item-web position">
            <div className="price__item-svg">
              <img src="/assets/Price/сheck+.svg" alt="сheck" />
            </div>
            <div className="price__item-text">Web Development</div>
          </div>

          <div className="price__item-logo position">
            <div className="price__item-svg">
              <img src="/assets/Price/сlose-.svg" alt="сlose" />
            </div>
            <div className="price__item-text">Logo Design</div>
          </div>

          <div className="price__item-seo position">
            <div className="price__item-svg">
              <img src="/assets/Price/сlose-.svg" alt="сlose" />
            </div>
            <div className="price__item-text">Seo Optimization</div>
          </div>

          <div className="price__item-wordPress position">
            <div className="price__item-svg">
              <img src="/assets/Price/сlose-.svg" alt="сlose" />
            </div>
            <div className="price__item-text">WordPress Integration</div>
          </div>

          <div className="price__item-websites position">
            <div className="price__item-svg">
              <img src="/assets/Price/сlose-.svg" alt="сlose" />
            </div>
            <div className="price__item-text">5 Websites</div>
          </div>

          <div className="price__item-unlimited position">
            <div className="price__item-svg">
              <img src="/assets/Price/сlose-.svg" alt="сlose" />
            </div>
            <div className="price__item-text">Unlimited User</div>
          </div>

          <div className="price__item-bandwith position">
            <div className="price__item-svg">
              <img src="/assets/Price/сlose-.svg" alt="сlose" />
            </div>
            <div className="price__item-text">20 GB Bandwith</div>
          </div>
          <Link to="/">
            <div
              onClick={() => setTab(2)}
              className={`btn price__item-btn btns ${
                tab === 2 ? "is-active" : ""
              }`}
            >
              ORDER NOW
            </div>
          </Link>
        </div>

        {/* second section */}
        <div className="price__item">
          <div className="price__item-mostPopular">most popular</div>
          <div className="price__item-silver">gold</div>
          <div className="price__item-block">
            <div className="price__item-price">$50.00</div>
            <div className="price__item-hour">/hour</div>
          </div>
          <p className="price__item-desc">
            For most businesses that want to optimize web queries
          </p>

            <div className="price__item-ui position">
              <div className="price__item-svg">
                <img src="/assets/Price/сheck+.svg" alt="сheck" />
              </div>
              <div className="price__item-text">UI Design</div>
            </div>

            <div className="price__item-web position">
              <div className="price__item-svg">
                <img src="/assets/Price/сheck+.svg" alt="сheck" />
              </div>
              <div className="price__item-text">Web Development</div>
            </div>

            <div className="price__item-logo position">
              <div className="price__item-svg">
                <img src="/assets/Price/сheck+.svg" alt="сheck" />
              </div>
              <div className="price__item-text">Logo Design</div>
            </div>

            <div className="price__item-seo position">
              <div className="price__item-svg">
                <img src="/assets/Price/сheck+.svg" alt="сheck" />
              </div>
              <div className="price__item-text">Seo Optimization</div>
            </div>

            <div className="price__item-wordPress position">
              <div className="price__item-svg">
                <img src="/assets/Price/сlose-.svg" alt="сlose" />
              </div>
              <div className="price__item-text">WordPress Integration</div>
            </div>

            <div className="price__item-websites position">
              <div className="price__item-svg">
                <img src="/assets/Price/сlose-.svg" alt="сlose" />
              </div>
              <div className="price__item-text">5 Websites</div>
            </div>

            <div className="price__item-unlimited position">
              <div className="price__item-svg">
                <img src="/assets/Price/сlose-.svg" alt="сlose" />
              </div>
              <div className="price__item-text">Unlimited User</div>
            </div>

            <div className="price__item-bandwith position">
              <div className="price__item-svg">
                <img src="/assets/Price/сlose-.svg" alt="сlose" />
              </div>
              <div className="price__item-text">20 GB Bandwith</div>
            </div>
            <Link to="*">
              <div
                onClick={() => setTab(1)}
                className={`btn price__item-btn btns ${
                  tab === 1 ? "is-active" : ""
                }`}
              >
                ORDER NOW
              </div>
            </Link>
        </div>

        {/* third section */}
        <div className="price__item">
          <div className="price__item-silver">dimond</div>
          <div className="price__item-block">
            <div className="price__item-price">$80.00</div>
            <div className="price__item-hour">/hour</div>
          </div>
          <p className="price__item-desc">
            For most businesses that want to optimize web queries
          </p>
          <div className="price__item-ui position">
            <div className="price__item-svg">
              <img src="/assets/Price/сheck+.svg" alt="сheck" />
            </div>
            <div className="price__item-text">UI Design</div>
          </div>

          <div className="price__item-web position">
            <div className="price__item-svg">
              <img src="/assets/Price/сheck+.svg" alt="сheck" />
            </div>
            <div className="price__item-text">Web Development</div>
          </div>

          <div className="price__item-logo position">
            <div className="price__item-svg">
              <img src="/assets/Price/сheck+.svg" alt="сheck" />
            </div>
            <div className="price__item-text">Logo Design</div>
          </div>

          <div className="price__item-seo position">
            <div className="price__item-svg">
              <img src="/assets/Price/сheck+.svg" alt="сheck" />
            </div>
            <div className="price__item-text">Seo Optimization</div>
          </div>

          <div className="price__item-wordPress position">
            <div className="price__item-svg">
              <img src="/assets/Price/сheck+.svg" alt="сheck" />
            </div>
            <div className="price__item-text">WordPress Integration</div>
          </div>

          <div className="price__item-websites position">
            <div className="price__item-svg">
              <img src="/assets/Price/сheck+.svg" alt="сheck" />
            </div>
            <div className="price__item-text">5 Websites</div>
          </div>

          <div className="price__item-unlimited position">
            <div className="price__item-svg">
              <img src="/assets/Price/сheck+.svg" alt="сheck" />
            </div>
            <div className="price__item-text">Unlimited User</div>
          </div>

          <div className="price__item-bandwith position">
            <div className="price__item-svg">
              <img src="/assets/Price/сheck+.svg" alt="сheck" />
            </div>
            <div className="price__item-text">20 GB Bandwith</div>
          </div>
          <Link to="/">
            <div
              onClick={() => setTab(3)}
              className={`btn price__item-btn btns ${
                tab === 3 ? "is-active" : ""
              }`}
            >
              ORDER NOW
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};