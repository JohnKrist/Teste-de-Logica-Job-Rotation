function showResults(resultado) {
    const body = document.getElementById('root')
    const div = document.createElement('div')
    div.innerText = `${resultado}`
    body.appendChild(div)
    

}
//        teste 1
function teste1(){

    let indice = 13; let soma = 0; let K = 0;
    while (K < indice) 
    {
        K += 1
        soma += K
    }
    return soma
}
showResults(teste1)
showResults('RESPOSTA DO TESTE 1:')
showResults(teste1())
    

//        teste 2
function fibonacci(number = 20){

    let N = []
    N[0] = 0
    N[1] = 1
    for (let i = 2; i < number; i++) {
        N[i] = N[i - 2] + N[i -1]
    }
    return N.toString()
}
showResults(fibonacci)
showResults('RESPOSTA DO TESTE 2:')
showResults(fibonacci())

//            teste 3
showResults("RESPOSTA TESTE 3")
showResults("a) 1, 3, 5, 7, 9 (numeros impares)\nb) 2, 4, 8, 16, 32, 64,128 (O proximo numero e igual o anterior vezes 2 ) \nc) 0, 1, 4, 9, 16, 25, 36, 49 (se 16 - 9 (+ 2 + 16) = 25 ou 25 - 16 (+ 2 + 25) = 36 , então , 36 - 25(+ 2 + 36) = 49) \nd) 4, 16, 36, 64, 100 (a seguencia é igual dos quadrados perfeitos pulando os numeros 1, 9, 25, 49, 81 ) \ne) 1, 1, 2, 3, 5, 8, 13 (soma do atual com o anterior) \nf) 2,10, 12, 16, 17, 18, 19, 200 (todos numeros que começam com a letra 'D') ")
  
//            teste 4
showResults("RESPOSTA TESTE 4")
showResults("Te todas as maneiras que pensei, o caminhão sempre estara mais proximo de Ribeirão Preto que o carro. Espero que nao seja uma pegadinha ")

//            teste 5
function reverse(string) {
    var output = '',
        length = string.length
    while (length--) {
        output+= string[length]
    }
    return output
}
showResults(reverse)
showResults("RESPOSTA TESTE 5")
showResults(reverse('batata'))