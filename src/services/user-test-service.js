export default class UserTestService {
    getTestData = (fileName = null) => {
        let filePass = `${process.env.PUBLIC_URL}/data/tests-list.json`;
        if(fileName) {
            filePass = `${process.env.PUBLIC_URL}/data/tests/${fileName}.json`;
        }
        return fetch(filePass)
            .then((response) => {
                if(response.ok) {
                    return response.json();
                } else {
                    alert("HTTP error: " + response.status);
                }
            })
    }

}