"use strict"
{
  let vm = new Vue({
    el: "#app", //どのviewと紐づけているか(id=appを指定)
    data: {
      // name: "itamoto",
      newItem: "",
      todos: [{
        title: "task 1",
        isDone: false,
      },{
        title: "task 2",
        isDone: false,
      },{
        title: "task 3",
        isDone: true,
      }]
    },
    //イベントを指定する
    methods: {
      addItem: function() {
        let item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = "";
      },

      deleteItem: function(index) {
        if (confirm("本当に消しますか？")) {
          this.todos.splice(index, 1);
        }
      },

      purge: function() {
        if (!confirm("本当に削除しますか？")) {
          return;
        }
        this.todos = this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }

    },
    // データから動的にプロパティを計算する
    computed: {
      remaining: function() {
        let items = this.todos.filter(function(todo) {
          return !todo.isDone;
        });
        return items.length;
      }
    }

  })

}