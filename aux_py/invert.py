from PIL import Image

def invert_colors_and_save_black_pixels(input_path, output_path):
    try:
        # Abrir la imagen dada la ruta proporcionada
        image = Image.open(input_path)

        # Invertir los colores de la imagen
        inverted_image = Image.eval(image, lambda x: 255 - x)

        # Crear una imagen en blanco y negro manteniendo solo los pixeles negros
        black_pixels_only = inverted_image.convert("L")

        # Guardar la imagen resultante en formato PNG
        black_pixels_only.save(output_path, "PNG")

        print("La imagen con los pixeles negros se ha guardado exitosamente.")

    except Exception as e:
        print(f"Ocurrió un error: {e}")

# Ejemplo de uso:
ruta_imagen = "./003.jpg"  # Reemplaza con la ruta de tu imagen
ruta_imagen_resultante = "imagen_solo_pixeles_negros.png"  # Ruta donde se guardará la imagen resultante

invert_colors_and_save_black_pixels(ruta_imagen, ruta_imagen_resultante)