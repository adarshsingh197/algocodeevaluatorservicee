import { Request, Response } from "express";

console.log("helkl")
export const pingCheck = (_: Request, res: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    console.log("hello");

    return res.status(200).json({
        message: "Ping check ok"
    });
};
