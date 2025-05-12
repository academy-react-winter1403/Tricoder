import http from "../interceptor"

const getApi = async (url) => {
    try {
        const res = await http.get(url);
        return res
    } catch (error) {
        console.log(error)
    }
}

export {getApi}