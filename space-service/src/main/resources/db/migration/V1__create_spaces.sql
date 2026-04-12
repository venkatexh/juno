CREATE TABLE spaces (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    owner_id UUID NOT NULL,
    status TEXT DEFAULT 'ACTIVE',
    visibility TEXT DEFAULT 'PRIVATE',
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);