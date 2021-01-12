// simple object
let obj = {
    a: 1,
    b: 2
}

// example 1
function ArtistCreator(name, art) {
    const newArtist = Object.create(commonFunctionalities);
    
    newArtist.name = name;
    newArtist.art = art;

    return newArtist;
}

const commonFunctionalities = {
    isHuman: function() {
        console.log(this.name);
        return true;
    },
    isCuriuos: function() {
        console.log(this.name);
        return true;
    }
}

let artist1 = ArtistCreator('John', 'Painter');
let artist2 = ArtistCreator('Maria', 'Writer');


// example 2
function ArtistCreator(name, art) {
    this.name = name;
    this.art = art;
}

ArtistCreator.prototype.isHuman = function() {
    console.log(this.name);
    return true;
}
ArtistCreator.prototype.isCuriuos = function() {
    console.log(this.name);
    return true;
}

let artist1 = new ArtistCreator('John', 'Painter');
let artist2 = new ArtistCreator('Maria', 'Writer');


// example 3 (equivalent syntatic sugar of example 2)
class ArtistCreator {
    constructor(name, art) {
        this.name = name;
        this.art = art;
    }
    isHuman() {
        console.log(this.name);
        return true;
    }
    isCuriuos() {
        console.log(this.name);
        return true;
    }
}

let artist1 = new ArtistCreator('John', 'Painter');
let artist2 = new ArtistCreator('Maria', 'Writer');

// example 4
// ArtistCreator contructor
function ArtistCreator(name, art) {
    this.name = name;
    this.art = art;
}

ArtistCreator.prototype.isHuman = function() {
    console.log(this.name);
    return true;
}
ArtistCreator.prototype.isCuriuos = function() {
    console.log(this.name);
    return true;
}

let artist1 = new ArtistCreator('John', 'Painter');

// Entrepreneur contructor
function Entrepreneur(name, art, communicationSkill) {
    ArtistCreator.call(this, name, art);
    this.communicationSkill = communicationSkill;
}

Entrepreneur.prototype = Object.create(ArtistCreator.prototype);

Entrepreneur.prototype.hasPatience = function() {
    console.log(this.name);
    return true;
} 

let entrepreneur1 = new Entrepreneur('Maria', 'Writer', 'Good');


// example 5
class ArtistCreator {
    constructor(name, art) {
        this.name = name;
        this.art = art;
    }
    isHuman() {
        console.log(this.name);
        return true;
    }
    isCuriuos() {
        console.log(this.name);
        return true;
    }
}

let artist1 = new ArtistCreator('John', 'Painter');

class Entrepreneur extends ArtistCreator {
    constructor(name, art, communicationSkill) {
        super(name, art);
        this.communicationSkill = communicationSkill;
    }
    hasPatience() {
        console.log(this.name);
        return true;
    }
}

let entrepreneur1 = new Entrepreneur('Maria', 'Writer', 'Good');