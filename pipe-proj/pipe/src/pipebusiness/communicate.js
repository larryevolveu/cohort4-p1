
const url = 'http://localhost:5000/';

async function getProjects() {
    const data = await postData(url + 'list');
    return data;
}

async function saveProject(id, name, data) {
    return await postData(url + 'save', {id:id, name:name, data:data});
}

async function loadProject(id) {
    const data = await postData(url + 'load', {id:id});
    return data.data;
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    return json;
}

export default {postData, getProjects, saveProject, loadProject};
