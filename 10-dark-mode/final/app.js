const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
});

const articlesData = articles.map((article) => {
  const { title, date, length, snippet } = article;
  const formatData = moment(date).format(' Do dddd MMMM YYYY');

  return `
    <article class="post">
      <h2>${title}</h2>
      <div class="post-info"> 
        <span>${formatData}</span>
        <span>${length}min read</span>
      </div>
      <p>${snippet}</p>
    </article>
  `

}).join('');

articlesContainer.innerHTML = articlesData;