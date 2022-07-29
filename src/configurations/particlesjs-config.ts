const particles = {
  style: {
    position: 'relative',
    width: '70%',
    height: '70%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  fullScreen: true,
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
        distance: 300,
        links: {
          opacity: 0.7,
        },
        radius: 90,
      },
    },
  },
  particles: {
    color: {
      value: '#ee3462',
    },
    links: {
      blink: true,
      distance: 100,
      enable: true,
      opacity: 0.2,
    },
    move: {
      enable: true,
      speed: 0.4,
    },
    number: {
      value: 35,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.5,
      },
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.2,
      },
    },
  },
}

export default particles
