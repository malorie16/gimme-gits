const baseURL = 'http://api.github.com/users/'

const getUser = (username) => {
  console.log(username);
  return fetch(baseURL + `${username}`).then(resp => resp.json())
}

export default getUser
