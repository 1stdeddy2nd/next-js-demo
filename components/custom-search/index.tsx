import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CustomSearch.module.css";

interface CustomSearchProps {
  onChangeCB: Function;
  value: string;
  handleSearchCB: Function;
}

const CustomSearch = ({
  onChangeCB,
  value,
  handleSearchCB
}: CustomSearchProps) => {
  return (
    <div>
      <div className={styles.searchBar}>
        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} onClick={() => handleSearchCB} />
        <input
          autoComplete="off"
          placeholder="input something"
          className={styles.searchInput}
          id={styles.searchInputId}
          onChange={(e) => onChangeCB(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? handleSearchCB() : null)}
          value={value}
        />
      </div>
    </div>
  );
};

export default CustomSearch;
