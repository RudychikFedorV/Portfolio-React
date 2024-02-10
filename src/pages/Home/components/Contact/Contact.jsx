export const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__list">
        {/* first section */}
        <div className="contact__field">
          <h2 className="title contact__title">Leave us your info</h2>

          {/* form */}
          <form action="/" className="contact-form">
            <label className="contact-form__label">
              <span className="contact-form__desc">
                Your Full Name ( Required)
              </span>
              <div className="contact-form__input">
                <input
                  type="text"
                  id="name"
                  name="touch__name"
                  placeholder="Enter your name"
                />
              </div>
            </label>
            <label className="contact-form__label">
              <span className="contact-form__desc">Your Email ( Required)</span>
              <div className="contact-form__input">
                <input
                  type="email"
                  id="mail"
                  name="email__name"
                  placeholder="Enter your email"
                  required
                  autoComplete="off"
                />
              </div>
            </label>

            <label className="contact-form__label">
              <span className="contact-form__desc">Subject</span>
              <div className="contact-form__input">
                <input
                  type="text"
                  id="subject"
                  name="touch__name"
                  placeholder="Enter subject"
                />
              </div>
            </label>

            <label className="contact-form__label">
              <span className="contact-form__desc">Your Message</span>
              <div className="contact-form__input">
                <textarea
                  name="message"
                  id="text"
                  placeholder="Enter your messege"
                />
              </div>
            </label>

            <div className="contact-form__send">
              <button className="btn contact-form__btn">send message</button>
            </div>
          </form>
          {/* /form */}
        </div>

        {/* second section */}
        <div className="contact-info">
          <h2 className="title contact__title">Contact information</h2>
          {/* information-block one */}
          <div className="contact-info__block">
            <div className="contact-info__img">
              <img src="assets/Contact/location1.svg" alt="Location" />
            </div>
            <div className="contact-info__blocks">
              <div className="contact-info__desc">Country:</div>
              <div className="contact-info__info">Bangladesh</div>
            </div>
            <div className="contact-info__blocks">
              <div className="contact-info__desc">City:</div>
              <div className="contact-info__info">Dhaka</div>
            </div>
            <div className="contact-info__blocks">
              <div className="contact-info__desc">Streat:</div>
              <div className="contact-info__info">35 vhatara, Badda</div>
            </div>
          </div>

          {/* information-block two */}
          <div className="contact-info__block">
            <div className="contact-info__img">
              <img src="assets/Contact/mail2.svg" alt="Mail" />
            </div>
            <div className="contact-info__blocks">
              <div className="contact-info__desc">Email:</div>
              <div className="contact-info__info">
                <a href="mailto:youremail@gmail.com">youremail@gmail.com</a>
              </div>
            </div>
            <div className="contact-info__blocks">
              <div className="contact-info__desc">Skype:</div>
              <div className="contact-info__info">
                <a href="skype:@yourusername">@yourusername</a>
              </div>
            </div>
            <div className="contact-info__blocks">
              <div className="contact-info__desc">Telegram:</div>
              <div className="contact-info__info">
                <a href="tg:@yourusername">@yourusername</a>
              </div>
            </div>
          </div>

          {/* information-block three */}
          <div className="contact-info__block">
            <div className="contact-info__img">
              <img src="assets/Contact/mobile3.svg" alt="Mobile" />
            </div>
            <div className="contact-info__blocks">
              <div className="contact-info__desc">
                Support services::
              </div>
              <div className="contact-info__info">15369</div>
            </div>
            <div className="contact-info__blocks">
              <div className="contact-info__desc">Office:</div>
              <div className="contact-info__info">
                <a href="tel:+58 (021)356 587 235">+58 (021)356 587 235</a>
              </div>
            </div>
            <div className="contact-info__blocks">
              <div className="contact-info__desc">Personal:</div>
              <div className="contact-info__info">
                <a href="tel:+58 (021)356 587 235">+58 (021)356 587 235</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact__img">
        <img src="assets/Contact/map.png" alt="Map" />
      </div>
    </section>
  );
};
