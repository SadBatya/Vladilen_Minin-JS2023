const foo = {
  a: 5,
  bar: function() {
    console.log(this.a);
  },
  baz: () => {
    console.log(this.a);
  }
};

foo.bar(); // Вывод: 5
foo.baz(); // Вывод: undefined