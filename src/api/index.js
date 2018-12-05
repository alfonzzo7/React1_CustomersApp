// json-server --watch db.json --port 3001
export const apiFetch = (url) => fetch(url)
                                    .then(data => data.json())
                                    .catch(error => alert(error));

export const apiPut = (url, id, customer) => fetch(`${url}/${id}`,
                                                {
                                                    method: 'PUT',
                                                    body: JSON.stringify(customer),
                                                    headers: new Headers({'Content-type': 'application/json'})
                                                })
                                    .then(data => data.json())
                                    .then(res => {
                                        if (res.error) {
                                            return Promise.reject(res.validation);
                                        }
                                        
                                        return res;
                                    })
                                    .catch(error => alert(error));