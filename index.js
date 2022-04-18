const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users.routes.js');
const notFoundMiddleware = require('./middleware/not-found.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('React&Node Challenge');
});
app.use('/api/users', usersRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
