import React from 'react';
import './Mystery.css';

const books = [
  {
    title: 'Complete Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    cover: '/comsherlock.jpg',
    teaser: 'A complete collection of all the stories featuring the legendary detective Sherlock Holmes and his faithful companion Dr. Watson. From the foggy streets of London to the mysterious countryside, follow Holmes as he unravels the most intricate mysteries and outwits the most dangerous criminals.',
    rating: '4.9/5',
    downloadLink: 'https://sherlock-holm.es/pdf/letter/1-sided/'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    cover: '/girldragon.webp',
    teaser: 'The first book in the Millennium Trilogy introduces journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander. Together, they delve into a decades-old mystery involving a wealthy family, uncovering dark secrets and corruption that lead to a thrilling and dangerous pursuit of the truth.',
    rating: '4.5/5',
    downloadLink: 'https://ebooknoid.files.wordpress.com/2012/01/the_girl_with_the_dragon_tattoo.pdf'
  },
  {
    title: 'And Then There Were None',
    author: 'Agatha Christie',
    cover: '/there.jpg',
    teaser: 'Considered one of Agatha Christie\'s masterpieces, this novel tells the story of ten strangers invited to a secluded island under mysterious circumstances. One by one, they begin to die in accordance with a nursery rhyme, leaving the survivors desperate to uncover the identity of the killer before it\'s too late.',
    rating: '4.7/5',
    downloadLink: 'https://www.weathervaneplayhouse.com/sites/default/files/docs/And%20Then%20There%20Were%20None.pdf'
  },
  {
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    cover: '/gg.jpg',
    teaser: 'A psychological thriller that explores the complex and twisted relationship between Nick and Amy Dunne. When Amy goes missing on their fifth wedding anniversary, suspicions fall on Nick, revealing a web of lies, deceit, and manipulation that keeps readers on the edge of their seats.',
    rating: '4.6/5',
    downloadLink: 'https://icrrd.com/public/media/15-05-2021-082725Gone-Girl-Gillian-Flynn.pdf'
  },
  {
    title: 'The Silence of the Lambs',
    author: 'Thomas Harris',
    cover: '/lamb.jpg',
    teaser: 'FBI trainee Clarice Starling is assigned to interview the brilliant but imprisoned Dr. Hannibal Lecter, a cannibalistic serial killer, to help catch another psychopath known as "Buffalo Bill." As Clarice and Lecter engage in a psychological game of cat and mouse, the tension escalates in this chilling and iconic thriller.',
    rating: '4.8/5',
    downloadLink: 'https://usuaris.tinet.cat/palonso/llibres/harris/the_silence_of_the_lambs.pdf'
  },
];

const Mystery = () => {
  return (
    <div className="mystery-page">
      <h1 className='m'>MYSTERY: Top 5 Gripping Whodunits</h1>
      
      <ul className="m-book-list">
        {books.map((book, index) => (
          <li key={index} className="m-book-item">
            <img src={book.cover} alt={book.title} className="m-book-cover"/>
            <div className="m-book-details">
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p className='m-teaser'><span className="m-blurb-label">Blurb: </span> {book.teaser}</p>
              <p>Rating: {book.rating}</p>
              <a href={book.downloadLink} className="m-download-button"><button>Download</button></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mystery;
