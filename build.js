var app = new Vue({
   el: '#app',
   data: {
       todos: [],
       next_todo: "",
       //next_todo_placeholder: "Надо же с чего-то начинанть...",
       message: "",
       showing_done: false,
   },
   methods: {
       invert_showing: function (){
           this.showing_done = !this.showing_done;
       },
       addTodo: function () {
           if (this.next_todo != ""){
               this.todos.push({
                   text: this.next_todo,
                   done: false,
               });
               this.next_todo = "";
           }
       },
       remove_todo: function(todo){
           this.todos.splice(this.todos.indexOf(todo), 1);
        },
       remove_message: function () {
           this.message = "";
       },
       invert: function (todo) {
           todo.done = !todo.done;
       }
   },
    computed: {
       amount: function () {
           if (this.showing_done)
               return this.todos.length;
           else {
               var sm = 0;
               for(var i = 0; i < this.todos.length; i++){
                   sm += (!this.todos[i].done);
               }
               return sm;
           }
       },
       next_todo_placeholder: function () {
           if (this.todos.length > 0){
               return "Запишите тут дело №" + (this.todos.length + 1).toString() + "...";
           }
           else {
               return "Надо же с чего-то начинанть...";
           }
       },
        have_message: function () {
            return this.message != "";
        }
    },
    watch: {
       message: function (val) {
           setTimeout(this.remove_message, 4000);
       }
    }
});

