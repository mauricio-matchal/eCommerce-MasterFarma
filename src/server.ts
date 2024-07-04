import { configDotenv } from "dotenv"
import express, { Request, Response } from "express"

configDotenv()

const app = express()
const port = 3000

app.get('/teste', (req: Request, res: Response) => {
    console.log(req.params)
    res.send({
        teste:'Hello World!'
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
