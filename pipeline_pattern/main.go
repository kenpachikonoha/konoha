package main

import (
	"fmt"
	"image"
	"image/color"
	"image/png"
	_ "image/png"
	"log"
	"math/rand"
	"os"

	"github.com/nfnt/resize"
)

func main() {
	var ruta = []string{
		"images/1338290.png",
	}

	readImage := read(ruta)

	resizeImage := resizeImg(readImage)

	grayImage := Grey(resizeImage)

	writeImage := Write(grayImage)

	for range writeImage {

		fmt.Println("Imagen Creada!")
	}

}

func read(file []string) <-chan image.Image {
	out := make(chan image.Image)
	go func() {
		for _, v := range file {
			reader, err := os.Open(v)
			if err != nil {
				log.Fatal(err)
			}
			image, _, err := image.Decode(reader)
			if err != nil {
				log.Fatal(err)
			}

			out <- image
			defer reader.Close()
		}
		defer close(out)

	}()

	return out

}

func resizeImg(in <-chan image.Image) <-chan image.Image {
	out := make(chan image.Image)

	go func() {
		for v := range in {
			img := resize.Resize(750, 500, v, resize.Lanczos3)
			out <- img

		}
		defer close(out)
	}()

	return out

}

func Grey(in <-chan image.Image) <-chan image.Image {
	out := make(chan image.Image)

	go func() {
		for v := range in {
			grayColor := ChangeColor(v)
			out <- grayColor
		}

		close(out)

	}()

	return out

}

func ChangeColor(img image.Image) image.Image {
	bounds := img.Bounds()
	grayImg := image.NewGray(bounds)

	// Convert each pixel to grayscale
	for y := bounds.Min.Y; y < bounds.Max.Y; y++ {
		for x := bounds.Min.X; x < bounds.Max.X; x++ {
			originalPixel := img.At(x, y)
			grayPixel := color.GrayModel.Convert(originalPixel)
			grayImg.Set(x, y, grayPixel)
		}
	}
	return grayImg
}

func Write(in <-chan image.Image) <-chan image.Image {
	out := make(chan image.Image)

	go func() {
		for v := range in {
			nameImg := rand.Intn(1009762)
			newName := fmt.Sprintf("./new_images/%v.png", nameImg)

			file, err := os.Create(newName)
			if err != nil {
				log.Fatal(err)
			}

			err = png.Encode(file, v)
			if err != nil {
				log.Fatal(err)
			}

			out <- v
		}
		defer close(out)

	}()

	return out

}
