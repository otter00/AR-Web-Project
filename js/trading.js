const JsonLoc = `[{
    "title":"Trade",
    "about":"Захааааааар!",
    "class":"first",
    "urlAlternate":"https://sun9-35.userapi.com/impg/z_f_hHnBmIxJxcowLT0o6lyNrQO5Sn6AGPoaew/tjquwdigBoE.jpg?size=1030x804&quality=95&sign=361b470f8e705e55908184ed134e590e&type=album",
    "url":"https://i06.fotocdn.net/s121/1d4a7c22b63d5578/public_pin_l/2761168955.jpg"
},{
    "title":"Trade",
    "about":"Умер Лермонтов на Кавказе, но любил он его не поэтому",
    "class":"second",
    "urlAlternate":"https://sun9-8.userapi.com/impg/Fn1MiSaalP3CjerLiEit_nlAeKVkOL4IAfdgoQ/sGH92gYEekg.jpg?size=1000x1000&quality=95&sign=780dd10ea882a4151aa5dcc9b086bfa5&type=album",
    "url":"https://i.klubgidov.ru/800x960/82/b0/82b0a09c00cb391d8a8468785251c986.jpeg"
},{
    "title":"Trade",
    "about":"Замечательный день сегодня. То ли чаю пойти выпить, то ли повеситься...",
    "class":"third",
    "urlAlternate":"https://sun9-35.userapi.com/impg/z_f_hHnBmIxJxcowLT0o6lyNrQO5Sn6AGPoaew/tjquwdigBoE.jpg?size=1030x804&quality=95&sign=361b470f8e705e55908184ed134e590e&type=album",
    "url":"https://i.pinimg.com/originals/2a/79/2e/2a792e2d3cd53a36088739d5835220e0.jpg"

},{
    "title":"Trade",
    "about":"Встречаются как то Эрих, Мария и Ремарк на западном фронте, а там без перемен",
    "class":"fourth",
    "urlAlternate":"https://sun9-8.userapi.com/impg/Fn1MiSaalP3CjerLiEit_nlAeKVkOL4IAfdgoQ/sGH92gYEekg.jpg?size=1000x1000&quality=95&sign=780dd10ea882a4151aa5dcc9b086bfa5&type=album",
    "url":"https://kulturakumertau.ru/wp-content/uploads/9/4/4/944a125484d381962eb62154bde46e5a.jpeg"
},{
    "title":"Trade",
    "about":"Любовь зла",
    "class":"fifth",
    "urlAlternate":"https://sun9-35.userapi.com/impg/z_f_hHnBmIxJxcowLT0o6lyNrQO5Sn6AGPoaew/tjquwdigBoE.jpg?size=1030x804&quality=95&sign=361b470f8e705e55908184ed134e590e&type=album",
    "url":"https://i.pinimg.com/736x/ca/b2/b8/cab2b823f5cbf8e4c67e5f08246a66fe.jpg"
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
                            <img class = "movie__img" src =${locations[i].urlAlternate}>
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