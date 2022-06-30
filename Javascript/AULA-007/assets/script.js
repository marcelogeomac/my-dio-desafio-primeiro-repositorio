// Base da API
const BASE_URL = 'https://25.media.tumblr.com/tumblr_lqik92AS4I1qfy8klo1_500.jpg';
const catBtn = document.getElementById('muda-gato');
const catImg = document.getElementById('cat');

const pegaGato = async () => {
  try { 
   const data = await fetch(BASE_URL);
   const json = await data.json();
   
   return json.webpurl;
  }
  catch(e) {
    console.log((e.message));
  }
};

const loadImg = async () => {
    catImg.src = await pegaGato();
}

catBtn.addEventListener('click', loadImg);

loadImg();