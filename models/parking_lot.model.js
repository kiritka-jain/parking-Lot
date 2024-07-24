import { Model, DataTypes } from 'sequelize';
import Car from './car.model';

class ParkingLot extends Model{
    static init(sequelize) {
        return super.init({
            slot: DataTypes.INTEGER,
            carId: DataTypes.STRING,

    }),
    {
        sequelize, 
        modelName: 'ParkingLot',
        tableName: 'ParkingLots'
      },
    };
    static associate(models) {
        this.belongsTo(models.Car, { foreignKey: 'carId', as: 'car' });
      }
}

export default ParkingLot;