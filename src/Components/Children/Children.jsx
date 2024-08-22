import React from 'react';
import './Children.css';

const books = [
  {
    title: 'The Wonderful Wizard of Oz',
    author: 'L. Frank Baum',
    cover: '/c1.jpg',
    teaser: 'Follow the adventures of Dorothy, a young girl from Kansas, as she is swept away by a tornado to the magical Land of Oz. Along with her new friends—the Scarecrow, Tin Man, and Cowardly Lion—Dorothy embarks on a journey to meet the Wizard of Oz, who she hopes will help her return home.',
    rating: '4.7/5',
    downloadLink: 'https://web.seducoahuila.gob.mx/biblioweb/upload/the_wonderful_wizard_of_oz.pdf'
  },
  {
    title: 'Charlie and the Chocolate Factory',
    author: 'Roald Dahl',
    cover: '/c2.jpg',
    teaser: 'This classic story follows the adventures of young Charlie Bucket inside the magical chocolate factory owned by the eccentric Willy Wonka. With its imaginative settings and quirky characters, the book explores themes of greed, honesty, and the rewards of good behavior.',
    rating: '4.6/5',
    downloadLink: 'https://newtonschools.sch.qa/wp-content/uploads/Charlie-and-the-Chocolate-Factory-1.pdf'
  },
  {
    title: 'The Cat in the Hat',
    author: 'Dr. Seuss',
    cover: '/c3.jpg',
    teaser: 'A rainy day turns into a chaotic adventure when the mischievous Cat in the Hat arrives at the home of Sally and her brother. With his outrageous antics and endless energy, the Cat brings fun and excitement, but also a fair share of trouble.',
    rating: '4.8/5',
    downloadLink: 'http://ieas-szeged.hu/downtherabbithole/wp-content/uploads/2019/08/Dr.-Seuss-The-Cat-in-the-Hat-Random-House-1957.pdf'
  },
  {
    title: 'Alice\'s Adventures in Wonderland',
    author: 'Lewis Carroll',
    cover: '/c4.jpg',
    teaser: 'Alice\'s journey through a fantastical world begins when she falls down a rabbit hole, leading to encounters with strange creatures like the Cheshire Cat, the Mad Hatter, and the Queen of Hearts. The story is a whimsical exploration of imagination, logic, and absurdity.',
    rating: '4.5/5',
    downloadLink: 'https://antilogicalism.com/wp-content/uploads/2018/04/alice-in-wonderland.pdf'
  },
  {
    title: 'Winnie-the-Pooh',
    author: 'A.A. Milne',
    cover: '/c5.jpg',
    teaser: 'Winnie-the-Pooh and his friends—Piglet, Tigger, Eeyore, and others—experience simple yet profound adventures in the Hundred Acre Wood. This collection of stories is filled with warmth, humor, and gentle life lessons, making it a beloved classic for children and adults alike.',
    rating: '4.9/5',
    downloadLink: 'http://www.daskalo.com/effectivecommunication/files/2017/12/Winnie-The-Pooh-1-78.pdf'
  },
];

const Children = () => {
  return (
    <div className="children-page">
      <h1 className='cp'>CHILDREN'S BOOKS --- Top Five Books</h1>
      
      <ul className="cp-book-list">
        {books.map((book, index) => (
          <li key={index} className="cp-book-item">
            <img src={book.cover} alt={book.title} className="cp-book-cover"/>
            <div className="cp-book-details">
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p className='cp-teaser'><span className="cp-blurb-label">Blurb: </span> {book.teaser}</p>
              <p>Rating: {book.rating}</p>
              <a href={book.downloadLink} className="cp-download-button"><button>Download</button></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Children;
