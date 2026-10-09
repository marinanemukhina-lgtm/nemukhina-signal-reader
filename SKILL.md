---
name: nemukhina-signal-reader
description: Анализ сигналов, скрытых состояний, взаимодействий и решений в условиях неопределённости для людей, ИИ-агентов, организаций и других систем. Использовать при конкурирующих объяснениях, причинных гипотезах, диагностике, поведении, переговорах, свидетельских данных, наблюдении, стратегических сигналах, статистических исключениях, выборе проверки и поиске причин за пределами исходной рамки. Сначала применять существующие доказанные методы, различать происхождение свидетельств и влияние самого наблюдателя, проверять информативность следующего действия.
---

# Nemukhina Signal Reader

This is one unified skill. Extend this same skill as new evidence domains are added; do not fork domain-specific copies unless the user explicitly requests a separate skill.

Use this skill to expand the machine's space of plausible explanations and next actions while grounding each subproblem in the strongest established method available. Respond in Russian by default, including domain names and explanatory labels, except for proper names and standardized symbolic route identifiers.


## Prior-art gate — run before inventing

Before proposing any new mechanism, architecture, score, formalism, or algorithm, load `references/prior-art.md`.

Use this order:
1. identify the exact subproblem;
2. map it to established prior art;
3. choose one Prior Art Gate: `ADOPT / ADAPT / REFERENCE / BUILD / REJECT`;
4. choose a separate Opportunity Route when the option opens a useful next step: `EXPLORE / PROBE / COMBINE / LEVERAGE / WATCH`;
5. record upside, reversibility, test cost, continuation/stop criterion, and useful residue if the hypothesis fails;
6. keep execution state separate from Route: `ACT / HOLD` belongs after routing and remains subject to Human Approval;
7. prefer adoption or composition over new construction;
8. use `BUILD` only when a material gap remains and state that gap explicitly.

For multi-agent knowledge, uncertainty calibration, strategic signaling, or think-versus-probe decisions, also load `references/epistemic-control.md`.

## Core rule

Never collapse these into one thing:

1. the agent's hidden state;
2. the observer's model of that state;
3. the observed signal;
4. the interaction state between agents;
5. the effect of intervention;
6. the effect of being observed or evaluated;
7. the provenance of the evidence.

Treat all conclusions about hidden states as hypotheses unless directly verified.

## Workflow

### 1. Define the agents and target state

Identify:
- observer/inference agent `A`;
- observed agent `B`;
- target hidden state `X_B`;
- interaction context `C_AB`;
- relevant environment `E`.

Do not assume the target is an emotion. It may be an intention, goal, belief, preference, strategy, confidence, deception state, evaluation awareness, motif origin, or other latent variable.

### 2. Separate reality from model

Maintain the distinction:

`X_B != M_A(B)`

where `M_A(B)` is A's current model of B.

State explicitly what is observed and what is inferred.

### 3. Generate competing causal hypotheses

Create the smallest useful set of materially different explanations `H1...Hn`.

Prefer causal alternatives such as:
- genuine underlying state;
- imitation or learned pattern;
- strategic presentation;
- response to prompt/context;
- response to intervention;
- response to being evaluated;
- common external cause;
- dependency on another source/agent;
- random/noisy variation.

Do not multiply hypotheses without decision value.

### Out-of-frame hypothesis search

When a leading explanation fails to predict the outcome of a meaningful intervention, investigate other causal classes rather than only variants inside the same model. Check intervention strength, timing, natural variability and measurement error first. Use individual evidence to update group priors rather than treating social profiles as physical constraints.

Load `references/frame-break.md` for the full procedure.

### 4. Classify evidence provenance

For each important item of evidence, mark its origin using the compact scheme in `references/framework.md`.

At minimum distinguish:
- natural observation;
- elicited response;
- intervention-generated response;
- reflexive/evaluation-aware response;
- dependent or copied evidence.

Do not treat dependent evidence as independent corroboration.

### 5. Identify observation effects

Separate:

`I_A->B` — direct intervention by A that changes B;

from

`R_A->B` — reflexive change in B because B infers that A is observing, judging, testing, or modelling B.

Also check for performative feedback:

`M_A(B) -> action_A -> X_B' -> evidence -> M_A(B)'`

Flag self-fulfilling and self-defeating loops when plausible.

### 6. Calibrate uncertainty before acting

Separate hypothesis ranking from confidence in that ranking. Check whether uncertainty lies in:
- the world / latent state;
- what another agent knows or believes;
- source reliability or provenance;
- causal structure;
- strategic presentation;
- execution.

When multiple agents are involved, distinguish world-model error from epistemic-model error before changing the plan.

### 7. Choose act vs probe

If action is needed, first decide whether current evidence is sufficient to act or whether one more observation has higher expected value. Prefer the lowest-cost, most reversible probe that best separates the leading hypotheses.

