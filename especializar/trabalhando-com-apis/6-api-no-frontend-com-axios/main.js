const url = 'https://api.github.com/users';

//GET
function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data);
        })
        .catch(error => console.error(error));
}

function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => response.data)
        .then(data => {
            username.textContent = data.name;
            userAvatar.src = data.avatar_url;
            return;
        })
        .catch(error => console.error(error));
}

//POST
function addNewUser(newUser) {
    axios.post(url, newUser)
        .then(response => console.log(response))
        .catch(error => console.error(error));
}

//PUT
function updateUser(id, updatedUser) {
    axios.put(`${url}/${id}`, updatedUser)
        .then(response => response.data)
        .catch(error => console.error(error));
}

//DELETE
function deleteUser(id) {
    axios.delete(`${url}/${id}`)
        .then(response => response.data)
        .catch(error => console.error(error));
}

const newUser = {
    name: 'Pedro',
    avatar: 'http://picsum.photos/300/300',
    city: 'Rio de Janeiro'
}

const updatedUser = {
    name: 'Pedro',
    avatar: 'http://picsum.photos/300/300',
    city: 'Passos'
}