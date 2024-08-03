// Movie class

class movie {
    constructor(title,studio,rating = "R"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static get_pg(movies){
        var pgMovies=[];
        for(var i=0;i<movies.length;i++){
            if(movies[i].rating == "PG"){
                pgMovies.push(movies[i]);
            }
        }
        return pgMovies;
    }
}
var casino = new movie("Casino Royale","Eon Productions","PG13");
var m1 = new movie("Leo","Rajkamal","PG");
var m2 = new movie("Fast and furious","Fox","PG");
var m3 = new movie("Forrest Gump", "AVM", "R");
var movies = [m1,m2,m3,casino];
var pgMovies = movie.get_pg(movies);
console.log(pgMovies);
console.log(casino);

//circle class

class circle {
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    radius_cir(){
        return "this is the radius "+this.radius;
    }
    color_cir(){
        return "this is the color "+this.color;
    }
    get_area(){
        return Math.PI * this.radius * this.radius;
    }
    get_circum(){
        return 2*Math.PI*this.radius;
    }
}
var c1 = new circle(1.0,"red");
console.log(c1.radius_cir());
console.log(c1.color_cir());
console.log(c1.get_area());
console.log(c1.get_circum());

//person class

class person {
    constructor(name,age,gender,degree,phone){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.degree = degree;
        this.phone = phone;
    }
    print_name(){
            return "the name of the person is "+ this.name;
        }
    print_age(){
        return "the age of person is "+this.age;
    }
}
var p1 = new person("gowtham",27,"male","MCA",13345678901);
var p2 = new person("bond",45,"male","M.Tech");
console.log(p1.print_name());
console.log(p2.print_age());


//uber class

class uber {
    constructor(destination,km,price){
        this.destination = destination;
        this.km = km;
        this.price = price;
    }
     ride_cost(){
        return this.km*this.price;
         
    }
}
var ride1 = new uber("chennai",5,25);
var ride2 = new  uber("coimbatore",10,25);
console.log(ride1.ride_cost());
console.log(ride2.ride_cost());

