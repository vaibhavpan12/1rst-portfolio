const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}


requestAnimationFrame(raf)

function mouse3deffect() {
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    document.querySelectorAll('#myimg').forEach(Layer => {

      const speed = Layer.getAttribute('data-speed')
      const x = (window.innerWidth - e.pageX * speed) / 500
      const y = (window.innerWidth - e.pageY * speed) / 500
      Layer.style.transform = `translate(${x}px) translate(${y}px)`;
    });

  }
}
mouse3deffect()


function nameanimation() {
  gsap.from(".name", {

    y: 10,
    opacity: 0,
    delay: 0.2,

  }, 0)
  gsap.from(".profestion", {
    opacity: 0,
    delay: 0.2
  }, 0)
}
nameanimation()

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.main-section',
    pin: true,
    start: '50% 50%',
    end: '250% 50%',
    scrub: true,
    // markers: true,
  }
});
tl.to("#animation", {
  opacity: 1,
  filter: "blur(0px)"
})
  .to(".main-section h1", {
    opacity: 1,

  }, 0)


  .to("#logo", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to("#social", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to("#seo", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to("#adobe", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to("#html", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to("#digital", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to("#webflow", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to("#figma", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to("#javascript", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to("#wordpress", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to("#css", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })


function projectanimation() {
  var t2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.projects',
      // pin: true,
      start: '0% 50%', // when the top of the trigger hits the top of the viewport
      end: '100% 50%', // end after scrolling 500px beyond the start
      scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true
    }
  });

  t2.to(".nameanimaiton h2", {
    width: "500px",
  })
  t2.to(".spacefull", {
    height: "20vh",
    delay: .5
  })
  t2.to(".starbucks", {
    left: "300px",
    opacity: 1,
    delay: .5

  },)
  t2.to(".spacefull", {
    height: "52vh",
    delay: .5
  })
  t2.to(".flaashnet", {
    right: "300px",
    opacity: 1,
    delay: .5

  },)
  t2.to(".spacefull", {
    height: "70vh",
    delay: .5
  })
  t2.to(".shoppers", {
    left: "300px",
    opacity: 1,
    delay: .5

  },)
  t2.to(".spacefull", {
    height: "82vh",
    delay: .5
  })
  t2.to(".gemini", {
    right: "300px",
    opacity: 1,
    delay: .5

  },)
  t2.to(".spacefull", {
    height: "110vh",
    delay: .5
  })
  t2.to(".swt", {
    left: "300px",
    opacity: 1,
    delay: .5

  },)
  t2.to(".spacefull", {
    height: "180vh",
    delay: .5
  })

}
projectanimation()


