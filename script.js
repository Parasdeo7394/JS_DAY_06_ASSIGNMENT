//   1.a a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
    
// class Movie {
//   constructor(title, studio, rating) {
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   }
// }

// const movie1 = new Movie("Bahubali", "Ramoji Film City", "G");
// const movie2 = new Movie("Murder2", "Goregaon", "NC-17");

// console.log(movie1);
// console.log(movie2);


//  1.b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

   
// class Movie {
//   constructor(title, studio, rating="PG") {
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   }
// }

// const movie1 = new Movie("Bahubali", "Ramoji Film City");
// const movie2 = new Movie("Murder2", "Goregaon", "NC-17");

// console.log(movie1);
// console.log(movie1.rating);
// console.log(movie2);
// console.log(movie2.rating);

//  1 c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// class Movie {
//   constructor(title, studio, rating="PG") {
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   }
//   static getPG(movies) {
//     return movies.filter(movie => movie.rating === "PG");
//   }
// }



// const movies = [
//   new Movie("Bahubali", "Ramoji Film City", "PG"),
//   new Movie("Murder2", "Goregaon", "NC-17"),
//   new Movie("RRR", "Telangana film city", "PG"),
//   new Movie("Hissas", "Delhi studio", "R")
// ];

// const pgMovies = Movie.getPG(movies);
// console.log(pgMovies);



//  3) Write a “person” class to hold all the details
          


                      
// class Person {
//   constructor(name, profession, gender) {
//     this.name = name;
//     this.profession = profession;
//     this.gender = gender;
//   }

//   introduce() {
//     console.log(`Hi, my name is ${this.name}, and I am ${this.profession} years old. I am ${this.gender}.`);
//   }
// }


// const person1 = new Person('Rohan', 'engineer', 'male');
// const person2 = new Person('Priti', 'doctor', 'female');

// person1.introduce(); 
// person2.introduce(); 


//     4)write a class to calculate the uber price.


           
// class UberPriceCalculator {
//   constructor(baseFare, costPerkms, costPerseconds) {
      
//     this.baseFare = baseFare;
//     this.costPerkms = costPerkms;
//     this.costPerseconds = costPerseconds;
//   }

//   calculatePrice(distance, duration,customerName) {
//     const fare = this.baseFare + (this.costPerkms * distance) + (this.costPerseconds * duration);
//     return {
//          customerName,
//          distance,
//          duration,
//          fare
//     };
//   }
// }


// const calculator = new UberPriceCalculator(48,10,0.085);

// const customerName = "Paras";
// const distance = 10; // in kms
// const duration = 1200; // in seconds
// const price = calculator.calculatePrice(distance, duration,customerName);

// console.log(`The Uber price for ${customerName} for a ${distance}-kms ride taking ${duration} seconds is Rs${price.fare}.`);
// console.log(price);
