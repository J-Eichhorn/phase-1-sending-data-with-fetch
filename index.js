// Add your code here
function submitData(userName, userEmail) {
    
    const userInfo = {
        name: userName,
        email: userEmail,
    };
    
    const configObj = {
        //method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userInfo),
    };

    return fetch("http://localhost:3000/users", configObj)
    .then((response) => response.json())
    .then((data) => {
     let h1 = document.createElement('h1')
     let body = document.querySelector('body')
     h1.textContent = data.id
     body.append(h1)
    })
    .catch((error) => {
        let message = error.message
        let h2 = document.createElement('h2')
        let body = document.querySelector('body')
        h2.textContent = message
        body.append(h2)
    })

}
