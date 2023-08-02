from PIL import Image

def convert_non_empty_pixels_to_black(input_path, output_path):
    try:
        # Abrir la imagen dada la ruta proporcionada
        image = Image.open(input_path)

        # Convertir la imagen a modo "RGBA" para asegurarnos de que tenga un canal alfa
        image = image.convert('RGBA')

        # Obtener los píxeles de la imagen
        pixels = image.load()

        # Obtener las dimensiones de la imagen
        width, height = image.size

        # Recorrer cada píxel de la imagen
        for y in range(height):
            for x in range(width):
                # Obtener el valor del canal alfa (transparencia) del píxel
                alpha = pixels[x, y][3]

                # Si el canal alfa es diferente de 0 (es decir, el píxel no es transparente),
                # convertimos el píxel a color negro (RGBA: 0, 0, 0, 255)
                if alpha != 0:
                    pixels[x, y] = (0, 0, 0, 255)

        # Guardar la imagen resultante en formato PNG
        image.save(output_path, "PNG")

        print("La imagen con los píxeles no vacíos convertidos a color negro se ha guardado exitosamente.")

    except Exception as e:
        print(f"Ocurrió un error: {e}")

# Ejemplo de uso:
ruta_imagen = "udec_logo.png"  # Reemplaza con la ruta de tu imagen
ruta_imagen_resultante = "imagen_pixeles_no_vacios_a_negro.png"  # Ruta donde se guardará la imagen resultante

convert_non_empty_pixels_to_black(ruta_imagen, ruta_imagen_resultante)

