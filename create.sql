
CREATE DATABASE if not exists COH2
    DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE IF Not exists coh2camp(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    commander_count VARCHAR(255),
    camp VARCHAR(255),
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) COMMENT '阵营';

CREATE TABLE IF Not exists German(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    name VARCHAR(255),
    description VARCHAR(255),
    image VARCHAR(255),
    camp_id int NOT NULL, 
    Foreign Key (camp_id) REFERENCES coh2camp(id)
    on delete CASCADE
) COMMENT '德军';

