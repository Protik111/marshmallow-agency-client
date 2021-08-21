import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import styles from './Count.module.css';
//import images
import satisfiedImage from '../../../images/logos/satisfied-client.png';
import finishImage from '../../../images/logos/finished-project.png';
import teamImage from '../../../images/logos/team-members.png';
import blogImage from '../../../images/logos/our-blog-posts.png';
//import aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import VisibilitySensor from 'react-visibility-sensor';

const Count = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className={`${styles.client_container} container mb-5 mt-5`}>
            <div className="row">
                <div data-aos="fade-up" className={`${styles.client} col-md-3 justify-content-center`}>
                    <div>
                        <img className="mt-3" src={satisfiedImage} alt="" />
                    </div>
                    <div className="client_status m-1">
                        <h1>
                            <CountUp
                                start={1}
                                end={97}
                                duration={5}
                                suffix='%'
                                redraw={true}
                            >
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </h1>
                        <h5 className="client_name">Satisfied Clients</h5>
                    </div>
                </div>

                <div data-aos="fade-down" className={`${styles.client} col-md-3 justify-content-center`}>
                    <div>
                        <img className="mt-3" src={finishImage} alt="" />
                    </div>
                    <div className="client_status m-1">
                        <h1>
                            <CountUp
                                start={1}
                                end={3742}
                                duration={8}
                            >
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </h1>
                        <h5 className="client_name">Finished Projects</h5>
                    </div>
                </div>

                <div data-aos="fade-up" className={`${styles.client} col-md-3 justify-content-center`}>
                    <div>
                        <img className="mt-3" src={teamImage} alt="" />
                    </div>
                    <div className="client_status m-1">
                        <h1>
                            <CountUp
                                start={1}
                                end={145}
                                duration={6}
                            >
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </h1>
                        <h5 className="client_name">Team Members</h5>
                    </div>
                </div>

                <div data-aos="fade-down" className={`${styles.client} col-md-3 justify-content-center`}>
                    <div>
                        <img className="mt-3" src={blogImage} alt="" />
                    </div>
                    <div className="client_status m-1">
                        <h1>
                            <CountUp
                                start={1}
                                end={2135}
                                duration={7}
                            >
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </h1>
                        <h5 className="client_name">Our Blog Posts</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;