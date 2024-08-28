import React from 'react';
import './Graphic.css';

const graphicNovels = [
  {
    title: 'The Adventures of Tintin: The Land of Soviets',
    author: 'Hergé',
    cover: '/gn1.webp',
    teaser: 'The first Tintin adventure that follows the young reporter and his dog Snowy as they travel to the Soviet Union. With its dynamic art and fast-paced story, this graphic novel sets the tone for the entire Tintin series.',
    rating: '4.3/5',
    downloadLink: 'https://archive.org/download/tintin_201806/tintin-1.pdf'
  },
  {
    title: 'Batman: The Dark Knight Returns',
    author: 'Frank Miller',
    cover: '/gn2.webp',
    teaser: 'A groundbreaking graphic novel that redefines Batman\'s mythology. Set in a dystopian future where Batman comes out of retirement to fight crime in Gotham City, this work explores the themes of heroism, aging, and justice.',
    rating: '4.8/5',
    downloadLink: 'https://theteacherscrate.files.wordpress.com/2014/03/batman-the-dark-knight-returns.pdf'
  },
  {
    title: 'Tan: The Arrival',
    author: 'Shaun Tan',
    cover: '/gn3.jpg',
    teaser: 'A wordless graphic novel that tells the story of an immigrant\'s journey to a new land. Through stunning artwork, Tan explores the themes of displacement, hope, and the immigrant experience.',
    rating: '4.6/5',
    downloadLink: 'https://zagueros.noblogs.org/files/2018/05/shaun-tan-the-arrival.pdf'
  },
  {
    title: 'Maus',
    author: 'Art Spiegelman',
    cover: '/gn4.jpg',
    teaser: 'A Pulitzer Prize-winning graphic novel that tells the story of the Holocaust through the lens of the author\'s father\'s experiences. Using anthropomorphized characters, it powerfully depicts the horrors of war and its aftermath.',
    rating: '4.7/5',
    downloadLink: 'https://www.district205.net/cms/lib/IL01001003/Centricity/Domain/118/Maus%20-%20Full%20Text.pdf'
  },
  {
    title: 'Persepolis: The Story of a Childhood',
    author: 'Marjane Satrapi',
    cover: '/gn5.jpg',
    teaser: 'A poignant graphic novel that chronicles the author\'s childhood in Iran during and after the Islamic Revolution. Satrapi\'s narrative provides a personal perspective on the impact of political upheaval and cultural change.',
    rating: '4.5/5',
    downloadLink: 'https://www.coppinacademy.org/ourpages/auto/2017/8/31/41911726/marjane-satrapi-persepolis-1-englishforeignmovies-ddl-blogspot-com.pdf'
  },
];

const GraphicNovels = () => {
  return (
    <div className="graphic-novels-page">
      <h1 className='gn'>
      GRAPHIC NOVELS: Top 5 Visual Masterpieces</h1>
      
      <ul className="gn-book-list">
        {graphicNovels.map((book, index) => (
          <li key={index} className="gn-book-item">
            <img src={book.cover} alt={book.title} className="gn-book-cover"/>
            <div className="gn-book-details">
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p className='gn-teaser'><span className="gn-blurb-label">Blurb: </span> {book.teaser}</p>
              <p>Rating: {book.rating}</p>
              <a href={book.downloadLink} className="gn-download-button"><button>Download</button></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GraphicNovels;
