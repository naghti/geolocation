function success(pos) {
  var crd = pos.coords;

  alert('Ваше текущее местоположение:');
  alert(`Широта: ${crd.latitude}`);
  alert(`Долгота: ${crd.longitude}`);
  alert(`Плюс-минус ${crd.accuracy} метров.`);
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);
