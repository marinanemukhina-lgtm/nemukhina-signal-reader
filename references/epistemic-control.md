# Epistemic Control Layer

Use this reference when the case involves multiple agents, hidden knowledge, strategic signaling, or a decision about whether to act or gather more information.

## State decomposition

Maintain separately:
- world / latent state;
- each agent's local observations;
- each agent's beliefs about the world;
- higher-order beliefs about other agents;
- confidence / uncertainty in those beliefs;
- incentives to reveal, conceal, or manipulate beliefs;
- evidence provenance and contamination history.

## Control loop

Use this sequence:

`signal -> competing hypotheses -> uncertainty calibration -> epistemic-state check -> act/probe decision -> observer/reflexive response -> causal update`

Do not collapse uncertainty calibration into hypothesis ranking.

## Epistemic calibration check

Before diagnosing a plan or interaction failure, separate:
1. world-model error — wrong belief about the environment or latent state;
2. epistemic-model error — wrong belief about what another agent knows, believes, can access, or can do;
3. coordination error — correct local models but incompatible plans or timing;
4. execution error — correct plan, failed action;
5. strategic signaling error — observed behavior was chosen to shape the observer's belief.

## Think-or-probe gate

When uncertainty is material, compare:
- expected value of acting now;
- expected value of one more observation/probe;
- cost and irreversibility of delay;
- contamination and reflexivity caused by the probe.

Choose information gathering when the expected decision improvement exceeds its cost and contamination risk.

## Strategic signaling inversion

For any important signal, test two models:

**Inverse planning**
`hidden goal/state -> action -> observed signal`

**Inverse-inverse planning**
`desired observer belief -> selected action/signal`

The second model is especially important in negotiations, evaluation settings, reputation management, interviews, sales, and AI evaluation awareness.

## Persistent counterpart model

When there is meaningful longitudinal history, maintain a bounded counterpart model:
- stable preferences or capabilities supported across contexts;
- recent state variables;
- confidence and provenance for each attribute;
- contradictions and unresolved alternatives;
- evidence that the model itself changes the counterpart's behavior.

Never convert a profile into a fixed identity claim. Current behavior can override stale profile priors.
