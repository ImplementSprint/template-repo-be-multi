-- Initial Schema for System B
CREATE TABLE IF NOT EXISTS system_status (
  id SERIAL PRIMARY KEY,
  check_name TEXT NOT NULL,
  is_alive BOOLEAN DEFAULT TRUE
);
