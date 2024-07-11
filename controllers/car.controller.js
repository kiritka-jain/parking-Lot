// Example car controller

const carController = {
  getCarInfo: (req, res) => {
    res.send('Get all car information');
  },

  addCar: (req, res) => {
    res.send('Add a new car');
  },

  getCarById: (req, res) => {
    const carId = req.params.id;
    res.send(`Get car with ID: ${carId}`);
  },

  updateCar: (req, res) => {
    const carId = req.params.id;
    res.send(`Update car with ID: ${carId}`);
  },

  deleteCar: (req, res) => {
    const carId = req.params.id;
    res.send(`Delete car with ID: ${carId}`);
  }
};

export default carController;
