export default class APIService{
    // fetch search results from the backend
    static fetchResult(body) {
        console.log("fetching search results (APIService)")
        console.log(JSON.stringify(body));
        return fetch('https://ucl-report-estate.herokuapp.com/report', {
                "method":'POST',
                "headers" : {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(body)
            })
        .then(response => console.log(response))
        .catch(error => console.log(error))
        }
}
