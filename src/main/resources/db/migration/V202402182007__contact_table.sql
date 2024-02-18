CREATE TABLE contact
(
    id           BIGSERIAL,
    name         TEXT NOT null,
    secret_name  TEXT NOT NULL,
    phone_number TEXT
)