//component
const app = Vue.createApp(
{
    //data, functions, template
    //template: '<h2>i am the template</h1>'

    data(){
        return{
            showdetails: true,
            title: 'The Final Empiress',
            author: 'Femi Olaniyi',
            age: '32',
            x:0,
            y:0,
        }
       
    },

    //component methods

    methods: {
        changeTitle (){
            console.log ('you clicked on me')
            this.title = 'the new header'
            this.author = 'agbaloni money'
        },
        toggleshowdetails(){
            this.showdetails = !this.showdetails //toggle the state of showdetails from what ever it is
        },
        handleEvent(mouseevent){
            console.log(mouseevent)
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }

    // methods: {
    //     changeTitle (){
    //         console.log ('you clicked on me')
    //         this.title = 'the new header'
    //         this.author = 'agbaloni money'
    //     }
    // }
}

)

app.mount ('#fem')