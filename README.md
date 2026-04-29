# 202612-MISW-4104-Evaluacion-Practica-Angular-

Aplicación web desarrollada en Angular como parte de la evaluación práctica del curso MISW4104.

## Requisitos previos

- Node.js v20 o superior
- Angular CLI v21 o superior
- npm v10 o superior

## Instalación

1. Descomprime el archivo `.zip` descargado.

2. Entra a la carpeta del proyecto:
```bash
   cd parcial
```

3. Instala las dependencias:
```bash
   npm install
```

## Ejecución

Para correr la aplicación en modo desarrollo:

```bash
ng serve
```

Abre el navegador en `http://localhost:4200`.

## Pruebas

Para ejecutar las pruebas unitarias:

```bash
ng test --browsers=ChromeHeadless
```

## Funcionalidades

- Listado de usuarios con vista de detalle por componente.
- Listado de repositorios con navegación a la vista de detalle por URL.
- Vista de detalle de repositorio con información del owner.
- Navegación entre módulos mediante routing de Angular.
