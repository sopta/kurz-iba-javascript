let fetchUsersBtn = document.querySelector("#fetch-users")
let contentDiv = document.querySelector("#content")
let history = document.querySelector("#history")
let filterForm = document.querySelector("#filter")
let resetFilter = document.querySelector("#reset-filter")

// result = alert()

// let ahoj = "ahoj"

function prepareAPIUrl() { // string -> URL adresu včetne GET parametru
    let filter = JSON.parse(localStorage.getItem("filter"))

    let apiURL = "https://randomuser.me/api/"

    let parameters = []

    if (filter.limit) {
        parameters.push(`results=${filter.limit}`)
    }

    if (filter.include.length > 0) { // ["id", "name"] -> inc=id,name
        parameters.push(`inc=${filter.include.join(",")}`)
    }

    if (parameters.length > 0) {
        apiURL = `${apiURL}?${parameters.join("&")}`
    }

    return apiURL
}

function runApp() {
    // inicializovat localStorage o uživatele
    if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify([]))
    }

    // inicializovat filter
    let filterStorage = localStorage.getItem("filter")
    if (filterStorage === null) {
        localStorage.setItem("filter", JSON.stringify({
            limit: "",
            include: []
        }))
    } else {
        let data = JSON.parse(filterStorage) 

        // input -> string document.querySelector
        filterForm.querySelector("input[name='limit']").value = data.limit

        // include -> array
        filterForm.querySelectorAll("select[name='include'] option").forEach(option => {
            //console.log(option.value)
            //console.log(option.value, data.include.indexOf(option.value))
            if (data.include.indexOf(option.value) !== -1) {
                option.selected = true
            }
        })
    }

    // Historie vyhledavani
    if (localStorage.getItem("users") !== null) {
        let usersStorage = JSON.parse(localStorage.users)

        usersStorage.forEach((entry, index) => {
            let link = document.createElement("a") // DOMElement
            link.classList.add(
                ...["list-group-item", "list-group-item-action", "d-flex", "justify-content-between", "align-items-center"]
            )

            let span = document.createElement("span")
            span.classList.add(
                ...["badge", "badge-primary", "badge-pill"]
            )

            console.log(entry)

            let aa = JSON.parse(entry)

            span.textContent = aa.length
            link.textContent = `List #${index}`

            link.appendChild(span)
            history.appendChild(link)
        })
    }
}

runApp()

//console.log(prepareAPIUrl())

resetFilter.addEventListener("click", event => {
    localStorage.setItem("filter", JSON.stringify({
        limit: "",
        include: []
    }))
})

filterForm.addEventListener("submit", event => {
    event.preventDefault()

    let formData = new FormData(event.target) // kde se ten event spustil

    localStorage.setItem("filter", JSON.stringify({
        limit: formData.get("limit"),
        include: formData.getAll("include")
    }))
})

fetchUsersBtn.addEventListener("click", function() {
    fetch(prepareAPIUrl())
        .then(response => response.json())
        .then(data => {
            let users = data.results

            let template = ""
            let userList = []

            users.forEach(user => {
                // template literal
                template += `                
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img src="${user.picture.large}" width="100%" height="250">
                            <div class="card-body">
                                <p class="card-text">
                                    Moje jmeno je: ${user.name.first} ${user.name.last}<br>
                                    Muj email je: ${user.email}
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small class="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                `

                userList.push({
                    firstName: user.name.first,
                    lastName: user.name.last,
                    email: user.email,
                    image: user.picture.large
                })
            });

            contentDiv.innerHTML = template

            let usersStorage = JSON.parse(localStorage.users)

            usersStorage.push(JSON.stringify(userList))

            localStorage.setItem("users", JSON.stringify(usersStorage))
        })

})