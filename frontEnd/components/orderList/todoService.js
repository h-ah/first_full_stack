var app = angular.module("TodoApp");

app.service("TodoService", ["$http", function($http) {
    var self = this;
    this.todoList = [];

    this.getTodos = function() {
        return $http.get("/api/todo").then(function(response) {
            self.todoList = response.data;
            return response.data;
        });
    };

    this.addTodo = function(newTodo) {
        return $http.post("/api/todo", newTodo).then(function(response) {
            self.todoList.push(response.data);
        });
    };

    this.deleteTodo = function(todo, index) {
        return $http.delete("/api/todo/" + todo._id).then(function(response) {
            self.todoList.splice(index, 1);
        });
    };

    this.updateTodo = function(todo, index) {
        return $http.put("/api/todo/" + todo._id, todo).then(function(response) {
            self.todoList[index] = response.data;
        });
    };

}]);










