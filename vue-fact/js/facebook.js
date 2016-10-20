function statusChangeCallback(response) {
    if (response.status === 'connected') {
        testAPI();
    }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId: '208967086193974',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
    });

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    // FB.api(
    //     '/me',
    //     'GET', {
    //         "fields": "tagged_places.limit(50)"
    //     },
    //     function(response) {
    //         setPlaces(response)
    //         initMap()
    //     }
    // );

    FB.api(
        '/me',
        'GET', {
            "fields": "posts.limit(1000){place,picture}"
        },
        function(response) {
          setPlaces(response)
          initMap()
        }
    );
}
