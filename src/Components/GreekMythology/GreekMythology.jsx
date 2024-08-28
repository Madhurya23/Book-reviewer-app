import React from 'react';
import './GreekMythology.css';

const books = [
  {
    title: 'The Iliad',
    author: 'Homer',
    cover: '/g1.jpg',
    teaser: 'The Iliad is an ancient Greek epic poem attributed to Homer. Set during the Trojan War, it tells the story of the wrath of Achilles, the greatest Greek warrior, and the eventual fall of Troy. The poem explores themes of heroism, honor, and the tragic consequences of war.',
    rating: '4.7/5',
    downloadLink: 'https://www.gutenberg.org/files/6130/old/6130-pdf.pdf'
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    cover: '/g2.jpg',
    teaser: 'The Odyssey, another epic by Homer, follows the hero Odysseus on his long and perilous journey home after the fall of Troy. Along the way, he encounters mythical creatures, gods, and challenges that test his cunning and resolve. The story is a timeless tale of adventure, loyalty, and the human spirit.',
    rating: '4.8/5',
    downloadLink: 'https://docdrop.org/download_annotation_doc/The-Odyssey-of-Homer---Lattimore-Richmond-lv1hj.pdf'
  },
  {
    title: 'The Greek Myths',
    author: 'Robert Graves',
    cover: '/g3.jpg',
    teaser: 'A comprehensive retelling of the ancient myths of Greece, offering detailed accounts of the gods, heroes, and legendary events that shaped classical mythology. Graves presents the stories with scholarly insight, blending mythological narrative with analysis, making it an essential read for anyone interested in the cultural and historical significance of these timeless tales.',
    rating: '4.2/5',
    downloadLink: 'http://writings.raftis.org/wp-content/uploads/2020/01/Robert-Graves-The-Greek-Myths-24grammata.com_-1.pdf'
  },
  {
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
    cover: '/g4.jpg',
    teaser: 'The Song of Achilles by Madeline Miller is a retelling of the Greek myth of Achilles, focusing on his deep and complex relationship with Patroclus. Set against the backdrop of the Trojan War, the novel explores themes of love, honor, and destiny, giving a fresh and intimate perspective on the legendary hero and the events that shape his fate.',
    rating: '4.5/5',
    downloadLink: 'https://archive.org/download/sq_20211001/the-song-books.yossr.com).pdf'
  },
  {
    title: 'The Women of Troy',
    author: 'Pat Barker',
    cover: '/g5.jpg',
    teaser: 'The Women of Troy by Pat Barker explores the aftermath of the Trojan War from the perspective of the women who survive. Captured by the Greeks, these women navigate the trauma of their loss and the harsh realities of life as captives, offering a powerful and fresh take on a classic myth.',
    rating: '4.1/5',
    downloadLink: 'https://archive.org/download/the-women-of-troy-by-pat-barker/The%20Women%20of%20Troy%20by%20Pat%20Barker.pdf'
  },
];

const GreekMythology = () => {
  return (
    <div className="greekmyth-page">
      <h1 className='gm'>GREEK MYTHOLOGY: Top 5 Legendary Tales</h1>
      
      <ul className="gm-book-list">
        {books.map((book, index) => (
          <li key={index} className="gm-book-item">
            <img src={book.cover} alt={book.title} className="gm-book-cover"/>
            <div className="gm-book-details">
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p className='gm-teaser'><span className="gm-blurb-label">Blurb: </span> {book.teaser}</p>
              <p>Rating: {book.rating}</p>
              <a href={book.downloadLink} className="gm-download-button"><button>Download</button></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GreekMythology;