BEGIN;

DROP TABLE IF EXISTS tarot_cards CASCADE;

CREATE TABLE tarot_cards (
  id SERIAL PRIMARY KEY,
  tarot_heading VARCHAR(50) NOT NULL UNIQUE,
  tarot_description VARCHAR(700) NOT NULL UNIQUE,
  tarot_image TEXT NOT NULL
);

INSERT INTO tarot_cards (tarot_heading, tarot_description, tarot_image) VALUES
  ('The Hacker',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    '<svg width="200" viewBox="0 0 220 420" strokeWidth="3" fill="none" stroke="black">
        <rect x="10" y="20" width="200" height="400"></rect>
    </svg>'),
  ('The Magician',
    'The Magicians tools of mysticism do, indeed, access higher dimensions of reality. Scoffers will be put to rest when you find a way to mediate between angry parties through the use of divination and ritual.',
  '<svg width="200" viewBox="0 0 220 420" strokeWidth="3" fill="none" stroke="black">
      <rect x="10" y="20" width="200" height="400"></rect>
  </svg>');

COMMIT;
