import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import customersRoutes from './routes/customers.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

app.set('port', process.env.PORT || 5000)
app.set('pkg', pkg)
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        Project: app.get('pkg').name,
        Autor: app.get('pkg').autor,
        Description: app.get('pkg').description,
        Version: app.get('pkg').version
    })
})

app.use('/api/customers', customersRoutes)
app.use('/api/auth', authRoutes)
app.get('*', (req, res) => { res.status(404).send('What happened?') })

export default app