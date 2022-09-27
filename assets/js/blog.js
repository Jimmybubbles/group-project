// Calls the information from the form.html posts it to the blog dynamically
// Save the information to user storage 
function saveBlog() {
    var title = document.getElementById("title");
    var body = document.getElementById("body");
    var date = document.getElementById("date");
    var map = document.getElementById("multi-state");
    var name = document.getElementById("name");
    var blog = {
        title: title.value,
        body: body.value.trim(),
        date: date.value,
        map: map.value,
        name: name.value,
    };
  localStorage.setItem("blog", JSON.stringify(blog));
}

function renderBlog() {
    var lastBlog = JSON.parse(localStorage.getItem("blog"));
    if (lastBlog !== null) {
        document.getElementById("saved-title").innerHTML = lastBlog.title;
        document.getElementById("saved-body").innerHTML = lastBlog.body;
        document.getElementById("saved-date").innerHTML = lastBlog.date;
        document.getElementById("saved-map").innerHTML = lastBlog.map;
        document.getElementById("saved-name").innerHTML = lastBlog.name;
    } else {
        return;
    }
}
//console log to check if the function is working
console.log("blog.js is working");


// define sumbit button
var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveBlog();
    renderBlog();
});

function init() {
    renderBlog();
}
init();

// blog information is shown in a list
for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    var list = document.getElementById("list");
    var listItem = document.createElement("li");
    listItem.textContent = key + " = " + value;
    list.appendChild(listItem);
}

