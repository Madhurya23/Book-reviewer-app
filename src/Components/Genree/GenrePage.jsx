import React from 'react';
import { Link } from 'react-router-dom';
import './GenrePage.css';

const genres = [
    { name: 'Romance', imgSrc: '/rom.jpg' },
    { name: 'Horror', imgSrc: '/horror.jpg' },
    { name: 'Fantasy', imgSrc: '/fantt.jpg' },
    { name: 'Adventure', imgSrc: '/for advn.jpg' },
    { name: 'Mystery', imgSrc: '/mystery.jpg' },
    { name: 'Sci-Fi', imgSrc: '/scifi.jpg' },
    { name: 'Historical Fiction', imgSrc: '/hist fic.jpg' },
    { name: 'Non-fiction', imgSrc: '/nonfiction.jpg' },
    { name: 'Graphic Novels', imgSrc: '/graphic novel.jpg' },
    { name: 'Children books ', imgSrc: '/children.jpg' },
    { name: 'Greek Mythology', imgSrc: '/greekmyt.jpg' },
    { name: 'Poetry', imgSrc: '/poetry.jpg' },

];

function GenrePage() {
    const containers = [
        genres.slice(0, 4),
        genres.slice(4, 8),
        genres.slice(8, 12)
    ];

    return (
        <div className="genre-page">
        <h2 className='gen'>GENRES</h2>
            {containers.map((container, index) => (
                <div className="genre-container" key={index}>
                    {container.map((genre) => (
                        <Link to={`/${genre.name.toLowerCase().replace(/ /g, '-')}`} className="genre-link" key={genre.name}>
                            <img src={genre.imgSrc} alt={genre.name} className="genre-image" />
                            <div className="genre-name">{genre.name}</div>
                        </Link>
                    ))}       
                </div>
            ))}
        </div>
    );
}

export default GenrePage;
