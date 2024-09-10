package main

/////////////////////// Palindromo(Palabra que se lee igual al derecho y al reves)//////////////////////////////

import (
	"fmt"
	"strings"
)

func isPalindromo(text string) {

	var palabraInvertida string
	var textLowerCase string
	textLowerCase = strings.ToLower(text)
	textLowerCase = strings.ReplaceAll(textLowerCase, " ", "")

	for i := len(textLowerCase) - 1; i >= 0; i-- {
		palabraInvertida += string(textLowerCase[i])
	}
	if palabraInvertida == textLowerCase {
		fmt.Println("Es palindromo")
	} else {
		fmt.Println("No es palindromo")
	}

}

func main() {
	isPalindromo("Anita lava la tina")
}