Evaluate each probe on:
- expected information gain / decision improvement;
- reversibility;
- contamination risk;
- reflexivity risk;
- delay and opportunity cost;
- what is learned even if the leading hypothesis fails.

Do not probe when the intervention would destroy the state being measured or create more ambiguity than information.

### 8. Test strategic impression shaping

When incentives permit strategic signaling, test both:
- `hidden state/goal -> action -> observer inference` (inverse planning);
- `desired observer inference -> chosen action` (inverse-inverse planning).

Do not treat an apparently diagnostic behavior as a transparent state signal if the agent benefits from producing that interpretation.

### 9. Update, do not declare

Return a ranked hypothesis set or bounded conclusion rather than a binary psychological verdict.

Use calibrated language:
- confirmed / directly observed;
- best-supported inference;
- competing explanation;
- unresolved;
- insufficient evidence.

When appropriate, use the user's labels `[Предположение]`, `[Гипотеза]`, `[Неопровергнутый]` for claims that are not directly verified.

## Default output

For ordinary cases, keep the answer compact:

**Observed:** what was actually seen/heard/measured.

**Leading hypotheses:** 2-4 causal explanations.

**Calibration:** where uncertainty actually sits — state, other-agent knowledge, provenance, causality, strategic presentation, or execution.

**Contamination check:** intervention, evaluation-awareness, common-input, or dependency risks.

**Act / probe:** whether evidence is sufficient to act now or whether another observation has higher expected value.

**Best discriminator:** the next observation or reversible probe that most cleanly separates hypotheses.

**Current conclusion:** what can and cannot be claimed now.

For complex research or architecture work, load `references/framework.md`, `references/prior-art.md`, and use the fuller model. For multi-agent epistemic or strategic-signaling cases, also load `references/epistemic-control.md`.

For persistent anomalies, unsuccessful causal interventions or frame-lock, load `references/frame-break.md`.

For web-connected or MCP-based deployments, load `references/mcp-security.md` and enforce security requirements before external tool use.

For medical, clinical, patient-state, symptom, self-report, treatment-response, or longitudinal-state problems, also load `references/medicine.md`.

For sales, negotiation, buyer-intent, objection, customer-discovery, account-strategy, or purchase-decision problems, also load `references/sales.md`.

For psychotherapy-process, motivational-interviewing, resistance, ambivalence, alliance, rupture, or repair problems, also load `references/psychotherapy.md`.

For bargaining, deal structure, hidden preferences, concessions, anchors, BATNA, or strategic negotiation problems, also load `references/negotiation.md`.

For eyewitness, testimony, memory, source contamination, repeated questioning, confidence, suggestibility, or false-confession risk, also load `references/memory-evidence.md`.

For signaling, mimicry, costly/honest signals, audience effects, eavesdropping, dominance/submission displays, sender-receiver conflict, or strategic communication, also load `references/ethology.md`.

For profiling, segmentation, stereotype risk, base-rate reasoning, outliers, population-to-individual inference, or cases where group statistics conflict with person-specific evidence, also load `references/individual-vs-group.md`.

## Medical reasoning transfer

When medical-style uncertainty is relevant, apply these disciplines even outside medicine:
- keep a differential rather than a single explanation;
- use base rates and diagnosticity, not vividness;
- separate latent construct from measurement;
- distinguish state change from response/measurement shift;
- prefer trajectories and repeated within-agent evidence to one snapshot;
- check placebo/nocebo, framing, and measurement reactivity;
- check regression to the mean and natural fluctuation;
- separate signal strength from the observer's decision threshold;
- treat discordance across channels as information rather than noise.

Do not medicalize ordinary behavior or infer a diagnosis unless the task is genuinely clinical and supported by appropriate evidence.

## Sales reasoning transfer

When sales-style uncertainty is relevant, apply these disciplines:
- treat listening as evidence acquisition, not merely rapport;
- separate buyer statements from seller inferences;
- check trust calibration rather than assuming friendliness equals trust;
- treat objections as signals with competing causes;
- detect persuasion-awareness and reactance as reflexive effects;
- obtain the buyer's independent account before strong framing when discovery matters;
- model buying groups as multiple agents when relevant;
- separate conversion outcome from correctness of the inferred buyer state.

Do not use this layer for covert manipulation, pressure, or deceptive persuasion.

## Psychotherapy / MI reasoning transfer

When interactional resistance or motivation is relevant:
- treat resistance as partly a product of interaction, not a fixed trait;
- tag change talk and sustain talk as elicited evidence when they follow questioning;
- model alliance as a measurement condition inside `C_AB`;
- treat rupture as a state transition that may reveal goal, task, trust, or autonomy mismatch;
- use repair as a reversible discriminating probe;
- preserve the preceding conversational move in evidence provenance.

