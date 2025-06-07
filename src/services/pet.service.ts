import {Injectable} from '@angular/core';
import {PetModel} from "../models/pet.model";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  public pets: PetModel[]

  private static instance: PetService

  constructor() {
    this.pets = [
      {
        id: 1,
        age: 3,
        description: "Crni Labrador",
        gender: "male",
        image: "zuca.jpg",
        name: "Zuca",
        price: 200,
        score: 5,
        size: "M",
        species: "dog"
      },
      {
        id: 2,
        age: 24,
        description: "Ja sam macak mika koji nije bilo ko",
        gender: "male",
        image: "mika.jpg",
        name: "Mika",
        price: 300,
        score: 5,
        size: "M",
        species: "cat"
      },
      {
        id: 3,
        age: 3,
        description: "Ara Ara",
        gender: "male",
        image: "pera.jpg",
        name: "Pera",
        price: 300,
        score: 5,
        size: "L",
        species: "parrot"
      },
      {
        id: 4,
        age: 5,
        description: "Crna macka",
        gender: "male",
        image: "marko.jpg",
        name: "Marko",
        price: 150,
        score: 5,
        size: "M",
        species: "cat"
      },
      {
        id: 5,
        age: 2,
        description: "Mali zec",
        gender: "female",
        image: "kunic.jpg",
        name: "Kunic",
        price: 150,
        score: 5,
        size: "S",
        species: "rabbit"
      },
      {
        id: 6,
        age: 3,
        description: "Mitar Stanisic",
        gender: "male",
        image: "dzin.jpg",
        name: "Mitar",
        price: 130,
        score: 5,
        size: "L",
        species: "rabbit"
      },
      {
        id: 7,
        age: 1,
        description: "Hrcak",
        gender: "female",
        image: "strasko.jpg",
        name: "Strasko",
        price: 50,
        score: 5,
        size: "S",
        species: "hamster"
      },
      {
        id: 8,
        age: 1,
        description: "Ferret",
        gender: "male",
        image: "ferret.jpg",
        name: "Radovan",
        price: 60,
        score: 5,
        size: "M",
        species: "Ferret"
      },
      {
        id: 9,
        age: 2,
        description: "Imao sam strasnog petla bio je pravi djavo",
        gender: "male",
        image: "rooster.jpg",
        name: "Pera",
        price: 80,
        score: 5,
        size: "M",
        species: "chicken"
      },
      {
        id: 10,
        age: 1,
        description: "Plavi jastog",
        gender: "male",
        image: "lobster.jpg",
        name: "Mateo",
        price: 90,
        score: 5,
        size: "L",
        species: "lobster"
      },
    ];
  }

  public static getInstance() {
    if (this.instance == undefined)
      this.instance = new PetService()
    return this.instance
  }

  public getAllPets() {
    return this.pets;
  }

  public getPetsById(id: number) {
    return this.pets[id];
  }

  public getPetsByIds(ids: number[]) {
    let petsToReturn:PetModel[] = [];
    for (let num in ids){
      petsToReturn.push(this.pets[num]);
    }
    return petsToReturn;
  }

  public getPetNameById(id: number) {
    return this.pets[id-1].name;
  }

  public getPetPriceById(id: number) {
    return this.pets[id-1].price;
  }
}
