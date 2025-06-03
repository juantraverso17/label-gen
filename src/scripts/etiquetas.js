function generarEtiquetaPrecio(precio) {
    const etiqueta = document.createElement('div');
    etiqueta.className = 'etiqueta-precio';
    etiqueta.textContent = `$${precio.toFixed(2)}`;
    return etiqueta;
}

document.getElementById('generarEtiqueta').addEventListener('click', function() {
    const precioContado = parseInt(document.getElementById('precioContado').value, 10) || 0;
    const porcentaje = parseFloat(document.getElementById('porcentaje').value) || 21;
    const talle = document.getElementById('talle').value;

    // Formatear precio contado con separador de miles
    const precioContadoFormateado = precioContado.toLocaleString('es-AR');

    // Calcular precio de lista
    let precioLista = precioContado * (1 + porcentaje / 100);
    // Redondear al próximo múltiplo de 1000
    precioLista = Math.ceil(precioLista / 1000) * 1000;
    const precioListaFormateado = precioLista.toLocaleString('es-AR');

    // Generar HTML de la etiqueta
    const etiquetaHTML = `
        <html>
        <head>
            <title>Etiqueta de Precio</title>
            <style>
                body { margin:0; }
                .etiqueta {
                    width: 55mm;
                    height: 44mm;
                    /* border: 1px solid #000; */
                    font-family: Arial, sans-serif;
                    padding: 1mm;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: stretch;
                }
                .precio-contado { margin: 1mm 0 0.5mm 0; text-align: center; }
                .precio-lista { margin: 0.5mm 0 1mm 0; text-align: center; }
                .precio { font-size: 8mm; font-weight: bold; text-align: center; }
                .precio-lista .precio {
                    font-size: 4.2mm;
                    font-weight: normal;
                }
                .talle-bloque {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 1mm;
                    margin-bottom: 0;
                }
                .leyenda-talle {
                    font-size: 4mm;
                    text-align: center;
                    font-weight: bold;
                    margin-bottom: 0.5mm;
                }
                .talle {
                    font-size: 8mm;
                    font-weight: bold;
                    text-align: center;
                    width: 100%;
                    word-break: break-word;
                    line-height: 1;
                }
            </style>
        </head>
        <body>
            <div class="etiqueta">
                <div class="precio-contado">
                    <div class="titulo">Precio contado</div>
                    <div class="precio">$${precioContadoFormateado}</div>
                </div>
                <div class="precio-lista">
                    <div class="titulo">Precio de lista</div>
                    <div class="precio">$${precioListaFormateado}</div>
                </div>
                <div class="talle-bloque">
                    <div class="leyenda-talle">Talle</div>
                    <div class="talle">${talle}</div>
                </div>
            </div>
        </body>
        </html>
    `;

    // Abrir en nueva pestaña
    const win = window.open('', '_blank');
    win.document.write(etiquetaHTML);
    win.document.close();
});

export { generarEtiquetaPrecio };