import React from 'react';
import '../App.css';    

function IsBadKey(key, keyIndex, keyChar)
{
    while (!/[a-zA-Z]/.test(keyChar))
    {
        if (!key)
        {
            // console.log("Key must be letters only");
            return true;
        }
        if (keyIndex === 0)
        {
            key = key.slice(1);
        }
        if (keyIndex === key.length - 1)
        {
            key = key.slice(0, -1);
        }
        key = key.slice(0, keyIndex) + key.slice(keyIndex + 1);
        keyChar = key[keyIndex];
    }
    return false;
}
function isWhitespace(text) 
{
    let trim = text.trim();
    return trim === null || trim.length === 0;
}

function decryptVigenere(cipher, key) 
{
    const LOWERCASE_INDEX = 'a'.charCodeAt(0);
    // console.log("Enter text to decrypt (cipher):");
    if (!cipher || isWhitespace(cipher) || !key || key === '' || isWhitespace(key))
    {
        return;
    }
    let text = [];

    cipher = cipher.toLowerCase();
    key = key.toLowerCase().trim();
    for (let cipherIndex = 0, keyIndex = 0; cipherIndex < cipher.length; cipherIndex++)
    {
        let cipherChar = cipher[cipherIndex];

        if (!/[a-z]/i.test(cipherChar))
        {
            text.push(cipherChar);
            continue;
        }
        let keyChar = key[keyIndex];

        if (IsBadKey(key, keyIndex, keyChar) || !key)
        {
            // console.error("Key must be letters only");
            return;
        }
        let shift = cipherChar.charCodeAt(0) - keyChar.charCodeAt(0);

        keyIndex = (keyIndex + 1) % key.length;
        text.push(String.fromCharCode((((shift < 0 ? 26 : 0) + shift) % 26) + LOWERCASE_INDEX));
    }
    return text.join("");
    // console.log(`${buildTabulaRecta(keyed)}\nPlain text:\n${text.toString()}`);
}

function encryptVigenere(text, key) {
    const LOWERC_INDEX = 'a'.charCodeAt(0);
    // console.log("Enter text to encrypt:");
    if (!text || isWhitespace(text))
    {
        //  console.log("Invalid text"); 
         return;
    }
    // console.log("\nEnter keyword:");
    if (!key || isWhitespace(key))
    {
        // console.log("Key must be letters only"); 
        return;
    }
    var cipher = [];

    text = text.toLowerCase();
    key = key.toLowerCase().trim();
    for (let textIndex = 0, keyIndex = 0; textIndex < text.length; textIndex++)
    {
        let textChar = text[textIndex];
        let keyChar = key[keyIndex];

        if (!/^[a-zA-Z]$/.test(textChar))
        {
            cipher.push(textChar);
            continue;
        }
        if (IsBadKey(key, keyIndex, keyChar) || !key)
        {
            // console.log("Key must be letters only");
            return;
        }
        let shiftText = textChar.charCodeAt(0) - LOWERC_INDEX;
        let shiftKey = keyChar.charCodeAt(0) - LOWERC_INDEX;
        
        keyIndex = (keyIndex + 1) % key.length;
        cipher.push( String.fromCharCode(((shiftKey + shiftText) % 26) + LOWERC_INDEX) );
    }
    // console.log(`${BuildTabulaRecta(keyed)}\nCipher text:\n${cipher.join("")}\n`);
    return cipher.join("");
}

function on_press_decrypt() {
  const cipher = document.querySelector('textarea[name="cipher"]').value;
  const key = document.querySelector('textarea[name="key"]').value;
  
  document.querySelector('textarea[name="plain"]').value = decryptVigenere(cipher, key);
}
function on_press_encrypt() {
  const plain = document.querySelector('textarea[name="plain"]').value;
  const key = document.querySelector('textarea[name="key"]').value;
  
  document.querySelector('textarea[name="cipher"]').value = encryptVigenere(plain, key);
}

function Fun() {
    return (
    <>
      <h1>Secret</h1>
      <p id = "Next">
          Here's a 
          <a href= "https://billwurtz.com/" target="_blank"> link </a>
        to a cool artist. You can even drop him a 
        <a href= "https://billwurtz.com/questions/questions.html" target="_blank"> question </a>
        if you like. Maybe once I get the hang of web development I would do something similar...
      </p>
      <p>vignere cipher!</p>
      <p>plain text</p>
      <textarea rows="7" cols="47" maxLength="10000" name="plain"></textarea>
      <br></br>
      <input type="button" onClick={on_press_encrypt} value="encrypt"></input>
      <br></br>
      <p>keyword:</p>
      <textarea rows="7" cols="47" maxLength="10000" name="key"></textarea>
      <br></br>
      <p>cipher text</p>
      <textarea rows="7" cols="47" maxLength="10000" name="cipher"></textarea>
      <br></br>
      <input type="button" onClick={on_press_decrypt} value="decrypt"></input>
    </>
  )
}

export default Fun
