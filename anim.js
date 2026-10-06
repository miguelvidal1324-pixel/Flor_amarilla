// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array con los tiempos EXACTOS del archivo .lrc original
var lyricsData = [
  { text: "...", time: 0.000 },

  { text: "Regálame tu corazón, déjame entrar a ese lugar", time: 24.540 },
  { text: "Donde nacen las flores", time: 33.950 },
  { text: "Donde nace el amor", time: 38.378 },
  { text: "Entrégame tus labios rotos, los quiero besar", time: 42.198 },
  { text: "Los quiero curar", time: 47.087 },
  { text: "Los voy a cuidar", time: 51.536 },
  { text: "Con todo mi amor", time: 55.934 },

  { text: "Es raro el amor (Ah-ah-ah-ah)", time: 62.556 },
  { text: "Es raro el amor (Ah-ah-ah-ah)", time: 66.976 },
  { text: "Que se te aparece cuando menos piensas", time: 71.127 },
  { text: "Es raro el amor (Ah-ah-ah-ah)", time: 75.786 },
  { text: "Es raro el amor (Ah-ah-ah-ah)", time: 80.155 },
  { text: "No importa la distancia, ni el tiempo, ni la edad", time: 84.094 },
  { text: "Uh-uh-uh-uh-uh", time: 90.334 },
  { text: "...", time: 95.262 },

  { text: "Moja el desierto de mi alma con tu mirar", time: 117.072 },
  { text: "Con tu tierna voz", time: 122.092 },
  { text: "Con tu mano en mi mano", time: 126.432 },
  { text: "Por la eternidad", time: 130.749 },
  { text: "Y entrégame esos labios rotos, los quiero besar", time: 134.650 },
  { text: "Los quiero curar", time: 139.580 },
  { text: "Los voy a cuidar", time: 144.062 },
  { text: "Con todo mi amor", time: 148.412 },

  { text: "Es raro el amor (Ah-ah-ah-ah)", time: 155.000 },
  { text: "Es raro el amor (Ah-ah-ah)", time: 159.420 },
  { text: "Que se te aparece cuando menos piensas", time: 163.621 },
  { text: "Es raro el amor (Ah-ah-ah-ah)", time: 168.270 },
  { text: "Es raro el amor (Ah-ah-ah)", time: 172.671 },
  { text: "No importa la distancia, ni el tiempo, ni la edad", time: 176.531 },

  { text: "(Uh) Ah-ah-ah-ah", time: 182.903 },
  { text: "(Uh) Ah-ah-ah-ah", time: 187.144 },
  { text: "Ah-ah-ah-ah", time: 197.273 },
  { text: "Ah-ah-ah-ah", time: 201.605 },
  { text: "Amor, amor, amor, amor, amor, amor", time: 206.363 },
  { text: "Amor, amor, amor, amor, amor, amor, amor", time: 212.902 },
  { text: "Ah-ah-ah-ah", time: 223.292 },
  { text: "Ah-ah-ah-ah", time: 227.642 }
];

// Animar las letras con alta precisión
function updateLyrics() {
  var time = audio.currentTime;

  var currentLine = null;

  for (var i = 0; i < lyricsData.length; i++) {
    if (time >= lyricsData[i].time) {
      currentLine = lyricsData[i];
    } else {
      break;
    }
  }

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(
      1,
      (time - currentLine.time) / fadeInDuration
    );

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Actualiza automáticamente con el tiempo del audio
audio.ontimeupdate = updateLyrics;

// También actualiza al comenzar/reanudar la canción
audio.addEventListener("play", updateLyrics);
audio.addEventListener("seeked", updateLyrics);

// Función para ocultar el título
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");

  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";

    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
}

setTimeout(ocultarTitulo, 240000);