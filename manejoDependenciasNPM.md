# Curso de Gestión de Dependencias y Paquetes con NPM

Por: **Oscar Barajas Tavares**

## Introducción a NPM

### 1. Acerca de NPM, paquetes y módulos

#### Que es NPM

- NPM es el manejador de paquetes de Node.js. 
- Creado en 2009 como Open Source Project, para ayudar a los desarrolladores a compartir paquetes de módulos de código.
- Es una colección publica de paquetes open-source para Node.JS, front-end web apps, aplicaciones móbiles, robots, routers y otras incontables necesidades de la comunidad JavaScript.
- Es un cliente de línea de comandos que permite a desarrolladores instalar y publicar paquetes.

#### Información oficial

[npm Docs](https://docs.npmjs.com/)

## Instalación

### 2. Windows

1. Descargar e instalar **Node.JS** descargado desde su página oficial

2. NPM se instala junto con node.js

3. ```bash
   node -v #ver la version de node
   ```

4. ```bash
   npm -v #ver la version de npm
   ```

#### Actualizar npm desde cónsola

```bash
npm install -g npm@latest #instalar actualización de npm
```

### 3. Mac

1. Descargar Node.js e instalar (ver la versión `node -v`)
2. NPM viene incluido en node.js (ver versión `npm -v`)

#### Actualizar versión

```bash
sudo npm install npm@latest -g
```

## Configuración

### 4. Iniciar un proyecto

Siempre al inicial un proyecto se debe crear un repositorio con GIT e inicializar el proyecto con NPM.

- `git init`, inicializa el repositorio de GIT local
- `npm init`, crea el archivo ***package.json***, se debe ingresar la configuración
- `npm init -y` o `npm init -yes`, crea package.json modo rápido (configuración mínima)

Para la creación rápida de ***package.json*** se puede establecer algunos valores por defecto.

```bash
npm set init.author.email 'myemail@mail.com' #set author email
npm set init.author.name 'Peter Perez' #set author name
npm set init.license 'MIT'
```

Luego de establecer los parámetros se puede inicializar con `npm init -y`, y se generará el archivo ***package.json*** con los valores predefinidos.

### 5. Instalación de dependencias

- La instalación de una dependencia se debe hacer en la carpeta raíz, usar comando `pwd` para ver el sistema de carpetas.
- `npm install <package-name>`, instala el paquete indicado
- Flag `--save`, nos indica que el paquete es necesario en producción
- Flag `--save-dev`, indica que el paquete solo es necesario en el entorno de desarrollo local.
- `npm install <package-name> --save-dev`, instalar un paquete solo para entorno de desarrollo local.

#### Instalación de paquete para producción

Instalar **moment** con npm:

```bash
npm install moment
#Por defecto se establece con el flag save (para producción)

#Este comando se puede simplificar
npm i moment -S
#i es install
#-S es --save
```

Cuando se instala el primer paquete se crea el directorio **node_modules** y el archivo **package-lock.json**

#### Ignorar archivos o carpetas

Para ignorar carpetas, como la carpeta **node_modules**, la cual no debe enviarse al repositorio, se debe crear el archivo `.gitignore`, donde se indica que carpetas o archivos no deben tomarse en cuenta en el repositorio de GIT

```tex
#.gitignore
node_modules/
```

___

#### Instalación en solo para desarrollo local

Este documento que vamos a instalar solo es necesario en nuestro entorno local o en el de desarrollo. Es importante no mandar dependencias a producción ni omitir algunas que deban de estar en producción.

```bash
npm install date-fns --save-dev #Instalación date-fns solo para entorno de desarrollo
# Este código se puede simplificar
npm i date-fns -D
#i es install
#-D es --save-dev
```

---

#### Instalación de paquete de manera global

Instalando nodemon de forma global, es decir para que esté disponible para otros proyectos y no solo para este entorno de desarrollo.

```bash
npm install -g nodemon #-g quiere decir global
```

#### Instalación de un paquete opcional

Son las dependencias que aportan algo extra al proyecto pero que no son necesarias para que el proyecto funcione. Por lo que si su instalación falla por cualquier motivo el proyecto es totalmente funcional.

Por ejemplo para instalar *eslint* de manera opcional

```bash
npm install eslint -O
#-O es optional (O mayuscula)
```

#### Buscar paquetes instalados

Buscar paquetes instalados de manera global

```bash
npm list -g --depth 0
#-g es global
#depth es profundidad, 0 indica todos los paquetes
```

Este comando muestra la lista de paquetes instalados de manera global.

### 6. Instalación de dependencias con force

### 7. Actualizar y eliminar paquetes

### 8. Package lock y el uso de simbolos ^ y ~

### 9. Ejecutar tareas

### 10. Solución de problemas

### 11. Seguridad

## Publicar un paquete

### 12. Crear un paquete para NPM

### 13. Publicar un paquete en NPM

### 14. Paquetes privados

### 15. Cierre del curso