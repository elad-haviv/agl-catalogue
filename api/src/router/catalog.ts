import express, { Router, Request, Response } from "express";

// import { getAllUsers, deleteUserById } from "../controllers/user";
// import { isAuthenticated, isUser } from "../middlewares";

export default function (router: Router) {
    item(router);
    product(router);
    contract(router);
    provider(router);

//    router.get("/users", isAuthenticated, getAllUsers);
//    router.delete("/:id", isAuthenticated, isUser, deleteUserById);
}

export function item(router: Router) {
    router.get("/items", /* middlewares, controller... */);
    router.get("/items/:id", /* middlewares, controller... */);
}

export function product(router: Router) {
    router.get("/products", /* middlewares, controller... */);
    router.get("/products/:id", /* middlewares, controller... */);
}

export function contract(router: Router) {
    router.get("/contracts", /* middlewares, controller... */);
    router.get("/contracts/:id", /* middlewares, controller... */);
    router.post("/contracts/:id/products", /* middlewares, controller... */);
}

export function provider(router: Router) {
    router.get("/providers", (req: Request, res: Response) => {

    });
}
