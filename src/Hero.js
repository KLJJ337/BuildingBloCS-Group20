import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <h1>Know what's a scam and what's not.</h1>

      <div id="hero__cards">
        <div>
          <h2>Having a scam call now?</h2>
          <p>
            If you think you're having a scam call now, look through the
            checklist below to check. If you're still not sure, click on the
            button below.
          </p>

          <p>Is the caller...</p>
          <div id="hero__scam-cards">
            <div className="hero__scam-card">
              <p>Forcing a sense of urgency (e.g., time-sensitive threats)?</p>
              <ul>
                <li>
                  "If you don't pay now, your bank account will be suspended."
                </li>
                <li>"You have to do this now, or else you'll be arrested."</li>
              </ul>
            </div>
            <div className="hero__scam-card">
              <p>
                Asking you to pay for something first with weird payment methods
                (e.g., gift cards)?
              </p>
              <ul>
                <li>
                  "We've overcharged you. Please pay us back with gift cards."
                </li>
              </ul>
            </div>
            <div className="hero__scam-card">
              <p>Asking you to do things you otherwise wouldn't do normally?</p>
              <ul>
                <li>
                  "Please download this software so we can help you with your
                  computer."
                </li>
              </ul>
            </div>
          </div>

          {/* TODO: Complete this feature */}
          <button>I'm still not sure</button>
        </div>

        <div>
          <h2>Want to learn more?</h2>

          <div>
            <p>
              We're trying to build the world's biggest crowd-sourced forum for
              fighting against spam calls. The truth is, millions of scam calls
              are being made daily. While most of us are aware of them and
              gleefully ignore them, there are still many who are unaware of
              them and fall prey to them.
            </p>

            <p>
              Help us to play an active role in helping these group of people by
              sharing your experience. Together, we can make the cyber world a
              bit more safer.
            </p>
          </div>

          <div id="hero__help-cards">
            <div className="hero__help-card">
              <h3>Share your experience</h3>
              <p>
                Have you received a scam call before? Share your experience with
                us so that others can learn from it.
              </p>
              <button>Share now</button>
            </div>

            <div className="hero__help-card">
              <h3>Learn from others</h3>
              <p>
                Learn from others' experience so that you can be better
                prepared.
              </p>
              <button>Learn now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
