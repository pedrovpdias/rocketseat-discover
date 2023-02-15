const url = 'https://api.github.com/users/';

function getUsers() {
    fetch(url)
        .then( response => response.json() )
        .then(data => {
            //Atribui o valor à div renderApiResult e converte para string
            renderApiResult.textContent = JSON.stringify(data);
        })
        .catch(error => console.error(error));
}

//GET
function getUser() {
    fetch(`${url}/pedrovpdias`)
        .then(response => response.json())
        .then(data => {
            username.textContent = data.name;
            userAvatar.src = data.avatar_url;
        })
        .catch(error => console.error(error));
}

//POST
function addUser(newUser) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => alertAPI.textContent = JSON.stringify(data))
        .catch(error => console.error(error));
}

//PUT
function updateUser(updatedUser) {
    fetch(`${url}1`, {
        method: 'PUT',
        body: JSON.stringify(updateUser),
        header: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => alertAPI.textContent = JSON.stringify(data))
        .catch(error => console.error(error));
}

//DELETE
function deleteUser(id) {
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .catch(error => console.error(error));
}

const newUser = {
    name: 'Olivia Zars',
    avatar: 'http://picsum.photos/400/200',
}

const updatedUser = {
    name: 'Olivia Fars',
    avatar: 'http://picsum.photos/400/200',
}