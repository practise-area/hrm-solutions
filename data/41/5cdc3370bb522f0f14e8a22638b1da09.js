callback({
  "levelNumber": 41,
  "size": 79,
  "steps": 488,
  "successRatio": 0.7,
  "type": "insertion",
  "legal": true,
  "worky": true,
  "author": "mrflip",
  "hash": "5cdc3370bb522f0f14e8a22638b1da09",
  "path": "41-Sorting-Floor-34.714/79.488.insertion-mrflip.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 41-Sorting-Floor - SIZE 79/34 - SPEED 488/714 --\n\n-- A solution using online insertion sort.\n\n    JUMP     d\na:\n    -- handle one-element list\n    COPYTO   24\n    COPYFROM 1\n    OUTBOX\n    JUMP      e\nb:\n    -- loop for output (register holds zero)\n    COPYTO   23\n    BUMPUP   24\nc:\n    COPYFROM [23]\n    OUTBOX\n    BUMPUP   23\n    SUB      24\n    JUMPN    c\n    COPYTO   24\nd:\ne:\n    -- first entry\n    INBOX\n    COPYTO   1\n    BUMPUP   24\n    -- directly compare second entry\n    INBOX\n    JUMPZ    a\n    COPYTO   0\n    SUB      1\n    JUMPN    r\n    -- swap first and second if needed\n    COPYFROM 0\n    COPYTO   21\n    COPYFROM 1\n    COPYTO   0\n    COPYFROM 21\n    COPYTO   1\n    JUMP     s\nf:\ng:\nh:\ni:\nj:\nk:\nl:\nm:\nn:\no:\np:\nq:\n    -- insert newest value into list\n    COPYFROM 21\n    COPYTO   [23]\nr:\ns:\n    -- stash new value\n    INBOX\n    JUMPZ    b\n    COPYTO   21\n    -- start walking list\n    BUMPUP   24\n    COPYTO   23\n    COPYTO   22\nt:\n    -- 1\n    -- clear space for new value\n    BUMPDN   22\n    COPYFROM [22]\n    COPYTO   [23]\n    -- compare; if greater, insert; else loop\n    SUB      21\n    JUMPN    f\n    BUMPDN   23\n    JUMPZ    g\n    -- 2\n    BUMPDN   22\n    COPYFROM [22]\n    COPYTO   [23]\n    SUB      21\n    JUMPN    h\n    BUMPDN   23\n    JUMPZ    i\n    -- 3\n    BUMPDN   22\n    COPYFROM [22]\n    COPYTO   [23]\n    SUB      21\n    JUMPN    j\n    BUMPDN   23\n    JUMPZ    k\n    -- 4\n    BUMPDN   22\n    COPYFROM [22]\n    COPYTO   [23]\n    SUB      21\n    JUMPN    l\n    BUMPDN   23\n    JUMPZ    m\n    -- 5\n    BUMPDN   22\n    COPYFROM [22]\n    COPYTO   [23]\n    SUB      21\n    JUMPN    n\n    BUMPDN   23\n    JUMPZ    o\n    -- 6\n    BUMPDN   22\n    COPYFROM [22]\n    COPYTO   [23]\n    SUB      21\n    JUMPN    p\n    BUMPDN   23\n    JUMPZ    q\n    --\n    JUMP     t\n"
});