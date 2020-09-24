var app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello, I am Kelvin'
    },
});

var something = new Vue({
    el: '#sth',
    data:{
        list: [
             'apple',
             'bear' ,
             'orange',
             'potato'
        ],
        all: [1,2,3,4,5,6,7,8],
        sth: 'carrot',
        s:true
    },
    methods: {
        add: function(){
            this.list.push(this.sth)
            if(this.list.length > 10){
                this.list.reverse();
            }
            this.shuffle()
        },
        remove: function(){
            this.list.length%2===0 ? this.list.pop() : this.list.shift();
            this.shuffle()
        },
        shuffle: function(){
            this.list = _.shuffle(this.list);
        },

    }
})

var see = new Vue({
    el: '#ani',
    data: {
        s: true
    }
})


