const getNews = async function (){
    const API_KEY = "2d47be1c32964035bd0d4627494dc66d";
    const url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;
    
    const res = await fetch (url);
    
    const data = await res.json();
    console.log(data.articles);
};
getNews();


