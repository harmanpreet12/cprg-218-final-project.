document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');

    fetch('https://jsonplaceholder.typicode.com/users')  // Replace with a valid API URL
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Process the data
            const dataList = data.slice(0, 5).map(item => `<li>${item.name}</li>`).join('');
            dataContainer.innerHTML = `<ul>${dataList}</ul>`;
        })
        .catch(error => {
            dataContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        });
});
