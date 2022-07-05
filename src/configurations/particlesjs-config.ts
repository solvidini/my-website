const particles = {
  style: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  fullScreen: true,
  detectRetina: true,
  pauseOnOutsideViewport: true,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'connect',
      },
    },
    modes: {
      connect: {
        distance: 200,
        links: {
          opacity: 0.7,
        },
        radius: 90,
      },
      grab: {
        distance: 200,
        links: {
          blink: true,
          consent: true,
          opacity: 0.4,
        },
      },
    },
  },
  particles: {
    color: {
      value: '#ee3462',
    },
    links: {
      blink: true,
      color: {
        value: '#ffffff',
      },
      distance: 150,
      enable: true,
      opacity: 0.3,
    },
    move: {
      spin: {
        enable: false,
      },
      enable: true,
      speed: 0.5,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.5,
      },
      animation: {
        enable: true,
        speed: 3,
        minimumValue: 0.1,
      },
    },
    size: {
      value: {
        min: 0.1,
        max: 0.1,
      },
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.005,
        opacity: 0.6,
        color: {
          value: '#f1c532',
        },
      },
      particles: {
        color: {
          value: '#ffff00',
        },
      },
    },
  },
}

export default particles
