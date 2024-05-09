import express, { NextFunction, Request, Response } from "express";

import { getUserBySessionToken } from "../model/user";

declare module 'express-serve-static-core' {
    interface Request {
        identity: Record<string, any>;
    }
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    try {
        const sessionToken = req.cookies["AGL-CATALOG-AUTH"];
        if (!sessionToken) {
            return res.sendStatus(403);
        }

        const existingUser = getUserBySessionToken(sessionToken);
        if (!existingUser) {
            return res.sendStatus(403);
        }

        req.identity = existingUser;
        
        return next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export function isUser(req : Request, res: Response, next: NextFunction) {
    if (req.identity.role === "admin" || req.identity.id === req.params.id) {
        return next();
    }

    return res.sendStatus(403);
}   