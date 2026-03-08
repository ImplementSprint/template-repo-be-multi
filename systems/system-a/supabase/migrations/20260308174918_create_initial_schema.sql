-- Initial Schema for System A
CREATE TABLE IF NOT EXISTS health_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
