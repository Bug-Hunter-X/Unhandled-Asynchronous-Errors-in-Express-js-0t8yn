const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    // Asynchronous operation that might throw an error
    const result = await doSomethingAsync();
    res.send(result);
  } catch (error) {
    // Proper error handling
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function doSomethingAsync() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Operation successful';
} 