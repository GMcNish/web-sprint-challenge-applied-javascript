import axios from 'axios';

const Card = (article) => {
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorSpan = document.createElement('span');

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainer.classList.add('img-container');

  headlineDiv.textContent = article.headline;
  img.src = article.authorPhoto;
  authorSpan.textContent = `By ${article.authorName}`;

  cardDiv.appendChild(headlineDiv)
  cardDiv.appendChild(authorDiv)
  authorDiv.appendChild(imgContainer)
  authorDiv.appendChild(authorSpan)
  imgContainer.appendChild(img)

  return cardDiv;


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {

  axios.get('http://localhost:5001/api/articles')
  .then(res => {
    console.log(res)
    const jsArticles = res.data.articles.javascript;
    const bootstrapArticles = res.data.articles.bootstrap;
    const jqArticles = res.data.articles.jquery;
    const nodeArticles = res.data.articles.node;
    const techArticles = res.data.articles.technology;
    const articlesArray = []
    articlesArray.push(jsArticles, bootstrapArticles, jqArticles, nodeArticles, techArticles)
    console.log(articlesArray)

    const appender = document.querySelector(selector);

    articlesArray.forEach(item => {
      item.forEach(article => {
        appender.appendChild(Card(article))
      })
    })
    
  })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
