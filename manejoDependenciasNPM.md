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

#### Ver el output de una instalación

A veces queremos obtener información de un paquete antes de instalar, este comando simula una instalación y devuelve el output (info), luego se puede decidir si se hace la instalación:

```bash
#Simula la instalación de react
npm install react --dry-run

#Con la información devuelta, decidimos si lo instalamos o no

#El paquete no se instalará, por lo que no aparece en package.json
```

#### Forzar la instalación de la última versión

Si queremos instalar la última versión de un paquete se debe usar el flag `-force` o `-f`

```bash
#Istalación de webpack ultima versión
npm install webpack -f
```

Cuando se hace este tipo de instalación, puede darse el caso de que el paquete instalado no se encuentre en la lista de dependencias correcta de **package.json**.

> Si se da este caso, siempre podemos editar el archivo y agregar el paquete manualmente, moviendo según el tipo de dependencia: **Producción**, **Desarrollo** u **Opcionales**.

Luego se debe correr el comando:

```bash
#Comando que revisa e instala todos los paquetes de package.json
npm install
```

`npm install` instala todas las dependencias que aparecen en el archivo ***package.json***

#### Instalar una versión específica

Puede darse el caso de que queramos instalar una versión antigua o específica de un paquete, en ese caso se debe usar el comando:

```bash
#Istalación de json-server versión 0.15.0
npm install json-server@0.15.0
```

### 7. Actualizar y eliminar paquetes

#### Ver los paquetes instalados en el proyecto

```bash
#Ver paquetes instalados
npm list

#Se puede usar profundidad depth para ver por niveles
npm list --depth=0
```

#### Ver versiones de un paquete

```bash
#Ver la ultima versión disponible de un paquete
npm v react version

#Ver todas las versiones disponibles
npm v react versions
```

#### Ver paquetes no actualizados

```bash
#Ver que paquete no esta actualizado
npm outdate
```

#### Ver lo que sucede cuando corremos un comando

Para esto se debe usar el flag `--dd`

```bash
npm outdate --dd
```

Se mostrará en consola, las peticiones que hace npm a los servidores.

#### Actualizar todos los paquetes

```bash
npm update
```

#### Actualizar un paquete específico a su ultima versión

```bash
npm install json-server@latest
```

#### Desinstalar un paquete

Para desinstalar un paquete se debe remover de la carpeta *node_modules* y del archivo *package.json*, se usa el comando:

```bash
npm uninstall json-server
```

#### Eliminar paquete de node_modules y no de package.json

```bash
#El paquete se mantiene en package.json
npm uninstall webpack --no-save
```

#### Comparar node_modules y package.json (extensión para VSC)

La extensión para Visual Studio Code: ***npm***, revisa y compara *package.json* con la carpeta *node_modules* para ver si hay algún paquete con problemas o no esta instalado.

### 8. Package lock y el uso de simbolos ^ y ~

#### Versionado

Las versiones de los paquetes se manejan generalmente con 3 dígitos:

- `x__`: primer dígito representa cambios mayores (breaking changes)
- `_x_`: segundo dígito cambios menores (compatibilidad, funcionabilidad, refactor)
- `__x`: tercer dígito parches o bug fixes

#### Manejo de versiones y actualizaciones en package.json

- Por defecto **package.json** no instalará versiones mayores, puesto que puede romper el código.
- **package-lock.json**, asegura o bloquea las dependencias. Muestra las dependencias y sub dependencias del proyecto.
- Si hay **package-lock.json**, se instalan exactamente las versiones que se encuentren en el mismo, de caso contrario se instalaran las versiones recientes según el uso de `^` o `~` en **package.json**

#### Versionado semántico

En **package.json** se puede indicar que tipo de actualización se debe realizar al correr algún comando de actualización como `npm update`, pueden haber cambios mayores, menores y de parches o bug fixes.

El tipo de actualización se indica en el archivo ***package.json***, sección dependencias:

```json
  "dependencies": {
    "moment": "^2.29.1"
  },
  "devDependencies": {
    "date-fns": "^2.28.0",
    "webpack": "^5.67.0"
  },
  "optionalDependencies": {
    "eslint": "^8.7.0"
  }
```

Los símbolos mas usados se pueden ver en la siguiente tabla:

| SIMBOLO                        | SIGNIFICADO                      | Ejemplo    |
| ------------------------------ | -------------------------------- | ---------- |
| `^` acento circunflejo (caret) | Only minor and bug fixes updates | `^0.15.0`  |
| `~` virgulilla                 | Only bug fixes updates           | `~0.15.0`  |
| `<`                            | Solo menor a la indicada         | `<2.15.8`  |
| `<=`                           | Menor o igual                    | `<=2.15.8` |
| `>`                            | mayor a la indicada              | `>10.2.4`  |
| `>=`                           | mayor o igual a indicada         | `>=10.2.4` |

> Si se quiere tener una versión exacta de un paquete, no se debe colocar símbolos para actualización en el *package.json*, solo indicar la versión `"0.15.0"`

