export class Ring {
  constructor(node) {
    this.node = node;
  }
  update(value) {
    let angle = value * 360;
    this.node.sweepAngle = Math.min(360, Math.round(angle));
  }
}

export class GoalRingCollection {
  constructor(rings) {
    this.rings = rings;
  }
  update(health) {
    for (let r of this.rings) {
      r.update(health);
    }
  }
}

export class GoalRing {
  constructor(node, type, defaultGoal) {
    this.ring = new Ring(node);
    this.type = type;
    this.defaultGoal = defaultGoal;
  }
  update(health) {
    let today = health.today.adjusted;
    let goal = health.goals;
    let todayValue = today[this.type] || 0;
    let goalValue = goal[this.type] || this.defaultGoal;
    this.ring.update(todayValue / goalValue);
  }
}

export class CaloriesRing extends GoalRing {
  constructor(node) {
    super(node, 'calories', 400);
  }
}

export class StepsRing extends GoalRing {
  constructor(node) {
    super(node, 'steps', 10000);
  }
}

export class DistanceRing extends GoalRing {
  constructor(node) {
    super(node, 'distance', 7200);
  }
}

export class ClimbRing extends GoalRing {
  constructor(node) {
    super(node, 'elevationGain', 20);
  }
}

export class ActiveRing extends GoalRing {
  constructor(node) {
    super(node, 'activeMinutes', 30);
  }
}