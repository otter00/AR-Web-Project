const JsonLoc = `[{
    "title":"Virtual Reality Gaming",
    "about":"Захааааааар!",
    "class":"first",
    "urlAlternate":"https://previews.123rf.com/images/artissp/artissp1704/artissp170400183/76806884-bangkok-thailand-august-7-2016-an-iphone-user-playing-pokemon-go-game-in-supermarket-of-department-s.jpg",
    "url":"https://previews.123rf.com/images/artissp/artissp1704/artissp170400183/76806884-bangkok-thailand-august-7-2016-an-iphone-user-playing-pokemon-go-game-in-supermarket-of-department-s.jpg"
},{
    "title":"Medical Sphere",
    "about":"Умер Лермонтов на Кавказе, но любил он его не поэтому",
    "class":"second",
    "urlAlternate":"https://static.packt-cdn.com/products/9781787286436/graphics/784829eb-8b37-4718-8cfc-55e13a9152c2.jpg",
    "url":"https://static.packt-cdn.com/products/9781787286436/graphics/784829eb-8b37-4718-8cfc-55e13a9152c2.jpg"
},{
    "title":"Military Field",
    "about":"Замечательный день сегодня. То ли чаю пойти выпить, то ли повеситься...",
    "class":"third",
    "urlAlternate":"https://i.ytimg.com/vi/b2vmCToGZJc/maxresdefault.jpg",
    "url":"https://i.ytimg.com/vi/b2vmCToGZJc/maxresdefault.jpg"

}]`;

//Ссылка на payment.html в JSON'е, по-другому добавление через js не работает 
var guideRedirectLink = `[{
    "link": "../htmls/main.html"
}]`;

document.addEventListener('DOMContentLoaded', (e)=>{
    const locations = JSON.parse(JsonLoc);
    console.log(locations.length);
    let moviesContent = "";
    let GuideHref = JSON.parse(guideRedirectLink); //guide.html link

                for (let i = 0; i < locations.length; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__rating">${locations[i].title}</p>
                    <img class = "movie__img" src =${locations[i].url}>
                    <div class = "movie2">
                        <div>
                            <p class="movie__name">${locations[i].title}</p>
                            <img class = "movie__img alternate" src =${locations[i].urlAlternate}>
                            <p class="movie__description">${locations[i].about}</p>
                            <a href='${GuideHref[0].link}' class="movie__link">Подробнее</a>
                        </div>
                    </div>
                </div>
                `
            }
            document.querySelector(".movies__popular").innerHTML = moviesContent;
});

//Модальное окно
const movieContainer = document.querySelector('.movies');
movieContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('movie__img')) {
        const parentDiv = event.target.parentNode;
        //console.log(parentDiv)
        let movie2 = parentDiv.querySelector(".movie2");
        movie2.style.display = "block";
        window.onclick = function (event) {
            if (event.target == movie2) {
                movie2.style.display = "none";
            }
        }
    }
});