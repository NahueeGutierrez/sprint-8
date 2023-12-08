import React, { useState, useEffect } from 'react';

function ConversorPesos() {
  const [conversionRates, setConversionRates] = useState(null);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const convertCurrency = () => {
    if (conversionRates !== null) {
      const result = amount / conversionRates[selectedCurrency];
      setConvertedAmount(result.toFixed(2));
    }
  };

  useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/f2753e2e7a865582804f2f3d/latest/ARS')
      .then((response) => response.json())
      .then((data) => {
        setConversionRates({
          ...data.conversion_rates,
          USD: 349.96,
          EUR: 373.82,
        });
      })
      .catch((error) => {
        console.error('Error al obtener la tasa de conversión:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="textoPesoDolar">Convertidor de Moneda:</h1>
      <h2>Pesos argentinos a otras divisas</h2>
      <label>Ingresá la cantidad en ARS:</label>
      <br />
      <input
        type="number"
        id="cantidadPesos"
        value={amount}
        onChange={handleAmountChange}
      />
      <label>Seleccioná la moneda de destino:</label>
      <select
        id="monedaDestino"
        value={selectedCurrency}
        onChange={handleCurrencyChange}
      >
        {conversionRates !== null &&
          Object.keys(conversionRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        <option value="EUR">Euro (EUR)</option>
      </select>
      <br />
      <button className="button" onClick={convertCurrency}>
        Convertir
      </button>
      {convertedAmount !== null && (
        <p id="resultadoPesos">
          {amount == 1 ? <p>{amount} Peso Argentino equivale a {convertedAmount} {selectedCurrency}</p> : <p>{amount} Pesos Argentinos equivalen a {convertedAmount} {selectedCurrency}.</p>}
        </p>

      )}
    </div>
  );
}

export default ConversorPesos;
