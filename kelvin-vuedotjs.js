d3.select('body').append('svg').attr({
    'width':3000,
    'height':3000,
});
var theColor = 'blue';
var svg = d3.select('svg');
var x = 50;
var y = 50;

svg.append('rect').attr('width', 8).attr('height', 10).attr('fill', 'red').attr('stroke', 'black');
d3.select('svg').append('circle').attr('cy', y).attr('cx',x).attr('fill', theColor).attr('r',30)
.on('dblclick', () => {
    theColor = 'red';
    d3.selectAll('circle').transition().attr('fill', theColor);
}).on('mousemove', () =>{
    let y2 = 120;
    let x2 = 150;
    svg.selectAll('circle').transition().attr('cy', y2).duration(750).ease(d3.easeQuadIn)
    .transition().attr('cx', x2).duration(10000).ease(d3.easeBounceOut).attr('fill', 'lightblue');
});

svg.select('rect').on('mousemove', () =>{
    let x3 = 50;
    let y3 = 30;
    svg.selectAll('circle').transition().attr('cy', y3).attr('cx', x3).duration(1000).ease(d3.easeBackOut);
})

;


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


