let content = document.querySelector("#content")
let fetchUsersBtn = document.querySelector("#fetch-users")
let history = document.querySelector("#history")
let filterForm = document.querySelector("#filter")
let resetFilterBtn = document.querySelector("#reset-filter")

function prepareAPIUrl() {
    let filter = JSON.parse(localStorage.getItem("filter"))

    let apiURL = "https://randomuser.me/api/"

    let parameters = []

    if (filter.limit) {
        parameters.push(`results=${filter.limit}`)
    }

    if (filter.include.length > 0) {
        parameters.push(`inc=${filter.include.join(",")}`)
    }

    if (parameters.length > 0) {
        apiURL = `${apiURL}?${parameters.join("&")}`
    }

    return apiURL
}

function runApp() {
    if (localStorage.getItem("users") == null) {
        localStorage.users = JSON.stringify([])
    }

    let filterStorage = localStorage.getItem("filter")
    if (filterStorage == null) {
        localStorage.setItem("filter", JSON.stringify({
            limit: "",
            include: []
        }))
    } else {
        let data = JSON.parse(filterStorage)

        filterForm.querySelector("input[name='limit']").value = data.limit
        filterForm.querySelectorAll("select[name='include'] option").forEach((option) => {        
            if (data.include.indexOf(option.value) != -1) {
                option.selected = true
            }
        })
    }

    if (localStorage.getItem("users") != null) {
        let usersStorage = JSON.parse(localStorage.users)
    
        usersStorage.forEach((value, index) => {
            let link = document.createElement("a")
            link.href = "javascript:;"
            link.classList.add(
                ...["list-group-item", "list-group-item-action", "d-flex", "justify-content-between", "align-items-center"]
            )
            link.dataset.index = index
            
            let span = document.createElement("span")
            span.classList.add(
                ...["badge", "badge-primary", "badge-pill"]
            )
    
            span.textContent = value.length
    
            link.textContent = `List #${index}  `
            link.appendChild(span)
            history.appendChild(link)
        })
    }
}

runApp()

resetFilterBtn.addEventListener("click", _ => {
    localStorage.setItem("filter", JSON.stringify({
        limit: "",
        include: []
    }))
})

filterForm.addEventListener("submit", function(e) {
    e.preventDefault();
   
    const formData = new FormData(e.target)

    localStorage.setItem("filter", JSON.stringify({
        limit: formData.get("limit"),
        include: formData.getAll("include")
    }))
})

history.addEventListener("click", event => {
    let index = event.target.dataset.index

    let list = []
    JSON.parse(localStorage.users)[index].forEach((value) => {
        list.push(
            JSON.parse(value)
        )
    })

    console.log(list)
    // your turn...
})

fetchUsersBtn.addEventListener("click", _ => {
    fetch(prepareAPIUrl())
    .then(response => response.json())
    .then(data => {
        let users = data.results;

        let userList = []

        users.forEach(element => {
            let template = `
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                    <img src="${element.picture.large}" width="100%" height="300">
                        <div class="card-body">
                            <p class="card-text">
                                My name is ${element.name.first} ${element.name.last}<br>
                                Contact me: ${element.email}
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
                user: {
                    firstName: element.name.first,
                    lastName: element.name.last,
                    email: element.email
                },
                template
            })
        });

        content.innerHTML = userList.reduce((content, user) => content += user.template, "")

        let usersStorage = JSON.parse(localStorage.users)

        usersStorage.push(userList.map(user => JSON.stringify(user.user)))

        localStorage.setItem("users", JSON.stringify(usersStorage))
    })
})