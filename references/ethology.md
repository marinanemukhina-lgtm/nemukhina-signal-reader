# Ethology and Behavioral Ecology Adapter

Use this reference when the central problem is whether an observed display reliably indicates an underlying state.

## 1. Signal vs cue

Treat these separately:

- **Signal**: a trait or behavior shaped for communication because it changes receiver behavior in a way that, on average, benefits the sender.
- **Cue**: an observable feature that reveals information but did not evolve or arise primarily to communicate it.

For machine reasoning, ask first: is the observation intentionally produced for a receiver, or merely available to a receiver? Intentional-looking behavior is not enough to prove signaling function.

## 2. Sender-receiver game

Represent communication as:

`hidden_state -> sender_policy -> signal -> receiver_policy -> outcome`

with separate payoffs for sender and receiver.

Do not ask only "What does this signal mean?" Ask:
- what does the sender gain if the receiver believes it?
- what does the receiver lose if it is false?
- what constrains dishonest signaling?
- what alternative signal would a different hidden state produce?

## 3. Honesty is not the same as raw cost

Do not use the crude rule `costly = honest`. Honest signaling can persist because cheating carries a **potential differential cost**, because interests are aligned, because the signal is physically constrained, or because receivers punish unreliable displays.

Prefer:

`Reliability(signal) <- incentive compatibility + constraints + receiver response + history`

over:

`Reliability(signal) <- visible expense`

Estimate both:
- `cost_to_send`;
- `cost_to_fake`.

The second is usually more diagnostic.

## 4. Mimicry and deception

Treat mimicry as a warning against surface inference.

`looks_like(A) != generated_by(A-state)`

A sender can exploit a receiver's classifier by reproducing a familiar pattern. For AI or human agents, check whether the signal is cheap to imitate, copied from a known template, or produced by a system optimized against the receiver's detection rule.

## 5. Receiver psychology

A signal's apparent meaning depends on receiver detection, discrimination, memory, priors, and response threshold.

Model:

`response = f(signal, receiver_state, threshold, context, history)`

Therefore:
- absence of response does not prove absence of signal;
- strong response does not prove strong underlying state;
- receiver thresholds may shift over time.

## 6. Audience effects and eavesdropping

Add third parties when relevant:

`A -> signal -> B`

may change when `C` can observe.

Track:
- intended receiver;
- unintended observers;
- audience composition;
- whether the sender knows who is watching.

Tag audience-conditioned evidence as potentially reflexive rather than natural.

## 7. Multimodal and multi-function signals

Do not assume one display maps to one meaning. A signal can serve multiple receivers or functions simultaneously.

Prefer cross-channel analysis:
- verbal;
- behavioral;
- timing;
- physiological or system telemetry;
- resource commitment;
- follow-through.

Concordance across hard-to-coordinate channels increases evidential value, but never proves a hidden state by itself.

## 8. Adaptive dynamics

When sender and receiver interact repeatedly, assume both can learn. A previously diagnostic signal may lose value after the receiver begins using it. Conversely, receiver skepticism can alter sender strategy.

Track:

`signal_t -> receiver_update -> sender_adaptation -> signal_t+1`

This is especially relevant for negotiations, fraud detection, safety evaluations, sales, repeated interviews, and AI-agent monitoring.

## 9. Practical diagnostic questions

Before inferring hidden state from a signal, ask:
1. Is this a signal or a cue?
2. Who benefits if the receiver believes it?
3. What is the sender's cost of faking it?
4. What is the receiver's cost of being wrong?
5. Who else is watching?
6. Is the signal easy to mimic?
7. Is it stable across contexts and channels?
8. Has the receiver's detection rule already shaped the sender's behavior?
9. Would a competing hidden state plausibly generate the same signal?

## 10. Transfer principle

The central lesson is not "animals reveal truth through body language." It is:

> Reliability is a property of a sender-receiver system under incentives, constraints, and history — not a property of a signal in isolation.
