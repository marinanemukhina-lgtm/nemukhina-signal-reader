# Sales reasoning adapter

Use this reference for sales conversations, negotiations, customer discovery, objection analysis, account strategy, buyer intent, and purchase-decision inference.

The goal is not to manipulate a buyer. The goal is to infer decision state more accurately while accounting for the fact that the seller's questions, framing, pressure, timing, and perceived tactics can change the buyer's responses.

## What sales science contributes

### 1. Adaptive selling is controlled model updating

Adaptive selling means changing behavior in response to customer needs and situation cues rather than applying one fixed script.

Translate it into the observer loop as:

`cue -> update buyer model -> adapt seller action -> observe response -> recalibrate`

Do not confuse adaptation with certainty. A successful adaptation can improve the interaction without proving the inferred motive was correct.

### 2. Listening is measurement, not downtime

Treat active listening as a primary data-acquisition channel.

Separate:
- what the buyer explicitly states;
- what the buyer implies;
- what the seller inferred;
- what remains unknown.

Use a verification loop:

`capture -> reflect -> confirm/correct -> update`

Do not reward verbosity over diagnostic value. One clarified constraint can be more informative than many surface details.

### 3. Trust is latent and can be miscalibrated

Distinguish:

`actual buyer trust != seller estimate of buyer trust`

Check for trust overestimation. Familiarity, friendliness, repeated contact, or conversational ease are not equivalent to purchase confidence or willingness to rely on the seller.

Treat trust as multi-component when useful:
- competence;
- benevolence/customer orientation;
- integrity/reliability;
- predictability.

### 4. Persuasion knowledge creates reflexive effects

Buyers detect selling tactics and change how they interpret the same message.

Model:

`seller tactic -> buyer recognizes persuasion intent -> meaning changes -> response changes`

This is a sales-specific form of `REFLEXIVE` evidence.

A buyer's resistance after a tactic may reflect:
- dislike of the offer;
- dislike of the tactic;
- loss of trust;
- reactance to pressure;
- increased scrutiny;
- strategic bargaining.

Do not collapse these into one "objection" state.

### 5. Objections are observations, not diagnoses

Treat an objection as a signal with a differential.

For example, "too expensive" may correspond to:
- genuine budget constraint;
- low perceived value;
- uncertainty/risk;
- comparison with an alternative;
- lack of authority;
- timing;
- negotiation anchor;
- polite exit.

Use low-pressure discriminating questions rather than arguing against the first interpretation.

### 6. Independent buyer account before heavy framing

When the task is discovery, obtain the buyer's own description of goals, constraints, and decision criteria before presenting a strong solution frame.

This reduces contamination:

`seller frame -> buyer adopts vocabulary/frame -> seller mistakes echoed frame for independent evidence`

Tag such post-framing evidence `ELICITED`, `INTERVENED`, or `DEPENDENT` as appropriate.

### 7. Decision stage is a hidden state

Do not treat all positive signals as equivalent.

Possible buyer states include:
- curiosity;
- problem recognition;
- active evaluation;
- internal consensus building;
- risk resolution;
- commercial negotiation;
- implementation planning;
- polite engagement without intent.

Infer stage from multiple channels and behavior over time, not from one phrase.

### 8. Buying units are multi-agent systems

In B2B and family/committee purchases, model separate agents rather than one fictional "customer".

Track when relevant:
- user;
- economic buyer;
- technical evaluator;
- blocker;
- champion;
- approver;
- external adviser.

Do not aggregate conflicting stakeholder states too early. Buying-group conflict is itself evidence.

### 9. Time and delay are signals with competing causes

A delayed reply, postponed meeting, or slow negotiation can reflect:
- reduced interest;
- internal process;
- strategic bargaining;
- workload;
- missing stakeholder;
- uncertainty;
- deliberate delay.

Never assign one motive from latency alone.

### 10. Conversion is not ground truth

A sale can occur despite a poor model of the buyer, and a no-sale can occur despite accurate diagnosis.

Separate:
- epistemic quality: how well the buyer state was inferred;
- interaction quality: whether trust and understanding improved;
- commercial outcome: whether the deal closed.

Avoid training the observer loop to equate "closed" with "correct".

## Sales contamination checklist

Before inferring buyer intent, ask:

1. What did the buyer volunteer before seller framing?
2. Which statements were produced after a leading question, pitch, discount, deadline, or objection handling?
3. Could the buyer be reacting to the tactic rather than the offer?
4. Is seller-estimated trust calibrated to observable behavior?
5. Is an objection being treated as a diagnosis instead of a signal?
6. Are multiple stakeholders being collapsed into one buyer model?
7. Is delay being overinterpreted?
8. Are positive social cues being mistaken for purchase intent?
9. Did the seller create the vocabulary or criterion later treated as buyer-origin evidence?
10. Is the model optimizing conversion at the expense of truthful state inference?

## Research anchors

Use these as prior-art anchors, not proprietary scripts:
- adaptive selling and customer orientation research (Spiro & Weitz; Franke & Park; later meta-analytic work);
- salesperson listening meta-analysis (Itani, Goad & Jaramillo);
- customer trust in salesperson meta-analysis (Swan, Bowers & Richardson);
- persuasion knowledge model and pricing/negotiation research;
- research on salesperson trust overestimation and buyer-seller calibration;
- contemporary work on buyer-team conflict, sales-agent simulations, and decision fidelity.

## Transfer to general agent reasoning

- adaptive selling -> policy adaptation under uncertain hidden state;
- listening -> low-contamination evidence acquisition;
- trust calibration -> distinguish relationship estimate from relationship state;
- persuasion knowledge -> reflexive response to perceived influence;
- objection handling -> competing causal hypotheses;
- buying committee -> multi-agent hidden-state decomposition;
- conversion outcome -> downstream outcome, not epistemic proof.
