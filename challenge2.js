class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    try {
        let response = await fetch(url);
        if(response.status == 200) {
            let data = await response.json();
            console.log(data);
            return data.login;
        } else {
            throw new HttpError(response);
        }
    } catch(err) {
        throw new Error(err);
    }
}
    
async function demoGithubUser() {
    let name = prompt("Enter a name?", "vanimar");
    
    try {
        let response = await loadJson(`https://api.github.com/users/${name}`);
        alert(`Full name: ${response}.`);
        return response;
    } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("No such user, please reenter.");
            return demoGithubUser();
        } else {
            throw err;
        }
    }
}
demoGithubUser();