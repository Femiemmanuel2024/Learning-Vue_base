const app2 = Vue.createApp( {
    data(){
        return{
            url: 'http:www.thefemiolaniyi.com',
            showBooks: true,
            // titles: 'the coming',
            // author: 'the master'
           
            books : [
                {titles: 'Game of thrones', author:'george r r martin' ,img:'asset/1.jpg'},
                {titles: 'Lord Of The Rings', author:'Christoper Tolkien', img: 'asset/2.jpg'},
                {titles: 'Beyond Myths', author:'Emmanuel Femi', img : 'asset/3.jpg'},
            ],
        }
    },
    methods : {
        toggleshowBooks(){
            this.showBooks = !this.showBooks
        },

    }
   }

   
)
app2.mount ('#Authors')