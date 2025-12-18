function conversionToBinary(ip) {
    const octetos = ip.split('.')
     if(octetos.length  !== 4) {
        throw new Error('Ip invalido: deve-se ter 4 octetos')
     }
    
    const result = []
     for (let x = 0; x < 4; x++) {
        const octeto = parseInt(octetos[x], 10)

        if(isNaN(octeto) || octeto < 0 || octeto > 255) {
            throw new Error(`Octeto Invalido: ${octetos[i]}`)
        }

        let binary = octeto.toString(2)
        binary = '0'.repeat(8 - binary.length) + binary
        result.push(binary)
     }

     return result.join('.')
}

function printResult() {
    const textIP = document.querySelector('#areaip').value
    const resultBinaryDOM = document.querySelector('#resultbinary')
    const binaryProcess = conversionToBinary(textIP)

    return resultBinaryDOM.value = binaryProcess
}