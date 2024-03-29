---
title: Contacto
---

Código html para crear una página de contacto. Este formulario funciona con la tecnología de **formspree**. 


## Código

Crea un formulario en [formspree.io](https://formspree.io) y obtén el identificador. Luego pega el código en una página estática reemplazando `#YourID` por el identificador único de tu formulario. También reemplaza `#URL_PRIVACY_POLICY` por la URL de tu política de datos.

```html	
<form action="https://formspree.icon/f/#YourID" method="POST">
<!-- Sección -->
<div class="form-section">
  <label class="form-label">Nombre completo</label>
  <input class="form-control" type="text" name="name" required>
</div>

<!-- Sección -->
<div class="form-section">
  <label class="form-label">Correo electrónico</label>
  <input class="form-control" type="email" name="email" required>
</div>

<!-- Sección -->
<div class="form-section">
  <label class="form-label">Motivo del mensaje</label>
  <input class="form-control" type="text" name="subject" required>
</div>

<!-- Sección -->
<div class="form-section">
  <label class="form-label">Contenido del mensaje</label>
  <textarea class="form-control form-big" name="Message" required></textarea>
</div>

<!-- Sección -->
<div class="form-section">
  <label class="form-label">Política de datos</label>
  <div class="form-check">
    <input type="checkbox" name="RPGD" value="Acepté la política de datos" id="RPGD" required>
    <label for="RPGD">
      He leído y acepto la <a href="#URL_PRIVACY_POLICY">política de datos</a>
    </label>
  </div>
</div>

<!-- Sección -->
<div class="form-section">
  <button class="btn btn-outline" type="submit">
    <i data-i="paper-plane"></i> Enviar mensaje
  </button>
</div>
</form>
```

## Personalizar

Puedes agregar más secciones al formulario pero cada dato recopilado del usuario deberás agregarlo a tu **política de datos**. A continuación se proporciona mas secciones de ejemplo:

### Texto corto

Permite al usuario agregar información que cabe en una sola linea.

```html
<!-- Sección -->
<div class="form-section">
  <label class="form-label">Nombre completo</label>
  <input class="form-control" type="text" name="NAME_ÚNICO">
</div>
```

### Texto largo

Un campo de texto largo permite al usuario escribir mas texto que con un campo corto.

```html
<!-- Sección -->
<div class="form-section">
  <label class="form-label">Nombre de esta sección</label>
  <textarea class="form-control form-big" name="NAME_ÚNICO"></textarea>
</div>
```

### Marcadores multiples

En el caso de marcadores multiples, el campo `NAME_ÚNICO` debe ser igual en todas las opciones, de lo contrario los valores recogidos no tendrán relación.

```html
<!-- Sección -->
<div class="form-section">
  <label class="form-label">Nombre de esta sección</label>
  <!-- opción -->
  <div class="form-check">
    <input type="checkbox" name="NAME_ÚNICO" value="OPCIÓN_1" id="ID_UNICO_1">
    <label for="ID_UNICO_1">Nombre de esta opción</label>
  </div>

  <!-- opción -->
  <div class="form-check">
    <input type="checkbox" name="NAME_ÚNICO" value="OPCIÓN_2" id="ID_UNICO_2">
    <label for="ID_UNICO_2">Nombre de esta opción</label>
  </div>
</div>
```

### Marcadores únicos

Del mismo modo que los marcadores anteriores, el campo `NAME_ÚNICO` debe ser igual en todas las opciones, de lo contrario los valores recogidos no tendrán relación.

```html
<!-- Sección -->
<div class="form-section">
  <label class="form-label">Nombre de esta sección</label>
  <!-- opción -->
  <div class="form-check">
    <input type="radio" name="NAME_ÚNICO" value="OPCIÓN_1" id="ID_UNICO_1">
    <label for="ID_UNICO_1">Nombre de esta opción</label>
  </div>

  <!-- opción -->
  <div class="form-check">
    <input type="radio" name="NAME_ÚNICO" value="OPCIÓN_2" id="ID_UNICO_2">
    <label for="ID_UNICO_2">Nombre de esta opción</label>
  </div>
</div>
```

{{< pagelink title="Formularios de formspree" name="Crea un formulario y obtén el identificador único" href="https://www.zkreations.com/p/faq.html#formularios-de-formspree" >}}
