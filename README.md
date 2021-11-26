# Colour console log

Console log personalizado. Podrá mostrar mensajes de consola en navegadores como Firefox o Google Chrome con color de fondo personalizado.

## Instrucciones de uso

### Instalación

Instalar el paquete

```
npm install colour-console-log
``` 

### Importación

Puede incluir las funciones disponibles en un objeto
```
const log = require('colour-console-log');

// Ejemplo de uso
log.success("Update successful");
```

Puede importar las funciones que necesite de forma desesctructurada
```
import { success, error, warning } from 'colour-console-log';

//Ejemplo de uso
warning("The user will be deleted!");
```

## Docs

Las funciones disponibles son:

- **success**
- **error**
- **info**
- **warning**
- **custom**

El uso de las funciones *success*, *error*, *info* y *warning* es muy sencillo. Tan sólo reciben como parámetro un *string* que mostrarán con el color de fondo predefinido

Ejemplo:
```
log.info("Testing log");
```

El uso de custom admite un segundo parámetro para indicar el color CSS que será aplicado al fondo del mensaje por consola.

Ejemplo:
```
log.custom("My custom log", "#333333");
```