import styles from './Pagination.module.css';

export default function Pagination({
    handleItemsPerPage,
    length,
    currentPage,
    onPageChange
}) {

    const paginationNumbers = [];

    // Calculate the number of pages
    for (let i = 1; i <= Math.ceil(length / handleItemsPerPage); i++) {
        paginationNumbers.push(i);
    }

    return (
        <div className={styles.pagination}>
            <button 
                onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className={styles.pageButton}
            >
                Previous
            </button>
            {paginationNumbers.map((pageNumber) => (
                <button 
                    key={pageNumber} 
                    onClick={() => onPageChange(pageNumber)}
                    className={`${styles.pageButton} ${currentPage === pageNumber ? styles.active : ''}`}
                >
                    {pageNumber}
                </button>
            ))}
            <button 
                onClick={() => onPageChange(currentPage < paginationNumbers.length ? currentPage + 1 : paginationNumbers.length)}
                disabled={currentPage === paginationNumbers.length}
                className={styles.pageButton}
            >
                Next
            </button>
        </div>
    );
}
