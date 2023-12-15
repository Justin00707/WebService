const sequelize = require('../config/databaseForTest.js');

describe('Database Connectivity', () => {
  it('should connect to the database successfully', async () => {
    try {
      await sequelize.authenticate();
      expect(true).toBe(true); // If authentication succeeds, this line will be executed.
    } catch (error) {
      // If there's an error during authentication, this block will catch it.
      console.error('Failed to connect to the database:', error);
      expect(error).toBeUndefined(); // This will fail the test if there's an error.
    }
  });

  afterAll(async () => {
    try {
      await sequelize.close(); // Close the Sequelize connection
    } catch (error) {
      console.error('Failed to close the database connection:', error);
    }
  });
});
