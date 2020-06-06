import axios from 'axios'

const apiUrl = 'http://localhost/saythanks/api';

export function saveMessage(toName, fromName, message) {
    return axios({
        method: 'POST',
        url: apiUrl + '/save.php',
        data: `toName=${toName}&fromName=${fromName}&message=${message}`
    })
}

export function readMessage(id, toName, fromName) {
    const preparedId = `${id}.${toName}.${fromName}`;
    return axios({
        method: 'POST',
        url: apiUrl + '/read.php',
        data: 'id=' + preparedId
    })
}