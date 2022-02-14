import mongoose from 'mongoose'

const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URL, {
  ssl: true,
  sslValidate: true,
  // sslCA: `${__dirname}/rootCA.pem`
});

db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})
