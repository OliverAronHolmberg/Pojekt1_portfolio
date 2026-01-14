
function copyfunc(event) {
    event.preventDefault();

    const text = event.currentTarget.querySelector('.p-skill').innerText;

    navigator.clipboard.writeText(text).then(() => {
        console.log("Copied:", text);
    });
}

