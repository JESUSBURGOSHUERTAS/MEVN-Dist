import app from './app'
import { startConnection } from './database';
startConnection();
app.listen(3000)
console.log("Server puerto 3000");