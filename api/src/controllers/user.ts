import express from "express";

import { deleteUser, getUsers } from "../model/user";

export const getAllUsers = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const users = await getUsers();
        return res.status(200).json(users).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const deleteUserById = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.sendStatus(400);
        }

        // Delete user by id
        deleteUser(id);
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}