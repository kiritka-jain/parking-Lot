import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { fileURLToPath } from 'url';
import process from 'process';
import configFile from '../config/config.json' assert { type: 'json' };
import Car from './car.model';
import ParkingLot from './parking_lot.model';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');  // Adjust to get directory
const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = configFile[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const files = readdirSync(__dirname).filter(file => {
  return (
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.js' &&
    file.indexOf('.test.js') === -1
  );
});

for (const file of files) {
  const model = await import(join(__dirname, file));
  db[model.default.name] = model.default.init(sequelize, DataTypes);
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
