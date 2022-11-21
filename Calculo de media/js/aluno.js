class Aluno { 
    nome;
    matricula;
    nota1;
    nota2;
    nota3;
    media;
    
    constructor(nome, matricula, n1, n2, n3) {
        this.nome = nome;
        this.matricula = matricula;
        this.nota1 = n1;
        this.nota2 = n2;
        this.nota3 = n3;
    }
    
    exibeInfo() {
    return `Aluno: ${this.nome} - mat: ${this.matricula}
    Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3}
    Média:${this.calculaMedia()} 
        `;
    
    }
    
    calculaMedia() {
    return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
    }
    
}



let alunoNome = document.querySelector("#nome").value
let alunoMatricula = document.querySelector("#matricula").value
let alunoNota1 = document.querySelector("#nota1").value
console.log(alunoNota1, alunoNome)
let alunoNota2 = document.querySelector("#nota2").value
let alunoNota3= document.querySelector("#nota3").value
let calcButton = document.querySelector('#calc-button')
let cleanerButton = document.querySelector('#cleaner-button')
let toTable = document.querySelector("#build-table")


calcButton.addEventListener('click', function(event){  
    event.preventDefault()
    console.log('Atribuindo valores...')

    let nome = (alunoNome)
    let matricula = (alunoMatricula)
    let nota1 = parseFloat(alunoNota1)
    let nota2 = parseFloat(alunoNota2)
    let nota3 = parseFloat(alunoNota3)
    let aluno1 = new Aluno(nome, matricula, nota1, nota2, nota3)
    let media = aluno1.calculaMedia(nota1, nota2, nota3)
    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    console.log("Media: " + media)
    console.log("Construindo tabela...") 
    toTable.innerHTML += 
    `<tr>
    <td>${nome}</td>
    <td>${matricula}</td>
    <td>${media}</td>`
})

cleanerButton.addEventListener('click', function(){ 
    nome.value = ""
    matricula.value = ""
    nota1.value = ""
    nota2.value = ""
    nota3.value = ""
})

