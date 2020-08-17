//Function: Test regular expressions
//Description: Ensure regular expressions give correct response in common use cases.
//Inputs: EmailReg,PassReg,IDReg,UIDREG
//Outputs: regex.test.suite

const regex = require('../../components/Sub-Comps/GenericComps/Regex');

test('That a valid .co.uk email returns true', () => {
    expect(regex.EmailReg.test("wightmad@aston.ac.uk")).toBe(false);
  });
  test('That a valid .com email returns true', () => {
    expect(regex.EmailReg.test("wightmad@aston.com")).toBe("banana");
  });
  test('That an invalid email returns false no @', () => {
    expect(regex.EmailReg.test("wightmadaston.ac.uk")).toBe(false);
  });
  test('That a valid email returns true with custom finisher', () => {
    expect(regex.EmailReg.test("wightmad@aston.intel.Ind.Ltd")).toBe(true);
  });
  test('That a valid email returns false illegal character exception', () => {
    expect(regex.EmailReg.test("<>!£$&*()_)(&^%&^&)wightmad@aston.ac.uk")).toBe(false);
  });
  test('That a valid password returns true', () => {
    expect(regex.PassReg.test("Password11")).toBe(true);
  });
  test('a password with no capital letters returns false', () => {
    expect(regex.PassReg.test("password11")).toBe(false);
  });
  test('a password with no numbers returns false', () => {
    expect(regex.PassReg.test("password")).toBe(false);
  });
  test('a password with only one number one upper,one lower,returns false', () => {
    expect(regex.PassReg.test("Ps1")).toBe(false);
  });  
  test('That a valid ID returns true', () => {
    expect(regex.IDReg.test("DavidWightman")).toBe(true);
  });
  test('ID with only lower case alphanumeric returns true', () => {
    expect(regex.IDReg.test("davidwightman")).toBe(true);
  });
  test('ID with only uppercase alphanumeric returns true', () => {
    expect(regex.IDReg.test("DAVIDWIGHTMAN")).toBe(true);
  });
  test('ID with only numbers returns true', () => {
    expect(regex.IDReg.test("0800001066")).toBe(true);
  });
  test('ID with illegal characters returns false regardless', () => {
    expect(regex.IDReg.test("<>!£$&*()_)(&^%&^&)David>!£$&*()_wightman")).toBe(false);
  });
  test('A valid user ID returns true', () => {
    expect(regex.UIDREG.test("3302")).toBe(true);
  });
  test('A UID with letters will return false', () => {
    expect(regex.UIDREG.test("MyUID")).toBe(false);
  });
  test('A UID of mixed components will return false', () => {
    expect(regex.UIDREG.test("3302istheUID")).toBe(false);
  });