### 9. Ejecutar tareas

Las **tareas** o **scripts** son comandos que podemos establecer y ejecutar desde la consola, y podemos crear los que necesitemos, además van a correr de forma nativa dentro de nuestra terminal, para nombrarlo debe ser un shortcut de lo que vamos a ejecutar con `npm run <script-name>`

Se pueden crear multiples scripts, los cuales van a depender del tipo de paquete que estamos utilizando, estos comandos van en la sección **scripts** de nuestro ***package.json***. Los comandos de cada paquete se le pueden encontrar en la documentación de los mismos.

```json
"scripts": {
	"build": "webpack --mode production",
	"start": "webpack-dev-server --open --mode development",
	"format": "prettier --write '{**.js,src/**/*.{js,jsx}}'"
	"lint": "eslint src/ --fix",
	//aqui podemos concatenar dos comandos
	"deploy": "npm run format && npm run build"
}
```

Para correr estos scripts usaremos lo siguiente:

```bash
npm run build #Para correr el script webpack --mode production
npm run start #Para correr webpack-dev-serve --open....
#Así para cada script que corramos
```

Los scripts se pueden concatenar o poner condiciones usando `&&` y `||`.

### 10. Solución de problemas

- Durante la ejecución de tareas podrían presentarse errores. La recomendación es que *se debe leer primero en que consiste el error*, y de acuerdo a esto se puede dar la solución adecuada.

- En consola se podría mostrar un *log* del error, en el cual podemos encontrar mas información, entonces podemos ver el archivo de log abriendo en un editor de texto como VSC: `code /users/username/_logs/file.log`
- Cada error va ser distinto.
- Para ver mas detalles de como se ejecuta un comando, se puede agregar el flag `--dd`. Se nos mostrará que tareas se realizan para obtener el resultado de un script.
- También se puede eliminar el cache del proyecto con: `npm cache clean --force`
- Para verificar el cache usar el comando: `npm cache verify`
- Si hay algún error en *node_modules/* se puede eliminar usando `rm -rf node_modules/` y luego correr `npm install` para instalar nuevamente los paquetes de *package.json*
- Un paquete que nos ayuda a eliminar de forma segura el **node_modules** es ***rimraf*** y lo podemos instalar globalmente con `npm install -g rimraf`
- Para eliminar de forma segura una carpeta usamos rimraf `rimraf node_modules`, luego podemos correr el comando `npm install` para instalar nuevamente los paquetes indicados en *package.json*.
- Se puede hacer lo mismo con *npm clean install*, es decir una instalación limpia o desde cero, para eso usamos el comando `npm ci`

### 11. Seguridad

Debemos asegurarnos que los paquetes instalados estén actualizados y no incluyan código malicioso al momento de desarrollar nuestros proyectos.

- Al momento de usar `npm install` se nos mostrará algunas advertencias sobre algunos paquetes desactualizados y que podrían dar problemas de seguridad.
- Para ver si algún paquete tiene cambios que puedan afectar nuestros proyectos podemos usar `npm audit`
- Para ver información mas detallada sobre este comando podemos usar: `npm audit json`, que creará un archivo `.json` con mas información.
- Para actualizar un paquete con error `npm update <package-name> --depth 2`, donde 2 indica la profundidad, es decir los sub-módulos del paquete.
- Para solucionar todos los errores de los paquetes usar `npm audit fix`, es el comando que se debería ejecutar primero, los paquetes que no se solucionen se puede hacer manualmente usando los otros métodos.

Un proyecto que ayuda a tener todo seguro es *snyk* que se puede encontrar en su web [snyk.io](snyk.io)

## Publicar un paquete

### 12. Crear un paquete para NPM

Para crear un paquete de NPM, proyecto de mensajes random al ejecutar un comando.

```BASH
#Primero crear una carpeta para el proyecto
mkdir random-messages

#Inicializar git
git init

#Inicializar con npm
npm init
```
La estructura del proyecto es la siguiente

```text
random-messages/
├── bin/
│   └── global.js
└── src/
│	└── index.js
└── package.json
```

Creamos *index.js* en la carpeta *src*:

```js
const messages = ["Oscar", "Ana", "Nikolai", "Diego", "Laura"]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.lenght)];
    console.log (message);
}

module.exports = { randomMsg };
```

En la carpeta *bin* creamos el archivo *global.js*:

```js
#!/usr/bin/env node
let random = require('../src/index.js');

random.randomMsg();
```

En nuestro archivo package.json definimos *bin* y *preferGlobal*:

```json
{
  "name": "random-mesagges",
  "version": "1.0.0",
  "description": "Random de mensajes",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "author name <author@email.com>",
  "license": "MIT",
  "bin": {
    "random-msg": "./bin/global.js"
  },
  "preferGlobal": true

}
```

### 13. Publicar un paquete en NPM



### 14. Paquetes privados



### 15. Cierre del curso