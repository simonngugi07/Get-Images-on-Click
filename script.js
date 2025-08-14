document.getElementById('fetchDOgButton').addEventListener('click',fetchDogImage);
function fetchDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        const dogImage = document.getElementById('dogImage');
        dogImage.src = data.message;
    })
        .catch(error => console.log('Error fetching dog image:', error));
}
