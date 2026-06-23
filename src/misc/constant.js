const PORT = process.env.PORT || 4000;

const DATABASE = process.env.DATABASE_URL;

const SECRET = process.env.JWT_SECRET


export default{
    SECRET,
    PORT
}