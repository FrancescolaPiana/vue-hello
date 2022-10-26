console.log(Vue);

const { createApp } = Vue;

const app = createApp({
data(){
    return {
        text: 'The World!',
        img: 'https://www.animeclick.it/immagini/personaggio/Dio_Brando/cover/77821-Dio_Brando-foto-alternativa.jpg',
        center: 'center',
        bse: 'bse'
    }
}
});
app.mount('#app')