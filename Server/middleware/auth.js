import jwt from "jsonwebtoken";

export const userAuth = async (req, res, next) => {
    try {
        let token;

        // 1. Authorization header
        if (req.headers?.authorization?.startsWith("Bearer ")) {
            token = req.headers.authorization.split(" ")[1];
        }
        // 2. Custom header
        else if (req.headers?.token) {
            token = req.headers.token;
        }
        // 3. Body
        else if (req.body?.token) {
            token = req.body.token;
        }
        // 4. Query Params
        else if (req.query?.token) {
            token = req.query.token;
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing, please login again",
            });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded?.userId && !decoded?.id) {
            return res.status(401).json({
                success: false,
                message: "Invalid token, please login again",
            });
        }

        // Attach userId (handle both id/userId cases)
        req.userId = decoded.userId || decoded.id;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message || "Not authorized",
        });
    }
};
