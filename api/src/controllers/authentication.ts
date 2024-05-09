import express, { Request, Response } from "express";

import { createUser, getUserByEmail } from "../model/user";
import { authentication, generateSalt } from "../helpers/index";

export async function register(req: Request, res: Response) {
    console.log("user accessed register route with body: ", req.body);
    try {
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            return res.sendStatus(400);
        }

        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return res.sendStatus(400);
        }

        const salt = generateSalt();

        const user = createUser({
            email,
            username,
            authentication: {
                salt,
                password: authentication(password, salt),
            },
        });

        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.sendStatus(400);
        }

        const user = await getUserByEmail(email).select(
            "+authentication.salt +authentication.password"
        );
        if (!user) {
            return res.sendStatus(400);
        }

        const expectedHash = authentication(
            password,
            user.authentication.salt
        ).toString();

        if (expectedHash !== user.authentication.password) {
            return res.sendStatus(403);
        }

        const salt = generateSalt();
        user.authentication.sessionToken = authentication(
            user._id.toString(),
            salt
        ).toString();
        await user.save();

        res.cookie("AGL-CATALOG-AUTH", user.authentication.sessionToken, {
            domain: "localhost",
            path: "/",
        });

        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
