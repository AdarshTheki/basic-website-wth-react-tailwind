import avatar_anisha from "./images/avatar-anisha.png";
import avatar_shanai from "./images/avatar-shanai.png";
import avatar_richard from "./images/avatar-richard.png";
import avatar_ali from "./images/avatar-ali.png";
import icon_hamburger from "./images/icon-hamburger.svg";
import icon_close from "./images/icon-close.svg";
import illustration_intro from "./images/illustration-intro.svg";
import logo from "./images/logo_copy.svg";
import "./Portfolio.css";

import { BsFacebook, BsPinterest } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { useState } from "react";

const Portfolio = () => {

  const [menu, setMenu] = useState(false);
  const showSidebar = () => setMenu(!menu);
  return (
    <>
      <header className='primary-header'>
        <div className='container'>
          <div className='nav-wrapper'>
            <a href='#'>
              <img src={logo} alt='logo' />
            </a>

            <button className='mobile-nav-toggle'>
              {
                menu ? 
                (<img onClick={() => setMenu(!menu)} 
                    className='icon-close' src={icon_close} />)
                : (<img onClick={() => setMenu(!menu)}
                    className='icon-hamburger' src={icon_hamburger} />)
              }
            </button>

            <nav className={menu ? 'primary-navigation-display primary-header-bef' : 'primary-navigation'}>
              <ul className='nav-list' onClick={showSidebar}>
                <li>
                  <a href='#'>Pricing</a>
                </li>
                <li>
                  <a href='#'>Product</a>
                </li>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Careers</a>
                </li>
                <li>
                  <a href='#'>Community</a>
                </li>
              </ul>
            </nav>
            <button className='button'>Login</button>
          </div>
        </div>
      </header>

      <main>
        {/* <!-- Section One --> */}
        <section className='padding-block-900'>
          <div className='container'>
            <div className='even-columns'>
              {/* <!-- Left section --> */}
              <div className='flow '>
                <h1 className='fs-primary-heading fw-bold'>
                  Bring everyone together to build better products.
                </h1>
                <p>
                  Manage makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view.
                </p>
                <button className='button'>Get Started</button>
              </div>
              {/* <!-- Right section --> */}
              <div>
                <img src={illustration_intro} alt='illustration' />
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Section Two --> */}
        <section className='padding-block-700'>
          <div className='container'>
            <div className='even-columns'>
              {/* <!-- Left Section --> */}
              <div className='flow text-center-sm '>
                <h2 className='fs-secondary-heading fw-bold'>
                  What’s different about Manage?
                </h2>
                <p>
                  Manage provides all the functionality your team needs, without
                  the complexity. Our software is tailor-made for modern digital
                  product teams.
                </p>
              </div>
              {/* <!-- Right Section --> */}
              <div>
                <ul role='list' className='numbered-items | flow'>
                  <li>
                    <div className='flow spacer'>
                      

                      <h3 className='numbered-items__title | fs-600 fw-bold'>
                        Track company-wide progress
                      </h3>
                      <p className='numbered-items__body' data-width='wide'>
                        See how your day-to-day tasks fit into the wider vision.
                        Go from tracking progress at the milestone level all the
                        way done to the smallest of details. Never lose sight of
                        the bigger picture again.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='flow spacer'>
                      
                      <h3 className='numbered-items__title | fs-600 fw-bold'>
                        Advanced built-in reports
                      </h3>
                      <p className='numbered-items__body' data-width='wide'>
                        Set internal delivery estimates and track progress
                        toward company goals. Our customisable dashboard helps
                        you build out the reports you need to keep key
                        stakeholders informed.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='flow spacer'>
                      
                      <h3 className='numbered-items__title | fs-600 fw-bold'>
                        Everything you need in one place
                      </h3>
                      <p className='numbered-items__body' data-width='wide'>
                        Stop jumping from one service to another to communicate,
                        store files, track tasks and share documents. Manage
                        offers an all-in-one team productivity solution.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Section Three --> */}
        <section className='carousel | padding-block-700'>
          <div className='container text-center'>
            <h2 className='fs-primary-heading fw-bold'>What they’ve said</h2>
            <div className='slider'>
              <div>
                <img src={avatar_anisha} alt='pic1' width='80px' />
                <h2 className='fs-600 fw-bold'>Anisha Li</h2>
                <p data-width='wide'>
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </p>
              </div>
              <div>
                <img src={avatar_ali} alt='pic2' width='80px' />
                <h2 className='fs-600 fw-bold'>Ali Bravo</h2>
                <p data-width='wide'>
                  “We have been able to cancel so many other subscriptions since
                  using Manage. There is no more cross-channel confusion and
                  everyone is much more focused.”
                </p>
              </div>
              <div>
                <img src={avatar_richard} alt='pic3' width='80px' />
                <h2 className='fs-600 fw-bold'>Richard Watts</h2>
                <p data-width='wide'>
                  “Manage allows us to provide structure and process. It keeps
                  us organized and focused. I can’t stop recommending them to
                  everyone I talk to!”
                </p>
              </div>
              <div>
                <img src={avatar_shanai} alt='pic4' width='80px' />
                <h2 className='fs-600 fw-bold'>Shanai Gough</h2>
                <p data-width='wide'>
                  “Their software allows us to track, manage and collaborate on
                  our projects from anywhere. It keeps the whole team in-sync
                  without being intrusive.”
                </p>
              </div>
            </div>
            {/* <!-- carousel here --> */}
            <button className='button'>Get Started</button>
          </div>
        </section>

        <section className='cta | padding-block-700 bg-accent-400 text-neutral-100'>
          <div className='container'>
            <div className='even-columns | center'>
              <div>
                <p className='fs-primary-heading fw-bold'>
                  Simplify how your team works today.
                </p>
              </div>
              <div>
                <button className='button' data-type='inverted'>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- footer section --> */}
      <footer className='primary-footer | padding-block-700 bg-neutral-900 text-neutral-100'>
        <div className='container'>
          <div className='primary-footer-wrapper logo-social'>
            <div className='primary-footer-logo-social'>
              <a href='#'>
                <img src={logo} alt='logo' />
              </a>
              <ul className='social-list' role='list' aria-label='social links'>
                <li>
                  <a aria-label='facebook' href='#'>
                    <BsFacebook className="social-icon"/>
                  </a>
                </li>
                <li>
                  <a aria-label='youtube' href='#'>
                    <FaYoutube className="social-icon"/>
                  </a>
                </li>
                <li>
                  <a aria-label='twitter' href='#'>
                    <AiFillTwitterCircle className="social-icon"/>
                  </a>
                </li>
                <li>
                  <a aria-label='pinterest' href='#'>
                    <BsPinterest className="social-icon"/>
                  </a>
                </li>
                <li>
                  <a aria-label='instagram' href='#'>
                    <AiOutlineInstagram className="social-icon"/>
                  </a>
                </li>
              </ul>
            </div>
            <div className='primary-footer-nav'>
              <nav className='footer-nav'>
                <ul
                  className='flow spacer'
                  aria-label='Footer'
                  role='list'>
                  <li>
                    <a href='#'>Home</a>
                  </li>
                  <li>
                    <a href='#'>Pricing</a>
                  </li>
                  <li>
                    <a href='#'>Products</a>
                  </li>
                  <li>
                    <a href='#'>About Us</a>
                  </li>
                </ul>
                <ul
                  className='flow spacer'
                  aria-label='Footer'
                  role='list'>
                  <li>
                    <a href='#'>Careers</a>
                  </li>
                  <li>
                    <a href='#'>Community</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='primary-footer-form'>
              <form action=''>
                <input type='email' placeholder='Updates in your inbox…' />
                <button className='button' data-shadow='none'>
                  Go
                </button>
              </form>
              <p className='copyright'>Copyright 2020. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
