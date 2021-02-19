angular.module('app', []).controller('CC', function () {
    this.tasks = [
        {
            name: "1go go",
            done: false
        },
        {
            name: "2go go",
            done: false
        },
        {
            name: "3go go",
            done: false
        }
    ];
    this.add = function (x){
        var y={}
        y.name = x.name;
       y.done = false;
        this.tasks.push(y);
    }

    this.delete = function (x){
        console.log(x);
        this.tasks.splice(x,1);
    }
});
