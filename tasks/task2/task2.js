const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
  .then(response => response.json())
  .then(tasks => {
    const ul = document.createElement('ul');
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.title;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  })
  .catch(error => console.error(error));