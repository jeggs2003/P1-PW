const TARIFAS = {
  base: {
    misma_ciudad:        25,
    otro_departamento:   45,
    centroamerica:       120,
    sudamerica_mexico:   200,
    norteamerica:        250,
    europa:              350,
  },
  peso: {
    misma_ciudad:        5,
    otro_departamento:   8,
    centroamerica:       12,
    sudamerica_mexico:   18,
    norteamerica:        22,
    europa:              28,
  },
  servicio: {
    estandar: 1,
    expres:   1.6,
  },
  extras: {
    recoleccion: 15,
    seguro:      25,
  },
  tiempos: {
    misma_ciudad:        { estandar: '1 día hábil',          expres: '2 a 4 horas' },
    otro_departamento:   { estandar: '2 a 3 días hábiles',   expres: '24 horas' },
    centroamerica:       { estandar: '3 a 5 días hábiles',   expres: '1 a 2 días hábiles' },
    sudamerica_mexico:   { estandar: '7 a 10 días hábiles',  expres: '3 a 4 días hábiles' },
    norteamerica:        { estandar: '7 a 12 días hábiles',  expres: '3 a 5 días hábiles' },
    europa:              { estandar: '12 a 20 días hábiles', expres: '5 a 8 días hábiles' },
  }
}

export function calcularCotizacion({ destino, peso, servicio, recoleccion, seguro }) {
  const costoBase     = TARIFAS.base[destino]
  const costoPeso     = parseFloat(peso) * TARIFAS.peso[destino]
  const multiplicador = TARIFAS.servicio[servicio]
  const costoExtras   = (recoleccion ? TARIFAS.extras.recoleccion : 0)
                      + (seguro      ? TARIFAS.extras.seguro      : 0)

  const subtotal = (costoBase + costoPeso) * multiplicador
  const total    = subtotal + costoExtras

  return {
    costoBase:  Math.round(costoBase * multiplicador * 100) / 100,
    costoPeso:  Math.round(costoPeso * multiplicador * 100) / 100,
    costoExtras,
    total:      Math.round(total * 100) / 100,
    tiempo:     TARIFAS.tiempos[destino][servicio],
  }
}