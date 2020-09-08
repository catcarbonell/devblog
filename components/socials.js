import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
    return(
        <div className="flex flex-row content-evenly text-custom-violet">
            <a href="https://twitter.com/catcarbn" target="new">
                <FontAwesomeIcon icon={faTwitter} className="w-8 mr-4" size="sm" />
            </a>
            <a href="https://linkedin.com/in/catcarbonell" target="new">
                <FontAwesomeIcon icon={faLinkedin} className="w-8" size="sm" />
            </a>
        </div>
    )
}

export default Socials;