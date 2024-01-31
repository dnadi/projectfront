(function test(){
    axios.get("localhost:8000/")
    .then((response) => {
        console.log(reponse.data);
    })
    .catch((error) => {
        console.log(error);
    });
})();