function getSearchedWord(e) {
    const word = document.querySelector('.search_bar').value;
    console.log(word)

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const meaning = data[0]['meanings'][0]['definitions'][0]['definition'];
            document.querySelector('.place_to_type').innerHTML = `
            ${meaning}`;
            console.log(meaning);
        })
        .catch(error => {
            console.log("Bad request!", error.message);
        });
}
document.querySelector('.search_button').addEventListener('click',getSearchedWord);

