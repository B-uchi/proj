import { getAuth } from "firebase-admin/auth";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) return res.status(403).send({ message: "Access Denied" });

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    await getAuth()
      .verifyIdToken(token)
      .then(async (decodedToken) => {
        const uid = decodedToken.uid;
        req.uid = uid;
      });
    
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
