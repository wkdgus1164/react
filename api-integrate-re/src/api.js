import axios from 'axios'

export async function getUsers() {
    const response = await axios.post('https://abee997.co.kr/cotest/index.php/drives/drive/get_drvie_usage_history_list/', { id: '123qwe' })
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
}

export async function getUser(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return response.data
}