import express, { Router } from "express";

import { getAllUsers, deleteUserById } from "../controllers/user";
import { isAuthenticated, isUser } from "../middlewares";

export default function (router: Router) {
    router.get("/users", isAuthenticated, getAllUsers);
    router.delete("/:id", isAuthenticated, isUser, deleteUserById);
}
