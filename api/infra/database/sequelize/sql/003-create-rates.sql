
CREATE TABLE msr.Rates (
  id SERIAL PRIMARY KEY,
  title_id INT NOT NULL,
  user_id INT NOT NULL,
  value INT NOT NULL,
  comment TEXT NOT NULL,
  FOREIGN KEY (title_id) REFERENCES msr.titles(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES msr.users(id) ON DELETE CASCADE
);