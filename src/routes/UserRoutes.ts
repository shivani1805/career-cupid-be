import * as userController from "../users/UserController";
import { Router } from "express";

const router = Router();

router.post("/login", userController.login);
router.post("/confirm-email", userController.confirmEmail);
router.post("/register", userController.register);
router.put("/users/:userId", userController.updateUser);
router.delete("/users/:userId", userController.deleteUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:userId", userController.getUserById);
router.get("/user", userController.getMyUser);

export default router;
