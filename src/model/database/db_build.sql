BEGIN;

DROP TABLE IF EXISTS tarot_cards CASCADE;

CREATE TABLE tarot_cards (
  id SERIAL PRIMARY KEY,
  tarot_heading VARCHAR(50) NOT NULL UNIQUE,
  tarot_description VARCHAR(700) NOT NULL UNIQUE
);

INSERT INTO tarot_cards (tarot_heading, tarot_description) VALUES
  ('The Hacker', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'),
  ('The Magician', 'The Magicians tools of mysticism do, indeed, access higher dimensions of reality. Scoffers will be put to rest when you find a way to mediate between angry parties through the use of divination and ritual.');

COMMIT;
