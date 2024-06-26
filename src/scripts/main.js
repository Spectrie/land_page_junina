AOS.init();

const dataDoEvento = new Date ("Jun 15, 2025 19:00:00");
const interaloDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteOevento = interaloDoEvento - timeStampAtual;

    const diasAteOevento = Math.floor(tempoAteOevento / (1000 * 60 * 60 * 24));
    const horasAteOevento = Math.floor((tempoAteOevento % 1000 * 60 * 60 * 24) / (100 * 60 * 60));
    const minutosAteOevento = Math.floor((tempoAteOevento % 1000 * 60 * 60) / (1000* 60));
    const segundosAteOevento = Math.floor((tempoAteOevento % 1000 * 60) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOevento}d ${horasAteOevento}h ${minutosAteOevento}m ${segundosAteOevento}s`
},1000)