function getPicture() {
    FB.api(
        '/me/posts',
        'GET', {
            "fields": "picture"
        },
        function(response) {
            console.log(response)
            var app4 = new Vue({
                el: '#app-4',
                data: {
                    todos: response.data
                }
            })
        }
    );

}
