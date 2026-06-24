const PORT = process.env.PORT || 4000;

const DATABASE = process.env.DATABASE_URL;

const SECRET = process.env.JWT_SECRET

const MONGODB_URI = process.env.MONGODB_URI

export default{
    SECRET,
    PORT,
    MONGODB_URI
}