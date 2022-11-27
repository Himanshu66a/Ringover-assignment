import React from 'react'
import './journey.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


function Journey() {
    return (
        <div className='Journey'>
            <div className="journey-box">
                <div className="journey-img">
                    <span>THE JOURNEY
                    </span>
                    <div className="fade">

                    </div>
                </div>
                {/* <img src="assets/grasspic.jpg" alt="" /> */}

            </div>
            <div className="journey-info">
                <div className="bullets">
                    <div className="timeline">

                    </div>
                </div>
                <div className="journey-child">
                    <div className="roots">The Roots
                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis atque voluptate voluptatem deserunt illum tenetur, sunt neque repudiandae autem labore eos adipisci voluptas impedit aliquid consectetur praesentium accusamus velit?</div>
                        <div>
                            <FontAwesomeIcon icon={faCircle} id='circle' />
                        </div>
                    </div>
                    <div className="roots">The Roots
                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis atque voluptate voluptatem deserunt illum tenetur, sunt neque repudiandae autem labore eos adipisci voluptas impedit aliquid consectetur praesentium accusamus velit?</div>
                        <div>
                            <FontAwesomeIcon icon={faCircle} id='circle' />
                        </div>
                    </div>
                    <div className="roots">The Roots
                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis atque voluptate voluptatem deserunt illum tenetur, sunt neque repudiandae autem labore eos adipisci voluptas impedit aliquid consectetur praesentium accusamus velit?</div>
                        <div>
                            <FontAwesomeIcon icon={faCircle} id='circle' />
                        </div>
                    </div>
                    <div className="roots">The Roots
                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis atque voluptate voluptatem deserunt illum tenetur, sunt neque repudiandae autem labore eos adipisci voluptas impedit aliquid consectetur praesentium accusamus velit?</div>
                        <div>
                            <FontAwesomeIcon icon={faCircle} id='circle' />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Journey