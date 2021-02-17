var app = angular.module("mailClient", []);

app.service("MailService", function($http) {
    this.loadIncomingMessages = function() {
        return $http.get("data.json")
            .then(response => response.data)
            .catch(error => console.log(error));
    };
});

app.directive("mailClient", function(MailService) {
    return {
        restrict: "E",
        templateUrl: "mail-client.html",
        controllerAs: "client",
        controller: function() {
            var self = this;

            self.mails = [];

            MailService.loadIncomingMessages().then(function(mails) {
                self.mails = mails;
            });
        }
    };
});


app.directive("mailItem", function() {
    return {
        restrict: "E",
        templateUrl: "mail-item.html"
    };
});





