// Capturamos los elementos de audio del HTML
const bgMusic = document.getElementById('bgMusic'); /* Guarda la música de fondo de la galería */
const clickSound = document.getElementById('clickSound'); /* Guarda el sonido corto del clic de la Wii */

// Capturamos todos los botones que queremos que suenen al hacer clic
const clickElements = document.querySelectorAll('.channel, .btn, .contacto'); /* Guarda la lista de botones */

// FUNCIÓN PARA ACTIVAR LA MÚSICA DE FONDO
const playBackgroundMusic = () => 
{
    if (bgMusic) /* Si existe el elemento de música en el HTML... */
    {                                     
        bgMusic.play() /* Intenta reproducir la música */
            .then(() => /* Si el navegador lo permite con éxito: */
            {                             
                document.removeEventListener('mousedown', playBackgroundMusic); /* Quita el detector de clics */
                document.removeEventListener('keydown', playBackgroundMusic);  /* Quita el detector de teclado */
            })
            .catch(error => console.log("Bloqueo de audio")); /* Si el navegador la frena, avisa sin romper la web */
    }
};

// Detectores para activar la música en cuanto toques la pantalla o el teclado
document.addEventListener('mousedown', playBackgroundMusic); /* Si hace clic, salta la función de la música */
document.addEventListener('keydown', playBackgroundMusic);  /* Si toca una tecla, salta la función de la música */

// Efecto de sonido para los clics y retraso de enlaces
clickElements.forEach(el => /* Va uno por uno revisando todos los botones guardados */
{                       
    el.addEventListener('click', (e) => /* Se queda esperando a que hagas clic en uno de ellos */
    {               
        if (clickSound) /* Si el sonido del clic existe... */
        {  
            clickSound.currentTime = 0; /* Rebobina el sonido al principio */
            clickSound.play(); /* Reproduce el sonido de clic de la Wii */
        }
    });
});

window.addEventListener('load', playBackgroundMusic); /* Intenta arrancar la música nada más cargar la página */