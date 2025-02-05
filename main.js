// Classe base (abstração)
class Veiculo{
        constructor(tipo, marca, modelo, ano){
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalhes(){
        return `Tipo: ${this.tipo}, Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`
    }
}

// Classe Carro herdada de Veiculo
class Carro extends Veiculo{
    constructor(tipo, marca, modelo, ano, portas){
        super(tipo, marca, modelo, ano);
        this.portas = portas;
    }
    detalhes(){
        return `Esse veículo é um: ${this.tipo}, Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Portas: ${this.portas}`
    }
}

// Classe Moto herdada de Veiculo
class Moto extends Veiculo{
    constructor(tipo, marca, modelo, ano, cilindradas){
        super(tipo, marca, modelo, ano);
        this.cilindradas = cilindradas;
    }
    detalhes(){
        return `Esse veiculo é uma: ${this.tipo}, Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cilindradas: ${this.cilindradas}`
    }
}

// Criando um carro
const carro = new Carro('Carro', 'Fiat', 'Argo', '2023', '4');
const carro2 = new Carro ('Carro', 'Toyota', 'Corolla', '2024', '4');
const carro3 = new Carro ('Carro', 'Honda', 'Civic', '2025', '4');

// Criando uma moto     
const moto = new Moto('Moto', 'Yamaha', 'Fazer', '2023', '150');
const moto2 = new Moto('Moto', 'Honda', 'Pop', '2007', '100');


// Mostrando os detalhes dos veículos
console.log(carro.detalhes());
console.log(carro2.detalhes());
console.log(moto.detalhes());
console.log(moto2.detalhes());