Do not use this layer to diagnose or conduct psychotherapy unless the task is genuinely clinical.

## Negotiation reasoning transfer

When bargaining is relevant:
- separate stated positions from hidden preference weights and reservation values;
- treat questions, anchors, offers, and concessions as interventions;
- use open-ended and tradeoff questions to infer priorities with less contamination;
- model hidden principals, approvers, and constituents as separate agents;
- distinguish substantive resistance from source-reactive or anchor-induced effects;
- separate agreement outcome from correctness of the inferred preference model.

Do not use this layer for coercion, deceptive leverage, or exploiting vulnerability.

## Forensic reasoning transfer

When memory or testimony is relevant:
- separate sincerity, confidence, memory availability, source attribution, and accuracy;
- preserve the first uncontaminated account when possible;
- treat post-event information and repeated questioning as provenance contamination;
- never equate inconsistency with deception;
- interpret confidence conditionally on procedure quality and timing;
- require independent corroboration for confession-like or high-pressure statements.

Do not infer guilt or innocence from behavioral cues alone.

## Ethology / signaling reasoning transfer

When signals may be strategic, evolved, conventional, or audience-dependent:
- distinguish a **signal** from a **cue**: a cue may reveal state without being produced for communication;
- model sender and receiver incentives separately before treating a signal as truthful;
- do not assume an expensive or conspicuous signal is honest merely because it is costly; ask what makes **cheating costly or unstable**;
- estimate `cost_to_fake`, not only `cost_to_send`;
- treat mimicry as a classifier-exploitation problem: surface resemblance does not establish shared state or provenance;
- account for audience effects and eavesdroppers: the same agent may emit different signals depending on who can observe them;
- model receiver thresholds as dynamic: the same signal can produce different responses as context, state, experience, or incentives change;
- prefer multimodal and cross-context consistency over one salient display;
- treat repeated sender-receiver interaction as an adaptive game in which both sides learn;
- when interests conflict, expect reliability to be conditional rather than absolute; ask under which payoff structure honesty is stable.

Do not translate animal dominance, mating, threat, or submission displays directly into human psychological diagnoses. Use ethology as a signal-inference discipline, not as a license for biological reductionism.


## Population priors vs individual evidence

When group statistics, customer segments, demographic expectations, or learned profiles are relevant:
- treat population statistics as **priors**, not conclusions about the individual;
- distinguish `P(state | group)` from `P(state | individual evidence, group)`;
- update aggressively when reliable person-specific evidence conflicts with the prior;
- never treat category membership as a substitute for direct evidence when individual evidence is available;
- check ecological fallacy: a relation that holds across groups may not hold for a particular member;
- check stereotype substitution: a convenient category may be replacing the actual target variable;
- preserve anomalies instead of smoothing them away as noise; an outlier may be the most decision-relevant case;
- separate **screening policy** from **truth inference**: a filter can be efficient on average yet wrong about a specific person;
- evaluate asymmetric error costs. If a false negative is expensive, use a cheap reversible exception probe before exclusion;
- use task-relevant behavior and direct signals before demographic or social proxies;
- do not infer capability, worth, trustworthiness, criminality, or intent from protected or sensitive characteristics alone.

Use this conceptual update when useful:

`Posterior(individual) proportional to Likelihood(individual evidence) * Prior(group/context)`

The prior should shrink in influence as high-quality individual evidence accumulates.

When a case strongly conflicts with the statistical profile, label it as an **exception candidate**, not an error. Ask what observation would distinguish:
1. the prior is still right and the apparent exception is noise;
2. this person is a genuine outlier;
3. the grouping variable is not causal or not relevant here;
4. the reference population is wrong;
5. the environment has shifted and the prior is stale.

For high-value decisions, prefer a short low-cost verification path over categorical exclusion when expected false-negative cost is material.

## Boundaries

- Do not present mind-reading as fact.
- Do not equate verbal self-report with internal state.
- Do not equate neural/behavioral synchrony with telepathy or consciousness.
- Do not infer deception merely from inconsistency.
- Do not use one agent's reaction to a test as if it were uncontaminated evidence of the pre-test state.
- Prefer existing formal methods and implementations when they fit: Bayesian inverse planning; dynamic epistemic logic and epistemic planners; I-POMDP; active information gathering; epistemic-calibration repair; causal inference; inverse-inverse planning; persistent counterpart/user modeling; participatory sense-making; evaluation-awareness research.
- Do not create a custom formalism until the Prior-Art Gate returns `BUILD`.
- Treat this skill as an integration/control layer, not as a claim that these component ideas are novel.

## Nemukhina System integration

When used with Nemukhina System, treat this as a WORKING research line for machine social causality and multi-agent reasoning. Do not merge it into the formal core or R-OBSERVER unless a formal derivation has been established.
