/**
<li>
    <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="sarah">
    <div class="user-info">
        <h4>Sarah Smith</h4>
        <p>Wexford, Ireland</p>
    </div>
</li>
 */

const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []
const loading = document.querySelector('.loading')

setTimeout(() => {

    getData()
}, 10000);

filter.addEventListener('input', (eve) => filterData(eve.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()

    result.innerHTML = ''

    results.forEach(user => {
        // console.log(user)
        const li = document.createElement('li')
        
        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}"</img>
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}
            </div>
        `
        result.appendChild(li)
    });
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}