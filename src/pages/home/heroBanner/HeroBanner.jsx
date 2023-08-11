import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {

    // const [background, setBackground] = useState('');
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const searchQueryHandler = (e) => {
        if (e.key === 'Enter' && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    return (
        <div className='heroBanner'>
            <div className='opacity-layer'></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome!</span>
                    <span className="subTitle">Explore Our Movie DB for Latest Moives and TV Shows</span>
                    <div className='searchInput'>
                        <input type="text" placeholder='Search for a Movie or TV show......' onKeyUp={searchQueryHandler} onChange={e => setQuery(e.target.value)} />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner;