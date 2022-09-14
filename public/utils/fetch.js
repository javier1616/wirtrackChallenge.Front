
const getElementos = async (endpoint) => {

    let response = await fetch(endpoint,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        },
        mode:'cors',
        cache:'default'
    });
    if (response.status === 200 ){
        return await response.json()
    }
    else if (response.status === 404){
        return await {"error":404}
    }
    
}


const postElementos = async (endpoint,data) => {

    let response = await fetch(endpoint,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: data, // data can be `string` or {object}!
        mode:'cors',
        cache:'default',
        credentials:'same-origin'
    });
    return await response.json();
}


const delElementos = async (endpoint) => {

    let response = await fetch(endpoint,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
        },
        mode:'cors',
        cache:'default',
        credentials:'same-origin'
    });
    return await response.json();
}

const putElementos = async (endpoint,data) => {

    let response = await fetch(endpoint,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
        },
        body: data, // data can be `string` or {object}!
        mode:'cors',
        cache:'default',
        credentials:'same-origin'
    });
    return await response.json();
}

const updateWeather = async (endpoint,data) => {

    let response = await fetch(endpoint,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
        },
        body: data, // data can be `string` or {object}!
        mode:'cors',
        cache:'default'
    });
    if (response.status === 200 ){
        return await response.json()
    }
    else if (response.status === 201){
        return await response.json()
    }
    else if (response.status === 404){
        return await {"error":404}
    }
}

export {getElementos, postElementos, putElementos, updateWeather, delElementos}

