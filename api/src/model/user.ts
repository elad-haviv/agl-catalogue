// create mongoose schema

import { Schema, model } from "mongoose";

enum UserRole {
    Viewer = "viewer",
    Buyer = "buyer",
    Admin = "admin",
    Provider = "provider",
}

interface IUser {
    username: string;
    email: string;
    role: UserRole;
    authentication: {
        password: string;
        salt: string;
        sessionToken?: string;
    };
}

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true, enum: Object.values(UserRole) },
    authentication: {
        password: { type: String, required: true },
        salt: { type: String, required: true },
        sessionToken: { type: String, required: false },
    }
});

export const User = model("User", userSchema);

export const getUsers = async () => {
    return User.find();
};

export const getUserByEmail = (email: string) => User.findOne({ email });

export const getUserBySessionToken = (sessionToken: string) =>
    User.findOne({
        "authentication.sessionToken": sessionToken,
    });

export const getUserById = (id: string) => User.findById(id);

export const createUser = (values: Record<string, any>) =>
    new User(values).save().then((user) => user.toObject());

export const deleteUser = (id: string) => User.findByIdAndDelete(id);

export const updateUser = (id: string, values: Record<string, any>) => {
    return User.findByIdAndUpdate(id, values, { new: true });
};
