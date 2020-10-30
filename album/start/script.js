let fetchUsersBtn = document.querySelector("#fetch-users")
let contentDiv = document.querySelector("#content")
let history = document.querySelector("#history")
let filterForm = document.querySelector("#filter")

// result = alert()

// let ahoj = "ahoj"

function runApp() {
    // inicializovat localStorage o uživatele
    if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify([]))
    }

    // inicializovat filter
    if (localStorage.getItem("filter") === null) {
        localStorage.setItem("filter", JSON.stringify({
            limit: "",
            include: []
        }))
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

filterForm.addEventListener("submit", event => {
    event.preventDefault()

    let formData = new FormData(event.target) // kde se ten event spustil

    localStorage.setItem("filter", JSON.stringify({
        limit: formData.get("limit"),
        include: formData.getAll("include")
    }))
})

fetchUsersBtn.addEventListener("click", function() {
    fetch("https://randomuser.me/api/?results=4")
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