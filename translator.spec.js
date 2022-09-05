import { translateToMorse } from "./translator";

describe('Testing translateToMorse for English to Morse', () => {
    it("a should translate to be .-", ()=> {
      // Arrange
        let string;
      // Act
        string = "a";
        let result = translateToMorse(string);
      // Assert
      expect(result).toBe(".-");
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

  it('a space should translate to /', () => {
    let string;
    string = " ";
    let result = translateToMorse(string);
    expect(result).toBe("/");
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

describe('Testing translateToMorse for Morse toEnglish', () => {
  it(".- should translate to be A", ()=> {
    // Arrange
      let string;
    // Act
      string = ".-";
      let result = translateToMorse(string);
    // Assert
    expect(result).toBe("A");
  });

it(".- - .. ..-. should translate to be ATIF", ()=> {
    // Arrange
      let string;
    // Act
      string = ".- - .. ..-.";
      let result = translateToMorse(string);
    // Assert
    expect(result).toBe("ATIF");
});


it('/ should translate to a space', () => {
  let string;
  string = "/";
  let result = translateToMorse(string);
  expect(result).toBe(" ");
  });


it("-.-.-- should translate to be ! ", ()=> {
  let string;
  string = "-.-.--";
  let result = translateToMorse(string);
  expect(result).toBe("!");
});

it('.... . .-.. .-.. --- --..-- / -- -.-- / -. .- -- . / .. ... / .- - .. ..-. -.-.-- translate to HELLO, MY NAME IS ATIF! ', () => {
  let string;
  string = ".... . .-.. .-.. --- --..-- / -- -.-- / -. .- -- . / .. ... / .- - .. ..-. -.-.--";
  let result = translateToMorse(string);
  expect(result).toBe("HELLO, MY NAME IS ATIF!")
});

it('..--- ...-- ....- translate to 234', () => {
  let string;
  string = "..--- ...-- ....-";
  let result = translateToMorse(string);
  expect(result).toBe("234")
});

it("-- -.-- / ..-. .- ...- / -. ..- -- -... . .-. / .. ... --..-- / ..--- ----. ---.. .-.-.- should translate to MY FAV NUMBER IS, 298. ", ()=> {
  let string;
  string = "-- -.-- / ..-. .- ...- / -. ..- -- -... . .-. / .. ... --..-- / ..--- ----. ---.. .-.-.-";
  let result = translateToMorse(string);
  expect(result).toBe("MY FAV NUMBER IS, 298.");
});

})

// What should translateToMorse function actually be able to do?
// - Recieve letters and translate those letters to morse code
// - Take into cocnsideration spaces between words and translate these accordingly
// - Numbers
// - Symbols
// Should we have a translateToEnglish translate?
