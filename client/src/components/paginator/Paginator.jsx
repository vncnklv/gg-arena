import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './Paginator.module.css';
import { useEffect } from "react";
import { useSearchParams } from "react-router";

function Paginator({ currentPage, goToNextPage, goToPrevPage, maxPage }) {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set('page', currentPage);
        setSearchParams(params);
    }, [currentPage]);

    return (
        <section className={styles['paginator']}>
            <ul className={styles['paginator-list']}>
                {currentPage != 1 && <li onClick={goToPrevPage}><FontAwesomeIcon icon={faArrowLeft} /></li>}
                <li>{currentPage}</li>
                {currentPage < maxPage && <li onClick={goToNextPage}><FontAwesomeIcon icon={faArrowRight} /></li>}
            </ul>
        </section>
    );
}

export default Paginator;