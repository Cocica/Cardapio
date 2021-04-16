let menu = {
  _courses: {
    appetizers:[],
    main:[],
    desserts:[]
  },
    get courses (){
      return {
        appetizers: this.appetizers,
        main: this.main,
        desserts: this.desserts
      }
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(x){
      this._course.appetizers = x;
    },
    get main() {
      return this._courses.main;
    },
    set main(x){
      this._course.main = x;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(x){
      this._course.desserts = x;
    },

    addDishToCourse(courseName,dishName,dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {

      const dishes = this._courses[courseName];
      const index = Math.floor(Math.random() * dishes.length);
      return dishes[index]
    },

    generatoRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('main');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price
      return `Sua refeição é ${appetizer.name}, ${main.name}, ${dessert.name}, com o valor de ${totalPrice}`
    }

};

menu.addDishToCourse('appetizers','salad',4.99)
menu.addDishToCourse('appetizers','wings',2.99)
menu.addDishToCourse('appetizers','fries',1.99)

menu.addDishToCourse('main','steak',10.99)
menu.addDishToCourse('main','bacon',12.99)
menu.addDishToCourse('main','caule',11.99)

menu.addDishToCourse('desserts','ice cream',2.99)
menu.addDishToCourse('desserts','coffee',3.99)
menu.addDishToCourse('desserts','cake',3.92)


const meal = menu.generatoRandomMeal();
console.log(meal)
