

// Comentario multi linha (comentário de bloco) = /* */
// "" aspas duplas.
// '' aspas simples.
// `` template literals ou template string.

// Boolean -true
//         -false

// indefined- indefinido, algo que não vai existir.
// null- nulo, algo que existe porém não há nada dentro.

// Object - propriedades e funcionalidades
// propriedade: "valor" = {}

// Array []
// Uma lista
// Agrupamento de Dados

name = "Mérison"

let age, isHuman
age = 18
isHuman = true

// concatenando variáveis - console.log('o '+ name +' tem '+ age +' anos' )
//  Interpolando variáveis - console.log(`o ${name} tem ${age} anos`)


// 3 Palavras reservadas para se criar uma variável

// *const
// *var ( geralmente evitasse muito usar essa variável )
// *let

// var é global e local, e poderá ser usada fora de um escopo de bloco. 
// escopo- determina a visibilidade de alguma variável no JS
// Block statement- sempre cria um novo escopo





let weight
weight = 66
// console.log(typeof weight)

// let name, age, stars, isSubscribed

// name = Biny
// age = 17
// stars = 0.5
// isSubscribed = false

let student = {
    name: "Mérison",
    age: 18,
    weight: 66.87,
    isSubscribed: false,
};
    // console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)
    
    let students = []

    students = [ 
    student
]
console.log(students[0])

const biny = {
    name: "biny",
    age: 17,
    weight: 58.7,
    isSubscribed: true
}
students[1] = biny
console.log(students)





