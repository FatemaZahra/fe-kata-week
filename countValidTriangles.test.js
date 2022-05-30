const countValidTriangles = require("./countValidTriangles.js");

describe("Takes arrays of triangles where each array has three numbers are the sides of the triangle, returns the count of triangles that are valid", () => {
  test("returns 0 when passed an empty array", () => {
    expect(countValidTriangles([])).toBe(0);
  });
  test("returns 0 when passed an array of no valid triangle", () => {
    expect(countValidTriangles([[5, 10, 25]])).toBe(0);
  });
  test("returns 1 when passed an array of valid triangles", () => {
    expect(countValidTriangles([[5, 4, 5]])).toBe(1);
  });
  test("returns count when passed an array of valid triangle and an array of invalid triangle", () => {
    expect(
      countValidTriangles([
        [5, 10, 25],
        [5, 4, 5],
      ])
    ).toBe(1);
  });
  test("returns count when passed an array of triangles valid and invalid", () => {
    expect(
      countValidTriangles([
        [5, 10, 25],
        [5, 4, 5],
        [542, 586, 419],
      ])
    ).toBe(2);
  });
});
