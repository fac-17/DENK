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
    'The Hacker has their finger on the pulse of the world—manipulating, communicating, connecting, translating. The Hacker whispers in the languages of meat and machines—twisting logic like pretzels. But the Hacker’s face is a mask, mediated by the magic of a native network: their identity (and motive) is always obscure, and their alignment might change at any moment. The Hacker is a powerful if capricious ally, but a fearsome enemy. How long will your agenda overlap with theirs?',
    '<svg width="200" viewBox="0 0 220 420" strokeWidth="3" fill="none" stroke="black"><rect x="10" y="20" width="200" height="400"></rect></svg>'),
  ('The State',
    'The State — sometimes known to its enemies as The Patriarchy — is hierarchy, control, regulation, stability, order, discipline. The State is an organization, but it is also the urge to organize, usually from the top downwards—the State establishes and protects order. But to maintain order is to do battle with entropy, that deathless and infinite enemy — and order often requires the suppression or sacrifice of difference and novelty.',
    '<svg width="200" viewBox="0 0 220 420" strokeWidth="3" fill="none" stroke="black"><rect x="10" y="20" width="200" height="400"></rect></svg>'),
  ('The Whistleblower',
    'The Whistleblower understands that knowledge is the domain of power because they pay the price of Prometheus for redistributing the former against the wishes of the latter. They are forced out to the edges, where they might better be hunted down or run to ground. The Whistleblower is an enemy to their native State, and so may find their enemy’s enemies to be friends, if only temporarily. But are the secrets they tell the truth, whole and nothing but? For The Whistleblower soon learnsthat a secret loses its value when shared.',
    '<svg width="200" viewBox="0 0 220 420" strokeWidth="3" fill="none" stroke="black"><rect x="10" y="20" width="200" height="400"></rect></svg>'),
  ('The Designer',
    'The Designer is a problem-solver, an aesthetician, a craftsperson. But The Designer is also an engineer of choice: through their work, they shape the ways in which any thing might be used, constructing the interactional options through which we navigate. And — importantly — The Designer has to make choices to provide choices. The Designer is always a solution wrapped up in a dilemma…except when they’re a dilemma wrapped up in a solution. Which would you choose?',
    '<svg width="200" viewBox="0 0 220 420" strokeWidth="3" fill="none" stroke="black"><rect x="10" y="20" width="200" height="400"></rect></svg>'),
  ('The Academy',
    'The Academy is a place for learning, a laboratory, utopia, solipsism, theory. The Academy critiques The State, even as The State is a precondition of its existence. The Academy works out ways to kill monsters and makes new monsters in the process. One can see far and wide from the top of The Academy’s towers, but remember that towers may be toppled: experts can fall from fashion and favor, even — if not especially — when they turn out to be right.',
    '<svg width="200" viewBox="0 0 220 420" strokeWidth="3" fill="none" stroke="black"><rect x="10" y="20" width="200" height="400"></rect></svg>'),
  ('The Market',
    'The Market is opportunity, luck both good and bad, the merry-go-round of chance and speculation. The Market is boom and bust, bull and bear, buy and sell, pump and dump: all things pass through The Market, and The Market passes through all things. The Market passes through all things. The Market can be feared and adored, gamed by cunning and tamed by regulation, but it can never be trusted - even, if not especially, by those it has favoured in the past. Pick a number, your bet.',
    '<svg width="200" viewBox="0 0 220 420" strokeWidth="3" fill="none" stroke="black"><rect x="10" y="20" width="200" height="400"></rect></svg>')
      -- ('The Visionary',
      --   'The Visionary hasn\'t just seen the light - The Visionary is the light - or so The Visionary believes. And it is The Visionary who believes hard enough can infect others with their belief. Afterall, who among us is not drawn to the light; the warmth of confidence; the brightness of certainty? The Visionary has a solution, but remember, Visionaries have different problems to the rest of us - that\'s why they see things we don\'t. The Visionary shines brightly, blinding those look up to them - but they cast long shadows too. What is illuminated, and what is concealed by the dark?',
      --   '<svg width="200" viewBox="0 0 220 420" strokeWidth="3" fill="none" stroke="black">
      --       <rect x="10" y="20" width="200" height="400"></rect>
      --   </svg>')

    ;

COMMIT;
