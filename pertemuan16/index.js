let mahasiswa = {
    name : "Janedoe",
    age : 30,
    isMarried : false,
    printName : function(){
        console.log(this.name);
    },
    printAge : function(){
        console.log(this.age);
    }
}

mahasiswa.printAge();