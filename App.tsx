import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'

//From validation
import * as Yup from "yup"

const PasswordSchema = Yup.object().shape({
  passwordLength : Yup.number()
  .min(4,"Should be min of 4 characters")
  .max(16,"Should be max of 16 characters")
  .required("Length is required")
})

export class App extends Component {
  render() {

    const [password, setPassword] = useState("")
    const [isPassGenerated, setIsPassGenerated] = useState(false)
    const [lowerCase, setLowerCase] = useState(true)
    const [upperCase, setUpperCase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [sumbols, setSumbols] = useState(false)

    const generatePasswordString = (passwordLength : number) => {
      let charactersList = "";
      const upperCaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
      const lowerCaseChars = "qwertyuiopasdfghjklzxcvbnm";
      const digitChars = "0123456789";
      const specialChars = "!@#$%^&*()_+";

      if(upperCase) {
        charactersList  += upperCase;
      }
      if(lowerCase) {
        charactersList  += lowerCase;
      }
      if(numbers) {
        charactersList  += numbers;
      }
      if(sumbols) {
        charactersList  += sumbols;
      }

      const passwordResult = createPassword(charactersList,passwordLength);
      setPassword(passwordResult);
      setIsPassGenerated(true);

    }

    const createPassword = (characters : string, passwordLength : number) =>{
      let result = "";
      for (let i = 0; i < passwordLength; i++) {
        const characterIndex = Math.round(Math.random() * characters.length);
        result += characters.charAt(characterIndex);
      }
      return result;
    }

    const resetPasswordState = () => {
      setPassword("");
      setIsPassGenerated(false);
      setLowerCase(true);
      setUpperCase(false);
      setNumbers(false);
      setSumbols(false);
    }

    return (
      <View>
        <Text>App</Text>
      </View>
    )
  }
}

export default App
//=> 24 (25 по порядку)