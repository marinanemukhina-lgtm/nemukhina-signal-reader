# Medical reasoning adapter

Use this reference when the observed agent is a patient, clinician, caregiver, biological system, or when the task involves symptoms, self-reports, longitudinal state, diagnosis, treatment response, or measurement reactivity.

## What medicine contributes

### 1. Differential diagnosis before explanation

Treat a behavioral or subjective signal like a clinical sign: it rarely identifies one cause by itself.

Maintain a differential `H1...Hn` and update it using prior probability plus diagnostic value of new evidence.

Do not let vividness, recency, or a single salient cue collapse the differential prematurely.

### 2. Base rates and likelihood, not intuition alone

Distinguish:
- prior/base rate;
- sensitivity of an observation under a hypothesis;
- specificity against alternatives;
- posterior belief after evidence.

A rare explanation can fit a signal well and still remain unlikely if the same signal is common under ordinary causes.

### 3. Measurement is part of the system

Medical measurement can change the measured state or its report.

Check for:
- placebo/nocebo effects from expectations and framing;
- clinician-expectancy and interaction effects;
- Hawthorne/measurement reactivity;
- repeated-question effects;
- test anxiety and evaluation awareness;
- therapeutic intervention changing the state before it is fully characterized.

Tag such evidence `REFLEXIVE` or `INTERVENED` rather than treating it as a passive readout.

### 4. Separate construct from measurement

A reported score or answer is not identical to the latent state it is intended to measure.

Use the distinction:

`latent construct != instrument output`

Examples:
- pain != pain score;
- mood != questionnaire score;
- functional capacity != one clinic performance;
- subjective wellbeing != a single retrospective rating.

### 5. Response shift

Across time, an agent may change the internal standard used to rate the same construct. Adaptation, changed priorities, or reconceptualization can change the meaning of a self-report without equivalent change in the underlying target state.

When comparing self-report across time, consider:
- recalibration of internal standards;
- reprioritization of what matters;
- reconceptualization of the construct itself.

Do not interpret all score change as state change.

### 6. State vs trait; snapshot vs trajectory

Prefer longitudinal within-agent evidence over one-off snapshots when the target is dynamic.

Use repeated, context-linked observations when possible. Ecological momentary assessment is a useful model: measure closer to the event, in the natural context, and across time rather than relying only on retrospective summary.

### 7. Natural history and regression to the mean

An apparent improvement or deterioration after attention, treatment, or intervention may reflect:
- spontaneous fluctuation;
- natural history;
- regression to the mean;
- seasonality or context change;
- concurrent intervention.

Do not attribute temporal sequence automatically to causation.

### 8. N-of-1 logic

For a single agent, population averages may be poor predictors. When safe and reversible, repeated within-agent comparisons can distinguish stable individual response from noise.

Use only when the state/intervention is suitable for repeated observation. Never treat this as permission to conduct medical experimentation without appropriate clinical oversight.

### 9. Thresholds are decisions, not reality

Clinical signal detection separates the underlying signal from the decision threshold.

A classifier, clinician, or agent can become more sensitive by accepting more false positives, or more specific by accepting more false negatives.

Record both:
- evidence about the hidden state;
- the observer's decision threshold/cost structure.

### 10. Discordance is information

When channels disagree, do not average them away immediately.

Examples:
- self-report vs behavior;
- symptom report vs biomarker;
- clinician impression vs longitudinal data;
- home-state vs clinic-state.

Discordance may indicate measurement failure, context dependence, response shift, strategic reporting, sampling error, or a multi-component state.

## Medical contamination checklist

Before drawing a hidden-state conclusion, ask:

1. Was the signal obtained before or after intervention?
2. Could expectations or wording have altered the response?
3. Is this a direct measure, proxy, or self-report?
4. Did the measurement instrument or internal standard change over time?
5. Is the observation a one-time snapshot or a repeated trajectory?
6. What is the relevant base rate?
7. What alternative diagnoses/explanations remain live?
8. Could regression to the mean or natural fluctuation explain the change?
9. Are multiple channels independent?
10. Is the observer's threshold being mistaken for certainty about reality?

## Transfer to non-medical agents

Translate the medical discipline rather than medicalize the person:

- differential diagnosis -> competing causal hypotheses;
- likelihood ratio -> diagnosticity of evidence;
- biomarker vs symptom -> independent channel triangulation;
- placebo/nocebo -> expectation-induced state change;
- response shift -> changing meaning/calibration of self-report;
- longitudinal monitoring -> state trajectory;
- N-of-1 -> repeated within-agent comparison;
- signal detection threshold -> decision threshold under asymmetric costs;
- treatment response -> intervention-generated evidence.
