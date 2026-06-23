import express from "express";
import * as authController from "../controllers/auth.js"
import { authMiddleware } from "../middlewares/auth.js";
import { requireRole } from "../middlewares/requireRole.js";

const router = express.Router()

// Rutas Publicas
router.post("/register", authController.register)
router.post("/login", authController.login)
router.delete("/delete", authController.deleteUser)


// Rutas Privadas
router.get("/profile", authMiddleware, authController.getProfile)
router.post("/logout", authController.logout)

// Ruta Restringidas
router.get("/admin", authMiddleware, requireRole("admin"), authController.getAdmin)
export default router