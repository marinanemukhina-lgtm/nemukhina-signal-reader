# Negotiation-science adapter

Use this reference when agents have partly opposed interests, strategic information, bargaining power, offers, concessions, deadlines, or hidden preference weights.

The goal is accurate inference and decision support, not coercion or deceptive manipulation.

## 1. Separate stated position from underlying preference structure

A position is an action or claim in the negotiation. It is not the same as the latent utility function.

Model:

`offer/claim_B != preference_weights_B`

Possible hidden variables include:
- priority of issues;
- reservation value;
- BATNA quality;
- time sensitivity;
- risk tolerance;
- authority limits;
- fairness concerns;
- relationship value.

## 2. Questions are active probes

Open-ended questions can reveal preference structure, constraints, tradeoffs, and hidden stakeholders.

Treat every question as an intervention with contamination risk.

Prefer questions that:
- do not reveal the desired answer;
- expose ranking or tradeoff structure;
- invite explanation rather than yes/no compliance;
- can be answered without surrendering unnecessary leverage.

Record how the question may have reframed the negotiation.

## 3. Use preference elicitation, not mind reading

Infer priorities from converging evidence:
- what B protects repeatedly;
- what B concedes quickly;
- what B asks about;
- issue order and attention;
- response to bundled tradeoffs;
- behavior across multiple rounds.

Do not infer a preference weight from one offer alone.

## 4. Anchors contaminate subsequent evidence

Initial numbers and frames can move later judgments and offers.

Tag post-anchor evidence as potentially `INTERVENED`.

Do not treat a concession after an anchor as clean evidence of original reservation value.

## 5. Concessions are signals with strategic causes

A concession may reflect:
- true lower issue importance;
- deliberate reciprocity;
- signaling cooperation;
- deadline pressure;
- weak BATNA;
- tactical movement designed to obtain another issue.

Maintain competing explanations.

## 6. Delay is ambiguous

Delay may indicate low interest, internal consultation, strategic patience, external constraint, or deliberate pressure.

Do not map latency directly to motive.

When possible compare delay patterns across stages, issues, and counterparties.

## 7. Reactive devaluation and source effects

A proposal can be judged partly by who made it.

Therefore distinguish:

`value_of_terms` from `reaction_to_source`

When relevant, use neutral restatement or blind comparison to test whether resistance is substantive or source-reactive.

## 8. Negotiation is multi-agent even when two people speak

Hidden principals, approvers, advisers, and constituents may shape behavior.

Model the visible negotiator and the represented decision system separately.

Do not infer personal preference from a position that may be mandate-constrained.

## 9. Agreement is not proof of correct inference

A deal can close for reasons A misunderstood. A deal can fail despite accurate inference.

Separate:
- epistemic accuracy;
- joint value creation;
- distributive outcome;
- relationship outcome;
- implementation durability.

## 10. Diagnostic move before persuasive move

When uncertainty about motive is material, prefer a discriminating question or reversible offer structure before argument.

Examples:
- compare two packages differing on one high-value dimension;
- ask which constraint would remain even if price changed;
- test whether timing, authority, or risk is binding;
- isolate issue priority with tradeoff questions.

## Transfer to general agent reasoning

- position vs interest -> signal vs hidden utility;
- open question -> active information probe;
- anchoring -> intervention-induced evidence shift;
- concession pattern -> repeated-state evidence;
- reactive devaluation -> source-dependent evaluation;
- hidden principal -> nested multi-agent model;
- deal outcome -> downstream result, not epistemic ground truth.

## Research anchors

Use as prior-art anchors:
- behavioral negotiation research on anchoring, concessions, reactive devaluation, BATNA and reservation values;
- work on open-ended questions and information discovery in negotiation;
- recent human-vs-LLM work on preference inference and competitive offers;
- bargaining-delay research showing timing can affect acceptance without having a single stable psychological meaning.
