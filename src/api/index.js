// json-server --watch db.json --port 3001
export const apiFetch = (url) => fetch(url)
                                    .then(data => data.json())
                                    .catch(error => alert(error));