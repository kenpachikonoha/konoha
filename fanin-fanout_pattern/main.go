package main

import (
	"fmt"
	"math/rand"
	"os"
	"strings"
)

func ErrorCheck(err error) {
	if err != nil {
		fmt.Println(err)
	}
}

func main() {
	// GenerateFile()
	data1, data2, data3 := readData()

	data1Channel := Account(data1)
	data2Channel := Account(data2)
	data3Channel := Account(data3)

	final := dataTextSum(data1Channel, data2Channel, data3Channel)

	fmt.Println(final)

}

func dataTextSum(in1, in2, in3 <-chan map[string]int) map[string]int {
	out := map[string]int{
		"Toji":      0,
		"Shanks":    0,
		"Kempachi":  0,
		"Hashirama": 0,
	}

	toji1 := <-in1
	toji2 := <-in2
	toji3 := <-in3
	out["Toji"] = toji1["Toji"] + toji2["Toji"] + toji3["Toji"]
	out["Shanks"] = toji1["Shanks"] + toji2["Shanks"] + toji3["Shanks"]
	out["Kempachi"] = toji1["Kempachi"] + toji2["Kempachi"] + toji3["Kempachi"]
	out["Hashirama"] = toji1["Hashirama"] + toji2["Hashirama"] + toji3["Hashirama"]

	return out

}

func Account(data []string) <-chan map[string]int {
	out := make(chan map[string]int)

	go func() {

		toji := 0
		shanks := 0
		kempachi := 0
		hashirama := 0

		work := []string{"Toji", "Shanks", "Kempachi", "Hashirama"}

		for _, value := range data {
			if value == work[0] {
				toji++
			} else if value == work[1] {
				shanks++
			} else if value == work[2] {
				kempachi++
			} else {
				hashirama++
			}

		}

		dataReturn := map[string]int{
			"Toji":      toji,
			"Shanks":    shanks,
			"Kempachi":  kempachi,
			"Hashirama": hashirama,
		}

		out <- dataReturn

		defer close(out)

	}()

	return out

}

func readData() (data1, data2, data3 []string) {

	count, err := os.ReadFile("data.txt")
	ErrorCheck(err)
	value := len(count) / 3
	chunk1 := string(count[:value])
	chunk2 := string(count[value : value*2])
	chunk3 := string(count[value*2 : value*3])

	value1 := strings.Split(chunk1, ",")
	value2 := strings.Split(chunk2, ",")
	value3 := strings.Split(chunk3, ",")

	return value1, value2, value3
}

func GenerateFile() {
	newName := "data.txt"
	work := []string{"Toji,", "Shanks,", "Kempachi,", "Hashirama,"}

	file, err := os.Create(newName)
	ErrorCheck(err)

	for i := 0; i < 100000; i++ {
		os.Open(newName)
		_, err := file.WriteString(work[rand.Intn(len(work))])
		ErrorCheck(err)

	}

}
