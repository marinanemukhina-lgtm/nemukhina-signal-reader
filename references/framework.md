# Inter-Agent Epistemics — Compact Framework

## State

Use the minimal state representation:

`S_t = {X_A, X_B, M_A(B), M_B(A), C_AB, E}`

- `X_A`, `X_B`: latent/current states of agents A and B.
- `M_A(B)`: A's model of B.
- `M_B(A)`: B's model of A.
- `C_AB`: interaction/relationship state.
- `E`: environment/common causes.

Never assume `X_B = M_A(B)`.

## Four causal modes

### Passive observation

`X_B -> Y_B -> M_A(B)`

Use when measurement itself plausibly leaves B unchanged.

### Active information gathering

`H1...Hn -> choose probe -> B responds -> evidence -> posterior update`

Use when A deliberately chooses an action to separate competing models of B.

### Reflexive response

`B infers observation/evaluation -> B changes -> observed signal changes`

This is distinct from direct intervention.

### Performative feedback

`M_A(B) -> treatment_A -> X_B' -> new evidence -> M_A(B)'`

Check for self-fulfilling, self-defeating, confirmation-amplifying, or adversarial loops.

## Evidence provenance tags

Use one or more tags per evidence item:

- `NATURAL`: arose without deliberate elicitation.
- `ELICITED`: response to a question/request.
- `INTERVENED`: response after A changed B's environment or options.
- `REFLEXIVE`: likely altered because B knew/suspected observation, evaluation, or testing.
- `DEPENDENT`: copied, socially transmitted, shared-source, or otherwise not independent.
- `TRANSFORMED`: summarized, filtered, translated, scored, or processed before reaching A.

Optional evidence record:

`e_k = {source, time, observer, context, intervention, reflexivity, dependency, transformation}`

## Hypothesis discipline

Useful hypothesis classes include:
- latent-state explanation;
- strategic signaling;
- imitation/template recall;
- context/prompt effect;
- common external cause;
- observer-induced change;
- evaluation awareness;
- source dependency;
- noise/randomness.

The goal is discrimination, not exhaustive enumeration.

## Probe selection

A useful probe should maximize expected discrimination while minimizing contamination.

Conceptually:

`score(a) = information_gain - cost - contamination_risk - reflexivity_risk`

Prefer probes that are:
- reversible;
- low-cost;
- minimally leading;
- hard to game;
- informative under multiple hypotheses.

## Output for research cases

1. Target hidden state.
2. Competing hypotheses.
3. Evidence table with provenance tags.
4. Direct intervention effects.
5. Reflexive/evaluation-awareness effects.
6. Interaction-state effects.
7. Best discriminating probe.
8. Posterior ordering or bounded conclusion.
9. Remaining uncertainty.

## Prior-art positioning

Treat the skill as a synthesis/control layer over established lines, including:
- Bayesian inverse planning;
- interactive POMDPs;
- active information gathering;
- critical decision point probing;
- participatory sense-making;
- theory of mind / machine theory of mind;
- causal inference;
- evaluation awareness and performative behavior in AI systems.

Do not claim novelty merely from combining these names. Any novelty claim requires a dedicated prior-art search and a formally specified delta.


## Established backbone

Before inventing a custom implementation, use `prior-art.md` to select an existing backbone.

- higher-order knowledge / belief change: Dynamic Epistemic Logic and epistemic planners;
- persistent counterpart mental models: ToM-style longitudinal profiling with explicit uncertainty;
- hidden-goal inference: Bayesian inverse planning;
- deliberate observer-shaping behavior: inverse-inverse planning;
- multi-agent planning failures caused by wrong beliefs about who knows what: epistemic calibration / repair;
- standard causal discovery and intervention estimation: established causal-inference methods;
- think-versus-probe decisions: uncertainty-sensitive active information gathering.

Signal Reader supplies orchestration, provenance, contamination checks, cross-domain transfer, and out-of-frame search; it should not duplicate mature solvers.
