# Formulario de Registro

Un formulario de registro web responsivo con validaciones en tiempo real, desarrollado con HTML5, CSS3 y JavaScript vanilla.

## Características

- Diseño responsivo y moderno con gradientes suaves
- Validación en tiempo real de campos
- Validación de formato de email
- Validación de longitud de contraseña (mínimo 8 caracteres)
- Efectos hover y focus interactivos
- Compatible con dispositivos móviles

## Estructura del Proyecto

```
proyecto/
│
├── index.html          # Estructura HTML del formulario
├── style.css           # Estilos y diseño responsivo
├── script.js           # Validaciones y funcionalidad
└── README.md           # Este archivo
```

## Instalación
### Primer metodo
1. clonar el proyecto en tu local

### Segundo metodo
1. Descarga todos los archivos del proyecto
2. Coloca todos los archivos en la misma carpeta
3. Asegúrate de mantener los nombres de archivo exactos:
   - `index.html`
   - `style.css` 
   - `script.js`

## Ejecución

 Navegador Web
1. Abre el archivo `index.html` directamente en cualquier navegador web moderno
2. No se requiere servidor web para funcionalidad básica

## Funcionalidades

### Validaciones Implementadas

1. **Campo Nombre**:
   - No puede estar vacío
   - Mínimo 2 caracteres

2. **Campo Correo**:
   - No puede estar vacío  
   - Debe tener formato de email válido

3. **Campo Contraseña**:
   - No puede estar vacío
   - Mínimo 8 caracteres

### Validación en Tiempo Real
- Los campos se validan automáticamente al perder el foco
- Mensajes de error se muestran debajo de cada campo
- Validación completa al enviar el formulario

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y campos de formulario
- **CSS3**: Flexbox, gradientes, transiciones y responsive design
- **JavaScript ES6+**: Validaciones, manipulación del DOM y eventos
