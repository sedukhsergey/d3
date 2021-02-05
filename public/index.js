  "use strict";

  const button = document.getElementById('fetchData');
  button.addEventListener('click', (event) => {
  fetch('http://localhost:3000/about')
    .then(res => res.json())
    .then(data => {
      console.log('data',data)
      const firstColumn = d3.select("body")
        .data(data.classes)
        .append('p')
        .text(d => `Name of the class ${d.name}`);
      firstColumn.exit().remove();
      const secondColumn = d3.select('body')
        .data(data.classes)
        .append('p')
        .text(d => `Students list ${d.students[0].name}`)
    })
    .catch(err => {
      console.log('fetch err',err)
    })
})
