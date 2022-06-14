export default function(req, res, next){
    if (req.user) {
        next()
    } else {
        res.status(404).send("No se ha autenticado")
    }
  }