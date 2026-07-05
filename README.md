# 🛒 E-commerce API

Backend de un e-commerce construido con Node.js, preparado para ser consumido por un frontend en React.

Incluye autenticación, catálogo de productos, reviews, wishlist, carrito y checkout completo.

## Stack

- Node.js + Express
- PostgreSQL (Supabase) — usuarios, productos, carrito
- MongoDB (Atlas) — reviews, wishlist
- JWT para autenticación
- Swagger para documentación de la API
- Deploy en Render

## Instalación

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
npm install
```

Crea un archivo `.env` con:

```
DATABASE_URL=
MONGO_URI=
JWT_SECRET=
PORT=
```

Levanta el servidor:

```bash
npm run dev
```
## Usuario de prueba (admin)

Para probar los endpoints que requieren rol de administrador (crear/editar/eliminar productos), usa estas credenciales:

- **Email:** eladmin@eseladmin.com
- **Password:** administro

Para el resto de endpoints (carrito, reviews, wishlist), puedes registrar cualquier usuario nuevo con `POST /api/register`.

### Cómo probar con Swagger

1. Abre `/api/docs`
2. Ejecuta `POST /login` con las credenciales de arriba (o las de un usuario recién registrado)
3. Copia el `token` de la respuesta
4. Pulsa el botón **Authorize** (arriba a la derecha) y pégalo
5. Ya puedes ejecutar cualquier endpoint protegido desde la propia interfaz
## Documentación

Disponible en `/api/docs` (Swagger) una vez el servidor está corriendo.

## Demo

🔗 [API en producción](#) *((https://project-break-ii-tb.onrender.com/api/docs))*

---

Proyecto desarrollado durante el bootcamp Full Stack de [The Bridge](https://www.thebridge.tech/).
