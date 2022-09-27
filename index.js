// text file data 
let textButton = document.querrySelector('#text-btn');
textButton.addEventListener('click', function () {

    // create an ajax request
    let xhr = new XMLHttpRequest();
    // prepare the request
    xhr.open('GET', 'message.text', true);

    // send request the request
    xhr.send();
    // process the request
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.reposnseText;
            displayTextData(data);
        }
    }
});

// display text data
let displayTextData = (data) => {
    letTemplate = `<h3>${data}</h3>`;
    document.querrySelector('#text-card').innerHTML = htmlTemplate;
}