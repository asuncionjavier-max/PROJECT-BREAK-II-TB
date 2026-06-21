export const errorHandler = (err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "algo ha salido mal";
    
    res.status(statusCode).json({
        ok: false,
        status: statusCode,
        message: errorMessage,
    })
}