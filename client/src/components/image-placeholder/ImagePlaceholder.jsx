import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

import styles from './ImagePlaceholder.module.css'

function ImagePlaceholder() {
    return (
        <FontAwesomeIcon icon={faTrophy} className={styles.icon} />
    );
}

export default ImagePlaceholder;