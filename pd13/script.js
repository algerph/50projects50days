const tagsID = document.getElementById('tags');
const textareaID = document.getElementById('textarea');

// textarea.focus();

textareaID.addEventListener('keyup', (eve) => {
    createTags(eve.target.value);

    if(eve.key === "Enter") {
        setTimeout(() => {
            eve.target.value = '';
        }, 10)

        randomSelect()
    }
});

function createTags(input) {
    const tags = 
    input
    .split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

    tagsID.innerText = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag
        tagsID.appendChild(tagEl)
    });

    // console.log(tags);
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100) 
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}