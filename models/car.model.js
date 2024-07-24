// models/car.js

import { Model, DataTypes } from 'sequelize';
import ParkingLot from './parking_lot.model';

class Car extends Model {
  static init(sequelize) {
    return super.init({
      make: DataTypes.STRING,
      model: DataTypes.STRING,
      color: DataTypes.STRING,
      number: DataTypes.STRING,unique:true,
      year: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    }, {
      sequelize,
      modelName: 'Car',
      tableName: 'Cars', 
    });
    
  }
  static associate(models) {
    this.hasMany(models.ParkingLot, { foreignKey: 'carId', as: 'parkingLots' });
  }
}

export default Car;
