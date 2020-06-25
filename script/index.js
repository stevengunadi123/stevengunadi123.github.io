navigator.serviceWorker.register('/sw.js');

var deferredPrompt;
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

const urlTrending = "https://covid-19-news.p.rapidapi.com/v1/covid?lang=en&q=covid";
fetch(urlTrending,{
    "method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-news.p.rapidapi.com",
		"x-rapidapi-key": "05b57a06b0mshfdc1d0c850c9695p1c89f9jsnbfb63ec70d9d"
	}
})
.then(r => r.json())
.then(function(d){
    for(var i = 0; i<6;i++){

//              document.getElementById("newsResults").innerHTML += "<div class='col-md-6'><div class='row'><div class='card-content'><span class='card-title activator'></span><h6 class='truncate'>Title: <a href="+d.articles[i].link+" title="+d.articles[i].title+">"+d.articles[i].title+"</a></h6><p><b>Author</b>:" +d.articles[i].author+" </p><p><b>News source</b>:"+d.articles[i].topic+" </p><p><b>Published</b>:" +d.articles[i].published_date+ "</p></div><div class='card-reveal'><span class='card-title'></span></div><div class='card-action'><a href="+d.articles[i].link+" target='_blank' class='btn'>Read More</a></div></div></div></div>";
	    
	    	document.getElementById("newsResults").innerHTML += "<div class='col-md-4 mt-3 text-center'><div class='card'><div class='card-header'><h5>" + d.articles[i].title + "</h5></div><div class='card-body'><h5>Author : "+  d.articles[i].author+"</h5><h5>Topic : "+d.articles[i].topic+"</h5><h5>"+d.articles[i].published_date+"</h5><div class='card-action'><a href="+d.articles[i].link+" target='_blank' rel='noopener' class='btn'>Read More</a></div></div></div></div>";
    }
})

