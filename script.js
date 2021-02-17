var app = angular.module('Mailbox', []);

app.directive('letterList', function(){
    return {
        restrict: 'E',
        templateUrl: 'letter-list.html'
    };
});

app.directive('letterCard', function(){
    return {
        restrict: 'E',
        templateUrl: 'letter-card.html'
    };
});

app.controller('MailList', function(){

    this.users = [
        {
            name: 'Mark Otto',
            address: 'markotto@mail.com',
            subject: 'First Letter',
            text: 'Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1'
        },
        {
            name: 'Jacob Thornton',
            address: 'jacob@mail.com',
            subject: 'Second Letter',
            text: 'Text2 Text2 Text2 Text2 Text2 Text2 Text2 Text2 Text2 Text2 Text2 Text2 Text2 Text2 Text2 Text2 Text2 Text2 Text2 Text2'
        },
        {
            name: 'Jan Buller',
            address: 'buller@mail.com',
            subject: 'Third Letter',
            text: 'Text3 Text3 Text3 Text3 Text3 Text3 Text3 Text3 Text3 Text3 Text3 Text3 Text3 Text3 Text3 Text3 Text3 Text3 Text3 Text3'
        }
    ];

    this.show = (name, address, subject, text) => {
        this.greetingsShown = true;
        this.name = name;
        this.address = address;
        this.subject = subject;
        this.text = text;

    };

    this.close = () => this.greetingsShown = false;

});

