import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from "~/hooks";
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import * as searchService from '~/services/searchService';


const context = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    
    // Sử dụng useRef để get element
    const inputSearchRef = useRef();

    useEffect(() => {
        let inputSearch = searchValue.trim();
        if (inputSearch) {
            
            
            const fetchApi = async () => {
                try {
                    const result = await searchService.search(debounced);
                    setSearchResult(result);
                    // Hide icon loading when stop typing
                    setLoading(false);

                } catch (error) {
                    // Hide icon loading when error
                    setLoading(false);
                }
                
            }

            fetchApi();
            
        } else {
            setSearchValue('');
            setSearchResult([]);
            setLoading(false);
        }
        
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        inputSearchRef.current.focus();
        setShowResult(false);
    }

    const handleChange = (e) => {
        // Show icon loading while typing
        setLoading(true);
        setSearchValue(e.target.value);
        let check = e.target.value ? true : false;
        setShowResult(check);
    }

    const handleHideResult = () => {
        setShowResult(false);
    }

    const handleShowResult = () => {
        if (searchValue) {
            setShowResult(true);
        }
    }
    

    return (
        <HeadlessTippy 
            interactive
            appendTo={() => document.body}
            visible={showResult}
            render={attrs => (
                <div className={context('search-result')} tabIndex='-1' {...attrs}>
                    <PopperWrapper>
                        <h4 className={context('search-title')}>
                            Accounts
                        </h4>
                        {searchResult && searchResult.map(result => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                        
                    </PopperWrapper>
                </div>
            )} 
            onClickOutside={handleHideResult}
        >
            <div className={context('search')}>
                <input 
                    ref={inputSearchRef}
                    value={searchValue}
                    placeholder='Search accounts and videos' 
                    spellCheck={false} 
                    onChange={handleChange}
                    onFocus={handleShowResult}
                />
                
                {/* Khi có search value thì show icon clear */}
                {!!searchValue && !loading && (
                    <button className={context('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={context('loading')} icon={faSpinner} />}

                <button className={context('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;