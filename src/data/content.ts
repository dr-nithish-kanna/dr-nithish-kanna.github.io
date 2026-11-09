// Copy that is reused across pages. Everything here is either from the
// owner's brief or from the old site (testimonials are real clients).

export const testimonials = [
  {
    quote:
      'Great to work with. Communication was clear, and the game features were implemented exactly as discussed. The animations and gameplay felt smooth and polished.',
    client: 'Typing Bird',
    role: 'Studio Director',
  },
  {
    quote:
      'Very responsive and open to feedback. Helped improve gameplay flow and performance, especially for WebGL builds.',
    client: 'Internet Game',
    role: 'Lead Developer',
  },
] as const;

export const skills = [
  { name: 'Unity 2D', icon: 'layers' },
  { name: 'C# Programming', icon: 'code' },
  { name: 'WebGL Games', icon: 'globe' },
  { name: 'Android Development', icon: 'phone' },
  { name: 'Particle Effects', icon: 'sparkles' },
  { name: 'Gameplay Systems', icon: 'cpu' },
  { name: 'Game UI/UX', icon: 'layout' },
  { name: 'Performance Optimization', icon: 'gauge' },
] as const;

export const services = [
  {
    id: 'unity-game-development',
    title: 'Unity Game Development',
    icon: 'gamepad',
    summary: 'A complete game or a feature for your existing project, built in Unity with clean, readable C#.',
    points: ['Custom game mechanics', 'Level design', 'Mobile optimisation', 'Cross-platform builds (WebGL, Android, Windows)'],
  },
  {
    id: 'game-prototyping',
    title: 'Game Prototyping',
    icon: 'rocket',
    summary: 'Find out if an idea is fun before you commit to it. A playable build you can test and show.',
    points: ['Quick turnaround', 'Playable demos', 'Mechanic testing', 'Iteration support'],
  },
  {
    id: 'bug-fixing-optimization',
    title: 'Bug Fixing & Optimization',
    icon: 'bug',
    summary: 'Crashes, frame drops, slow WebGL loads or tangled code. I find the cause and fix it.',
    points: ['Profiling', 'Memory optimisation', 'Bug fixes', 'Refactoring'],
  },
  {
    id: 'ui-animation-polish',
    title: 'UI Animation & Polish',
    icon: 'sparkles',
    summary: 'The game feel that makes players stay: responsive UI, juicy feedback and smooth motion.',
    points: ['UI animation', 'Particle effects', 'DOTween', 'Visual feedback'],
  },
] as const;

export const process = [
  { title: 'Brief', text: 'You share the idea, references, platform and timeline. I ask questions until the scope is clear.' },
  { title: 'Prototype', text: 'The core mechanic first, so we can check the feel early and change direction cheaply.' },
  { title: 'Build', text: 'Features, levels and UI, with regular builds so you always see progress.' },
  { title: 'Polish', text: 'Animation, effects, bug fixing and performance passes on your target devices.' },
  { title: 'Handover', text: 'Final builds and project files delivered as agreed, organised so your team can keep working on them.' },
] as const;
