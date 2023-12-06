// your code here
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const year = document.getElementById('year').value;
  
  // Constructing the query string
  let queryString = 'https://localhost:8080/';
  if (name) {
    queryString += `?name=${encodeURIComponent(name)}`;
    if (year) {
      queryString += `&year=${encodeURIComponent(year)}`;
    }
  } else if (year) {
    queryString += `?year=${encodeURIComponent(year)}`;
  }

  // Update the h3 element with the constructed URL
  document.getElementById('url').textContent = queryString;
});
