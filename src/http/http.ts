
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
interface myFetch {
 (url: string, method: HTTPMethod, data?: any): any
}
// declare namespace myFetch { // 使用 namespace 来声明对象下的属性和方法
//     const get: <T = any>(url: string) => Promise<T> 
//     const post: <T = any>(url: string, data: any) => Promise<T>
// }


// function myFetch(url, method, data) {
//     return fetch(url, {
//         body: data ? JSON.stringify(data) : '',
//         method
//     }).then(res => res.json())
// }
const myFetch:myFetch =(url, method, data) => {
    return fetch(url, {
        body: data ? JSON.stringify(data) : '',
        method
    }).then(res => res.json())
}

// myFetch.get = (url) => {
//     return myFetch(url, 'GET')
// }

// myFetch.post = (url, data) => {
//     return myFetch(url, 'POST', data)
// }

export default myFetch

// n = true