import { PlanetAgeTest } from './../src/main.js';
describe('PlanetAgeTest', function() {

  it ('should test if the variables are being filled correctly by the date object', function() {
    let c = Date.now()
    let d = new Date("1987-08-27")
    let e = d.getTime();
    var planetTest = new PlanetAgeTest(c, e, "Mars")
    expect(planetTest.now).not.toEqual(0)
    expect(planetTest.dob).toEqual(557020800000)
  });


  it ('should test if the function returns the correct age', function() {
    let c = Date.now()
    let d = new Date("1987-08-27")
    let e = d.getTime()
    var planetTest = new PlanetAgeTest(c, e, "Mars")
    expect(planetTest.aging()).toEqual(17);
  });

  it ('should test if the user is over the expected age', function() {
    let c = Date.now()
    let d = new Date("1800-08-27")
    let e = d.getTime()
    var planetTest = new PlanetAgeTest(c, e, "Mars")
    expect(planetTest.death()).toEqual("You should be dead!");
  });
});
