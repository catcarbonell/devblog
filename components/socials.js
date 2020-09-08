import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
    return(
        <div className="text-custom-violet">
            <a href="https://twitter.com/catcarbn" target="new">
            <FontAwesomeIcon icon={faTwitter} className="w-16" size="sm" />
            </a>
        </div>
    )
}

export default Socials;