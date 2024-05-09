import crypto from "crypto";

const SECRET = "agl-catalog-rest-api-secret";

export function generateSalt() : string {
    return crypto.randomBytes(128).toString("base64");
}

export function authentication(password : string, salt : string) {
    return crypto.createHmac("sha256", [password, salt].join(",")).update(SECRET).digest();
}