//clase 73
const generatePoints = (numberPoints) => {
  const points = [];
  const x_oes = bounds.getEast();
  const x_est = bounds.getWest();
  const y_nor = bounds.getNorth();
  const y_sur = bounds.getSouth();

  for( let i = 0; i < numberPoints; i++){
    const lat = y_sur + (Math.random()  * (y_nor - y_sur))
    const lng = x_est + (Math.random()  * (x_oes - x_est ))
    points.push([lat, lng])
  }

  return points;
}
