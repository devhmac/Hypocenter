DROP TABLE IF EXISTS earthquakes CASCADE;
CREATE TABLE earthquakes (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  magnitude VARCHAR(10) NOT NULL,
  pager VARCHAR(25) NOT NULL,
  longitude VARCHAR(255) NOT NULL,
  latitude VARCHAR(255) NOT NULL,
  depth VARCHAR(255) NOT NULL,
  tsunami SMALLINT NOT NULL,
  time_stamp BIGINT NOT NULL,
  added TIMESTAMP NOT NULL
);
