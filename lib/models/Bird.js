const pool = require('../utils/pool');

module.exports = class Bird {

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.size = row.size;
    this.location = row.location;
    this.migratory = row.migratory;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM birds');
    return rows.map((row) => new Bird(row));
  }

  static async getSingle(id) {
    const { rows } = await pool.query('SELECT * FROM birds WHERE id=$1', [id]);
    if (!rows[0]) return null;

    return new Bird(rows[0]);
  }


};
