import { Sequelize } from "sequelize";

const sequelize = new Sequelize('socialsite', 'postgres', 'microsoft9696', {
    host: 'localhost',
    dialect: 'postgres'
  });

  const connectDB = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

export default sequelize;
export {connectDB};