# Park to Podium — Game Systems

This document records the intended game systems and how they should support the
management loop. Exact values and balancing are deliberately left open until the
corresponding features are implemented and tested.

## Core Management Loop

```text
Earn and spend the in-game currency
                  |
                  v
Build holes and upgrade the park
                  |
                  v
Improve the course, facilities, and player development
                  |
                  v
Attract visitors, build reputation, and arrange competitions
                  |
                  v
Earn course fees, commercial income, prizes, and sponsorship revenue
                  |
                  +-----------------------------> reinvest
```

The systems should create meaningful trade-offs rather than make every larger
number automatically better.

## Economy

The park has one primary in-game currency. Its technical name may remain
`funds`, while its player-facing name is still to be decided.

The currency is used to:

- build holes and facilities;
- upgrade existing park content;
- arrange competitions and other activities;
- pay later operating costs such as maintenance, staffing, and training.

Potential income sources include:

- **course fees:** a course can charge visiting players to play;
- visitor spending in facilities such as a pro shop or restaurant;
- competitions and events;
- park sponsorships;
- player results, prizes, and player sponsorships.

Course fees should become a real management choice. Whether the fee is fixed or
set by the player, and how its price affects visitor demand, will be decided when
the visitor economy is designed.

## Park Reputation

Reputation is a park progression value rather than spendable currency. Actions
and outcomes can improve or damage it. Reputation may affect:

- visitor demand;
- sponsor interest;
- available competitions and park upgrades;
- the quality of players and events attracted to the park.

The exact scale, tiers, and rules for losing reputation remain open design
questions.

## Visitors

Visitors are a flow over a period of time, not a resource stored like money.
Visitor demand may be influenced by:

- park reputation;
- course design and condition;
- available facilities and visitor capacity;
- course fees;
- competitions and other activities.

Visitors can generate course-fee and facility income. Larger crowds may later
also create capacity, service, and maintenance pressures. Lifetime visitors may
be recorded as statistics, but should not replace the current visitor flow.

## Course Design

The player should be able to create a course whose characteristics matter. Hole
properties should contribute to course-level qualities, with possible categories
including:

- difficulty;
- variety;
- flow;
- scenery;
- condition.

These categories are provisional. Each retained category must be based on real
player choices and have a clear effect. Course design should influence visitors,
park reputation, competition suitability, and how different fictional players
perform. The first version will use simple choices rather than an advanced visual
course editor.

## Park Development

The park can contain holes and facilities that can be built and upgraded. Every
upgrade should change a game rule or capability, not only its appearance.

Possible facility roles include:

- the clubhouse supporting visitors and park services;
- the workshop improving maintenance or park development;
- a practice area supporting player training;
- a pro shop and restaurant generating visitor income;
- parking limiting visitor capacity;
- a tournament center enabling larger competitions;
- camping supporting events and additional visitors.

Facilities should be added only when their role is being implemented.

## Strategic Progression and Dependencies

The park's systems must depend on each other. Players, facilities, and sponsors
must not become independent income generators that can be expanded without
supporting infrastructure.

Strategic progression should be created through:

- limited funds, space, time, and staff capacity;
- logical prerequisites between facilities and activities;
- operating costs and maintenance after construction;
- choices about where staff and money are used;
- delayed returns on investments;
- more than one viable development path.

A possible player-development chain is:

```text
Workshop and construction staff
              |
              v
Build and maintain a practice area
              |
              v
Provide training capacity and coaching
              |
              v
Recruit and develop players over time
              |
              v
Enter suitable competitions
              |
              v
Earn results, reputation, prizes, and sponsorship opportunities
```

The workshop should provide construction and maintenance capability rather than
passively generate every building. A practice area should require construction
capacity to build and staff capacity to operate. Players should require training
space, coaching, time, and ongoing support before they can produce competitive
results.

Dependencies must remain understandable and connected to the disc golf park.
Hard prerequisites should be used when an activity genuinely cannot function
without them. Soft dependencies, such as higher costs, slower progress, reduced
capacity, or the option to hire an external contractor, can create more strategy
than a completely linear unlock chain.

Growth should also introduce new pressure. More visitors may require parking,
service staff, and maintenance. More players may require coaches and training
slots. Larger competitions may require a suitable course, event facilities,
staff, reputation, and funding. These constraints should prevent one strategy
from scaling without trade-offs.

## Players

The park can create and develop fictional disc golf players. Player attributes
and course characteristics should interact when competition results are
calculated. Players may:

- train through park facilities and activities;
- compete and improve over time;
- generate money and reputation for the park;
- enter individual sponsorship contracts.

Player attributes, progression, ownership, and the division of prize money
between a player and the park will be designed during the competition phase.

## Sponsors

Sponsors are contracts with requirements, objectives, rewards, and potentially a
duration. They are not a resource counter.

- Park sponsors may care about reputation, visitor numbers, facilities, and
  competitions.
- Player sponsors may care about results, ranking, popularity, and participation.

Sponsorships should create decisions and goals rather than provide passive money
without conditions.

## Planned Introduction Order

The systems will be introduced in small playable increments:

1. In-game currency and construction costs.
2. A simple operating cycle with visitors, course fees, and income.
3. Park reputation.
4. Basic course-design choices and course characteristics.
5. Facility upgrades and additional park content.
6. Player development and competitions.
7. Park and player sponsorship contracts.

This order may change when playtesting reveals a better dependency, but several
systems should not be implemented simultaneously in one issue.

## Open Design Decisions

- The player-facing name of the in-game currency.
- Whether the initial operating cycle advances by explicit game days or real time.
- The final course-design categories and how they are calculated.
- Whether course fees are fixed, upgrade-based, or chosen by the player.
- How price, capacity, reputation, and course quality determine visitor demand.
- How staff roles, salaries, availability, and work capacity are represented.
- Which progression requirements are hard prerequisites and which offer slower or
  more expensive alternatives.
- How player earnings and prize money are shared with the park.
- Whether environmental management becomes a separate system or remains part of
  scenery, condition, and course design.
