import app from './app'
import './database'

app.listen(app.get('port'), () => {
    console.log(`Server live on port ${app.get('port')}.`)
});