window.onload= function() {
  fetch("https://randomuser.me/api")
  .then(response=> response.json())
  .then(data=> dataReady(data));
}

function dataReady(data) {
    console.log(data);
    var result = data.results[0]
    var fullname = result.name.title + ' ' + result.name.first+ ' ' + result.name.last;
    var img = result.picture.large;
    var username = result.login.username;
    var email = result.email;
    var country = result.location.timezone.description;
    document.getElementById('full-name').innerHTML = fullname;
    document.getElementById('avatar-img').src=img;
    document.getElementById('user-name').innerHTML= "@"+username;
    document.getElementById('email').innerHTML = email;
    document.getElementById('country').innerHTML = country;
}
