function calculateRectangleArea(length, width) {
  let recArea = length * width;
  if (length < 0 || width < 0) {
    return undefined;
  }
  return recArea;
}

function calculateTriangleArea(base, height) {
  let triArea = base * height / 2;
  if (base < 0 || height < 0) {
    return undefined;
  }
  return triArea;
}

function calculateCircleArea(radius) {
  let cirArea = Math.PI * (radius ** 2);
  if (radius < 0) {
    return undefined;
  }
  return cirArea;
}

console.log(calculateTriangleArea(20, 50));