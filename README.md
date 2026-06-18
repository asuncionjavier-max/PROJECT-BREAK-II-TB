# 🛒 E-commerce API

Backend de un e-commerce construido con Node.js, preparado para ser consumido por un frontend en React.

Incluye autenticación, catálogo de productos, reviews, wishlist, carrito y checkout completo.

## Stack

- Node.js + Express
- PostgreSQL (Supabase) — usuarios, productos, pedidos
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

## Documentación

Disponible en `/api/docs` (Swagger) una vez el servidor está corriendo.

## Demo

🔗 [API en producción](#) *(añadir URL cuando esté desplegado)*

---

Proyecto desarrollado durante el bootcamp Full Stack de [The Bridge](https://www.thebridge.tech/).
