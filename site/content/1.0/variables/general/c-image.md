---
title: c.image
---

Establece la imagen por defecto cuando no hay imágenes en el articulo. **No se utiliza para la vista previa de los artículos sin imágenes** compartidos en redes sociales.

```xml
<Variable name="c.image" description="c.image" type="string" value=""/>
```

## Valores disponibles

Cualquier valor ingresado será interpretado como una URL de imagen.

{{< table >}}
| Value         | Nombre        | Tipo                 | Descripción
| ------------- | ------------- | ---------------------| --------------
| `image.jpg`   | Sin imagen    | {{< data image >}}   | Imagen por defecto
{{< /table >}}


## image.jpg

Se utiliza como imagen por defecto cuando no hay imágenes en el articulo. Si el valor ingresado está vacío, se usará los estilos sin imagen del tema.
