1.
let cars = [ "audi","bmw","lexus", "volkswagen", "porsche","audi"];
  for (let x=1; x < 6; x++)
     console.log(cars[x]);



2.
let names = [ "nika", "beqa" , "sandro" , "ia" , "nia", "marishka"];
 for (let x=0; x < names.length; x++) {
    if (names [x].length > 3) {
        console.log(names[x]);
    }
}


3.
let number = [1,4,5,6,9,11,16,17,25,32,43,56,65,66]
 for (let item of number) {
    if (item % 2 == 0) {
        console.log(item);
    }
}
for (let item of number) {
    if (item % 2 == 1) {
        console.log(item);
    }
}



4.
let numbers=[ 15,67,100,5,7,[80,500]]

   console.log(numbers[5][1]);

5.
var person = {
    firstname: 'john',
    lastname: 'doe',
    age: 50,
    eyecolor: 'blue'
}

    console.log(person.eyecolor);
    console.log(person.age);

6. 
let today = [5,'august',2021]
   for ( let x of today)
      console.log(x);

7.
let items = ['sandro','nini','ika','nia','nika']
    if (item = 5 && items[4]==='nika')

         console.log('მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა');

    if (item =7 || item[0] === 'sandro' )
         console.log('მასივის რაოდენობა: 7 ან პირველი ელემენტია სანდრო');

8.
let x = 6;
let y = '6'; 
    console.log(6==='6'); 
//  false რადგან არ ხდება ტიპების კონვერტაცია , სტრინგი არ გადადის რიცხვში 3 ტოლობის დროს