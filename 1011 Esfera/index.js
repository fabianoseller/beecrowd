var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

function calcularVolumeEsfera(raio)
{
    const pi = 3.14159;
    const volume = (4 / 3) * pi * raio**3;
    return volume.toFixed(3);
};

const raio = lines[0];
const volume = calcularVolumeEsfera(raio);

console.log(`VOLUME = ${volume}`);
 
