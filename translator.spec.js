import { translateToMorse } from "./translator";

describe('Testing translateToMorse', () => {
    it("a should translate to be *-", ()=> {
      // Arrange
        let string;
      // Act
        string = "a";
        let result = translateToMorse(string);
      // Assert
      expect(result).toBe("*-");
    });

  it("Atif should translate to be .- - .. ..-.", ()=> {
      // Arrange
        let string;
      // Act
        string = "Atif";
        let result = translateToMorse(string);
      // Assert
      expect(result).toBe(".- - .. ..-.");
  });


  it("Atif should translate to be .- - .. ..-.", ()=> {
      let string;
      string = "Atif";
      let result = translateToMorse(string);
      expect(result).toBe(".- - .. ..-.");
  });

  it('space should translate to /', () => {
    expect(result(" ")).toBe("/");
    });


  it("! should translate to be -.-.--", ()=> {
    let string;
    string = "!";
    let result = translateToMorse(string);
    expect(result).toBe("-.-.--");
  });

  it('Hello, my name is Atif! translate to .... . .-.. .-.. --- --..-- / -- -.-- / -. .- -- . / .. ... / .- - .. ..-. -.-.--', () => {
    let string;
    string = "Hello, my name is Atif!";
    let result = translateToMorse(string);
    expect(result).toBe(".... . .-.. .-.. --- --..-- / -- -.-- / -. .- -- . / .. ... / .- - .. ..-. -.-.--")
  });

  it('234', () => {
    let string;
    string = "234";
    let result = translateToMorse(string);
    expect(result).toBe("..--- ...-- ....-")
  });

  it("My fav number is, 298. should translate to -- -.-- / ..-. .- ...- / -. ..- -- -... . .-. / .. ... --..-- / ..--- ----. ---.. .-.-.-", ()=> {
    let string;
    string = "My fav number is, 298.";
    let result = translateToMorse(string);
    expect(result).toBe("-- -.-- / ..-. .- ...- / -. ..- -- -... . .-. / .. ... --..-- / ..--- ----. ---.. .-.-.-");
  });

})

// What should translateToMorse function actually be able to do?

// - Recieve letters and translate those letters to morse code
// - Take into cocnsideration spaces between words and translate these accordingly
// - Numbers
// - Symbols
// - Extension - Other languages available other than English

// Should we have a translateToEnglish translate?
