import React from 'react';
import './NonFiction.css';

const books = [
  {
    title: 'The Diary of a Young Girl',
    author: 'Anne Frank',
    cover: '/nf1.jpg',
    teaser: 'The Diary of a Young Girl is a deeply moving account of Anne Frank\'s life in hiding during the Nazi occupation. Through her diary, she shares her hopes, fears, and the realities of life in a secret annex. The book serves as a poignant reminder of the horrors of war and the resilience of the human spirit.',
    rating: '4.8/5',
    downloadLink: 'https://cbseacademic.nic.in/web_material/doc/novels/3_The%20Diary%20of%20a%20Young%20Girl.pdf'
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    cover: '/nf2.jpg',
    teaser: 'In Thinking, Fast and Slow, Nobel laureate Daniel Kahneman explores the dual systems of thinking that drive our decisions. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and logical. The book delves into how these systems shape our judgments and decisions, often leading to biases and errors in thinking.',
    rating: '4.7/5',
    downloadLink: 'https://archive.org/download/DanielKahnemanThinkingFastAndSlow/Daniel%20Kahneman-Thinking%2C%20Fast%20and%20Slow%20%20.pdf'
  },
  {
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    cover: '/nf3.jpg',
    teaser: 'The Power of Now is a spiritual guide that emphasizes living in the present moment. Eckhart Tolle offers insights into how our thoughts and emotions can stand in the way of our experience of inner peace. By focusing on the "now," we can transcend past pain and future anxieties, leading to a deeper sense of fulfillment and happiness.',
    rating: '4.6/5',
    downloadLink: 'https://archive.org/download/ThePowerOfNowEckhartTolle_201806/The%20Power%20Of%20Now%20-%20Eckhart%20Tolle.pdf'
  },
  {
    title: 'A Short History of Nearly Everything',
    author: 'Bill Bryson',
    cover: '/nf4.jpg',
    teaser: 'A Short History of Nearly Everything takes readers on a journey through the history of science, exploring everything from the Big Bang to the rise of civilization. With his signature wit and clarity, Bill Bryson makes complex subjects accessible and entertaining, revealing the wonder of the world around us.',
    rating: '4.5/5',
    downloadLink: 'https://cdn.preterhuman.net/texts/history/A%20Short%20History%20Of%20Nearly%20Everything.pdf'
  },
  {
    title: 'Guns, Germs, and Steel',
    author: 'Jared Diamond',
    cover: '/nf5.jpg',
    teaser: 'Guns, Germs, and Steel examines the factors that have shaped human history over the past 13,000 years. Jared Diamond argues that the differences in the development of societies across the world can be traced back to environmental and geographical factors, rather than differences in intelligence or morality.',
    rating: '4.4/5',
    downloadLink: 'https://archive.org/download/fp_Jared_Diamond-Guns_Germs_and_Steel/Jared_Diamond-Guns_Germs_and_Steel.pdf'
  },
];

const NonFiction = () => {
  return (
    <div className="nonfiction-page">
      <h1 className='nf'>NON-FICTION: Top 5 Insightful Reads</h1>
      
      <ul className="nf-book-list">
        {books.map((book, index) => (
          <li key={index} className="nf-book-item">
            <img src={book.cover} alt={book.title} className="nf-book-cover"/>
            <div className="nf-book-details">
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p className='nf-teaser'><span className="nf-blurb-label">Blurb: </span> {book.teaser}</p>
              <p>Rating: {book.rating}</p>
              <a href={book.downloadLink} className="nf-download-button"><button>Download</button></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NonFiction;
