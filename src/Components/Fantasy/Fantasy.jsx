import React from 'react';
import './Fantasy.css';

const books = [
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    cover: '/lorr.jpg',
    teaser: 'An epic high-fantasy novel that follows the quest to destroy the One Ring and ensure the destruction of its maker, the Dark Lord Sauron. With memorable characters, rich world-building, and deep lore, Tolkien\'s masterpiece is a cornerstone of modern fantasy.',
    rating: '4.9/5',
    downloadLink: 'https://gosafir.com/mag/wp-content/uploads/2019/12/Tolkien-J.-The-lord-of-the-rings-HarperCollins-ebooks-2010.pdf'
  },
  {
    title : 'The Harry Potter Series' ,
    author: 'J.K. Rowling',
    cover: '/hpstonee.jpg',
    teaser: 'The Harry Potter series follows the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry\'s struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles (non-magical people).',
    rating: '4.9/5',
    downloadLink: 'https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harrypotter.pdf'
  },
  {
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    cover: '/narnia.jpg',
    teaser: 'A classic series that takes readers to the magical land of Narnia, where talking animals and mythical creatures live. "The Lion, the Witch and the Wardrobe" is the first book where the Pevensie siblings discover Narnia and embark on an adventure to save it from eternal winter.',
    rating: '4.7/5',
    downloadLink: 'https://s3.amazonaws.com/scschoolfiles/112/thechroniclesofnarnia.pdf'
  },
  {
    title: 'The Night Circus',
    author: 'Erin Morgenstern',
    cover: '/the-night-circus.jpg',
    teaser: 'A phantasmagorical novel about a magical competition between two young illusionists. The Night Circus, a mesmerizing venue that only opens at night, serves as the stage for their duel, filled with wonder, mystery, and intricate beauty.',
    rating: '4.6/5',
    downloadLink: 'https://acciobooks.weebly.com/uploads/1/3/2/7/13279484/em_-_the_night_circus.pdf'
  },
  {
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    cover: '/gott.jpg',
    teaser: 'The first book in the "A Song of Ice and Fire" series introduces readers to the land of Westeros, where noble families vie for control of the Iron Throne. Martin\'s intricate plotting, complex characters, and willingness to kill off major figures have made this series a modern classic.',
    rating: '4.9/5',
    downloadLink: 'https://www.nothuman.net/images/files/discussion/1/e72f9f1f181a66887baa7270037c582e.pdf'
  },
];

const Fantasy = () => {
  return (
    <div className="fantasy-page">
      <h1 className='fan'>FANTASY --- Top Five Books</h1>
      
      <ul className="fan-book-list">
        {books.map((book, index) => (
          <li key={index} className="fan-book-item">
            <img src={book.cover} alt={book.title} className="fan-book-cover"/>
            <div className="fan-book-details">
              <h2>Title: {book.title}</h2>
              
              <p>Author: {book.author}</p>
              <p className='fan-teaser'><span className="fan-blurb-label">Blurb: </span> {book.teaser}</p>
              <p>Rating: {book.rating}</p>
              <a href={book.downloadLink} className="fan-download-button"><button>Download</button></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fantasy;