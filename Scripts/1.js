new Vue ({
  el: "#app1",
  data: {
    title: "2DO Task list",
    items: [
     
    ]
  },

  methods: {

    addItem: function () {
      var input = document.getElementById('itemForm');
      if (input.value !== '') {
        this.items.push({
          text:input.value
        })
        input.value = "";
      }
    },

    deleteItem: function(index) {
      this.items.splice(index, 1);
    }
  }
    
});

