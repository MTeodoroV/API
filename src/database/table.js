class Table {
    init(db) {
      this.db = db
      this.createGenre()
      this.createMovie()
      this.createSeries()
      this.createAccount()
      this.createWishList()
      this.createFavorites()
  
      console.log('Tabelas prontas!')
    }
  
    createMovie() {
      const sql = `CREATE TABLE IF NOT EXISTS movie (id INT(11) NOT NULL AUTO_INCREMENT,
        name VARCHAR(500) NOT NULL,
        add_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
        director VARCHAR(255) NOT NULL,
        year VARCHAR(10) NOT NULL,
        genre_id INT(11) NOT NULL,
        PRIMARY KEY (id),
        INDEX fk_movie_genre1_idx (genre_id ASC) VISIBLE,
        CONSTRAINT fk_movie_genre1
            FOREIGN KEY (genre_id)
            REFERENCES genre (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION);`
  
      this.createTable(sql)
    }
  
    createSeries() {
      const sql = `CREATE TABLE IF NOT EXISTS series (
        id INT(11) NOT NULL AUTO_INCREMENT,
        name VARCHAR(500) NOT NULL,
        seasons INT(11) NOT NULL,
        year VARCHAR(10) NOT NULL,
        finished TINYINT(4) NOT NULL DEFAULT 0,
        add_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
        genre_id INT(11) NOT NULL,
        PRIMARY KEY (id),
        INDEX fk_series_genre_idx (genre_id ASC) VISIBLE,
        CONSTRAINT fk_series_genre
            FOREIGN KEY (genre_id)
            REFERENCES genre (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION);`
  
      this.createTable(sql)
    }
  
    createGenre() {
      const sql = `CREATE TABLE IF NOT EXISTS genre (
        id INT(11) NOT NULL AUTO_INCREMENT,
        name VARCHAR(500) NOT NULL,
        PRIMARY KEY (id));`
  
      this.createTable(sql)
    }
  
    createAccount() {
      const sql = `CREATE TABLE IF NOT EXISTS account (
        id INT(11) NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        avatar VARCHAR(500) NULL DEFAULT NULL,
        PRIMARY KEY (id));`
  
      this.createTable(sql)
    }
  
    createFavorites() {
        const sql = `CREATE TABLE IF NOT EXISTS favorites (
            id INT(11) NOT NULL AUTO_INCREMENT,
            movie_id INT(11) NOT NULL,
            series_id INT(11) NOT NULL,
            account_id INT(11) NOT NULL,
            PRIMARY KEY (id),
            INDEX fk_favorites_movie1_idx (movie_id ASC) VISIBLE,
            INDEX fk_favorites_series1_idx (series_id ASC) VISIBLE,
            INDEX fk_favorites_account1_idx (account_id ASC) VISIBLE,
            CONSTRAINT fk_favorites_movie1
                FOREIGN KEY (movie_id)
                REFERENCES movie (id)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION,
            CONSTRAINT fk_favorites_series1
            FOREIGN KEY (series_id)
            REFERENCES series (id)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION,
            CONSTRAINT fk_favorites_account1
                FOREIGN KEY (account_id)
                REFERENCES account (id)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION);`
    
        this.createTable(sql)
    }

    createWishList() {
        const sql = `CREATE TABLE IF NOT EXISTS wish_list (
            id INT(11) NOT NULL AUTO_INCREMENT,
            series_id INT(11) NOT NULL,
            movie_id INT(11) NOT NULL,
            account_id INT(11) NOT NULL,
            PRIMARY KEY (id),
            INDEX fk_wish_list_series1_idx (series_id ASC) VISIBLE,
            INDEX fk_wish_list_movie1_idx (movie_id ASC) VISIBLE,
            INDEX fk_wish_list_account1_idx (account_id ASC) VISIBLE,
            CONSTRAINT fk_wish_list_series1
              FOREIGN KEY (series_id)
              REFERENCES series (id)
              ON DELETE NO ACTION
              ON UPDATE NO ACTION,
            CONSTRAINT fk_wish_list_movie1
              FOREIGN KEY (movie_id)
              REFERENCES movie (id)
              ON DELETE NO ACTION
              ON UPDATE NO ACTION,
            CONSTRAINT fk_wish_list_account1
              FOREIGN KEY (account_id)
              REFERENCES account (id)
              ON DELETE NO ACTION
              ON UPDATE NO ACTION);`
    
        this.createTable(sql)
    }

    createTable(sql) {
      this.db.query(sql, erro => {
        if(erro) {
          console.log(erro)
        }
      })
    }
  }
  
module.exports = new Table