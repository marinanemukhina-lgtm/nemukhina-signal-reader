# Population priors vs individual evidence

## Core distinction

A population statistic is a prior for an individual case, not a verdict.

Use:

`P(H | I, G) proportional to P(I | H, G) * P(H | G)`

- `G`: group/context information.
- `I`: individual-specific evidence.
- `H`: target hypothesis about the individual.

As the quality and quantity of `I` increase, do not let `G` dominate by inertia.

## Failure modes

### Ecological fallacy
Do not infer that a group-level association necessarily holds for a member of that group.

### Stereotype substitution
Do not replace a hard-to-measure target (ability, purchasing power, intent, competence, trust) with an easy category proxy (age, appearance, occupation, neighborhood, gender, social class, device type, etc.).

### Base-rate overreach
Base rates matter, but they do not cancel diagnostic individual evidence.

### Outlier erasure
Do not discard a contradictory signal merely because it is rare under the prior. Rare cases are expected in any non-degenerate distribution.

### Reference-class error
Ask whether the chosen population is the right comparison set. A person can belong to many groups with different priors.

### Stale-prior error
A historically accurate prior may become wrong after technological, social, market, or behavioral change.

## Screening is not diagnosis

A screening rule can be economically efficient while producing false negatives. Separate:

`screening decision` from `belief about the person`.

If the cost of checking is low and the cost of wrongly excluding a high-value exception is high, create an **exception probe**.

Conceptually:

`probe if ExpectedLoss(false negative) > Cost(probe) + ExpectedLoss(probe contamination)`

The probe should be:
- cheap;
- reversible;
- non-humiliating;
- based on task-relevant behavior;
- minimally influenced by the category assumption itself.

## Example: retail filtering

Appearance can predict purchase probability in aggregate in some environments, but it is not a reliable statement about one customer. A store may rationally triage attention under capacity constraints, yet a categorical refusal can miss a high-value exception and can itself alter the customer's behavior.

Model separately:
- `prior_purchase_probability`;
- `individual purchase signals`;
- `service cost`;
- `false-negative cost`;
- `observer-treatment effect`.

A short service interaction can be an exception probe.

## Example: technical competence

Do not infer computer literacy from age, gender, profession, education, or appearance when direct task evidence is available. Use the category only as a weak prior if it is relevant and appropriate; update from demonstrated behavior immediately.

## Output addition

When this adapter is active, add:

**Prior:** What population-level expectation is being used?

**Individual evidence:** What directly supports or contradicts it?

**Reference-class check:** Is the comparison population appropriate and current?

**Error asymmetry:** What is costlier: a false positive or a false negative?

**Exception probe:** What cheap reversible test would prevent premature exclusion?

**Updated conclusion:** What remains of the prior after individual evidence is incorporated?
