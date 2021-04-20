const app = Vue.createApp({
    data() {
        return {
            title: 'Movies',
            movieData: {},
            movieTitle: 'Spider Man'
        }
    },
    mounted() {
        this.getMovie()
    },
    methods: {
        async getMovie(){
            const search =  this.movieTitle.toLowerCase().replace(/ /g, '+');
            console.log(search)
            const data = await fetch(
                `https://www.omdbapi.com/?apikey=e96ba944&t=${search}`
                )
            const jsonData = await data.json()
            this.movieData = jsonData
            
        }
    }
})